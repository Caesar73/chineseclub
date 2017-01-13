/*
 *
 */

var path        = require('path');
var gulp        = require('gulp');
var del         = require('del');
var runSequence = require('run-sequence');
var watch       = require('gulp-watch');
var amdOptimize = require('amd-optimize');

var plugins           = require('gulp-load-plugins')();
    plugins.jsmin     = require('gulp-jsmin');
    plugins.ejsmin    = require('gulp-ejsmin');
    plugins.rename    = require('gulp-rename');
    plugins.uglify    = require('gulp-uglify');
    plugins.grev      = require('gulp-rev');
    plugins.sass      = require('gulp-sass');
    plugins.minifyCss = require("gulp-minify-css");
    plugins.minify    = require("gulp-minify");

var sass     = require('sass');

// gulp-sass

//plugins.rubySass = require('gulp-ruby-sass');
//plugins.jsmin    = require('gulp-jsmin');
//plugins.ejsmin   = require('gulp-ejsmin');
//plugins.uglify   = require('gulp-uglify');
//plugins.grev     = require('gulp-rev');

var destDir = 'dist';
var srcDir  = 'src';


// var gulp = require("gulp");
// var sass = require("gulp-sass-china");
// var dgbl = require("del-gulpsass-blank-lines");

// gulp.task('sass', function (){
//     gulp.src(srcDir + '/scss/**/*.scss')
//         .pipe(sass({
//             outputStyle: 'compact'
//         })
//             .on('error', sass.logError))
//         .pipe(dgbl())
//         .pipe(gulp.dest(destDir + '/css'));
// });


// gulp.task('clean',         del.bind(null, [destDir + '']));
// gulp.task('clean:js',      del.bind(null, [destDir + '/js']));
// gulp.task('clean:pcss',    del.bind(null, [destDir + '/css/pure']));
// gulp.task('clean:cssapp',  del.bind(null, [destDir + '/css/map']));

gulp.task('clean:scss:webapp', del.bind(null, ['/dist/webapp/css/scss']));
gulp.task('clean:less:webapp', del.bind(null, ['/dist/webapp/css/less']));
gulp.task('clean:css:min',     del.bind(null, ['/dist/min']));

gulp.task('clean:css:webapp', del.bind(null, ['/dist/webapp/css']));
gulp.task('clean:js:webapp',  del.bind(null, ['/dist/webapp/js']));

gulp.task('less', ["clean:less:webapp"], function () {
    return gulp.src(srcDir + '/less/*.less')
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.less())
        .pipe(plugins.minifyCss())
        .pipe(plugins.sourcemaps.write('maps'))
        .pipe(gulp.dest(destDir + '/webapp/css/less'));
});

gulp.task('scss', ["clean:scss:webapp"], function () {

    return gulp.src(srcDir + '/scss/*.scss')
        .pipe(plugins.sass().on('error', plugins.sass.logError))
        .pipe(gulp.dest(destDir + '/webapp/css/scss'))
        ;

});

gulp.task('mscss', ["clean:scss:webapp"], function () {

    return gulp.src(srcDir + '/scss/*.scss')
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.sass().on('error', plugins.sass.logError))
        .pipe(plugins.minifyCss())
        .pipe(plugins.sourcemaps.write('maps'))
        .pipe(plugins.rename({
            suffix: "-min"
        }))
        .pipe(gulp.dest(destDir + '/webapp/css/scss'))
        ;

});




gulp.task('min:css', ["clean:css:min"], function () {

    return gulp.src(destDir + '/**/*.css')
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.minifyCss())
        .pipe(plugins.sourcemaps.write('maps'))
        .pipe(plugins.rename({
            suffix: "-min"
        }))
        .pipe(gulp.dest(destDir + '/min'))
        ;

});

gulp.task('min', ["min:css"]);




var amdConfig = {
    baseUrl: "src/js",
    paths: {
        /*
        // Jquery 集成调用
        "purejquery"       : "libs/src/jquery/jquery-1.9.1",
        "jquery.ui.widget" : "libs/src/jquery/jquery.ui.widget",
        "iframe-transport" : "libs/src/jquery/jquery.iframe-transport",
        // "fileupload-main"  : "libs/src/jquery/jquery.fileupload",
        "jquery"           : "libs/src/jquery/jquery",
        */

        "jquery"           : "libs/src/jquery.min",
        // "jquery"           : "libs/src/zepto/zepto",
        "underscore"       : "libs/src/lodash",
        "purebackbone"     : "libs/src/backbone",
        "marionette"       : "libs/src/marionette",
        "localStorage"     : "libs/src/localStorage",
        "jqcookie"         : "libs/src/jquery/jquery.cookie",

        "backbone"         : "libs/src/backbone/backbone",
        // "fileupload"       : "libs/src/jquery/fileupload",
        // "qinius"           : "libs/src/qinius",
        "md5"              : "libs/src/md5",
        "anijs"            : "libs/src/anijs",
        "touchSlide"       : "libs/src/TouchSlide",
        "pageLoader"       : "libs/src/pageLoader",
        // "bb-dvl": "lib/js/backbone/backbone.defered-view-loader",
        // "bb-ls": "lib/js/backbone/backbone.localStorage-min",
        // "router": "routes",
        // "main_view": "views/main",
        // "file_view": "views/file_view",
        // "form_file": "views/form_file",
        // "file_list": "views/file_list",
        // "file_model": "models/file",
        // "file_collection": "collections/files",
        "test"             : "libs/src/test",
        "libs"             : "libs/main"
    },
    shim: {
        // jquery: {
        //     deps: ["purejquery", "jquery.ui.widget", "iframe-transport"]
        // },

        // underscore: {
        //     exports: '_'
        // },
        purebackbone: {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },
        // "bb-dvl": ["purebackbone", "underscore"],
        // "bb-ls": ["purebackbone", "underscore"],
        // "router": ["purebackbone", "underscore"],
        "fileupload": ["jquery"]
    }
}

gulp.task('build_js', ["clean:js:webapp"], function () {
    //gulp.src(['/src/js/*.js', '/public/js/pc/**/*.js'])
    return gulp.src(['./src/js/*.js'])
        .pipe(plugins.minify())
        .pipe(gulp.dest(destDir + '/webapp/js'))
        .pipe(plugins.grev())
        .pipe(gulp.dest(path.join(destDir, "webapp/js")))
        .pipe(plugins.grev.manifest("manifest_prod.json"))
        .pipe((gulp.dest(path.join(destDir, "webapp/js"))))
        ;
});

gulp.task('build_libs', function () {
    var moduleRoot = "libs";
    return gulp.src(moduleRoot + '/**/*.js')
        .pipe(amdOptimize(moduleRoot, amdConfig))
        .pipe(plugins.concat("main.js"))
        .pipe(plugins.minify())
        .pipe(gulp.dest(path.join(destDir, "webapp/js" , moduleRoot)))
        .pipe(plugins.grev())
        .pipe(gulp.dest(path.join(destDir, "webapp/js" , moduleRoot)))
        .pipe(plugins.grev.manifest("manifest_prod.json"))
        .pipe((gulp.dest(path.join(destDir, "webapp/js" , moduleRoot))))
        ;
});

gulp.task('build_config', function () {
    var moduleRoot = "config";
    return gulp.src(['./src/js/config/*.js'])
        .pipe(plugins.minify())
        .pipe(gulp.dest(destDir + '/webapp/js/config'))
        .pipe(plugins.grev())
        .pipe(gulp.dest(path.join(destDir, "webapp/js/config")))
        .pipe(plugins.grev.manifest("manifest_prod.json"))
        .pipe((gulp.dest(path.join(destDir, "webapp/js/config"))))
        ;
});

gulp.task('webapp', ["build_js", "build_libs", "build_blog", "build_language", "build_phooer", "build_config"]);

gulp.task('build_index', function () {
    var moduleRoot = "index";
    return gulp.src(moduleRoot + '/**/*.js')
        .pipe(amdOptimize(moduleRoot + "/main", amdConfig))
        .pipe(plugins.concat("main.js"))
        .pipe(plugins.minify())
        .pipe(gulp.dest(path.join(destDir, "webapp/js" , moduleRoot)))
        .pipe(plugins.grev())
        .pipe(gulp.dest(path.join(destDir, "webapp/js" , moduleRoot)))
        .pipe(plugins.grev.manifest("manifest_prod.json"))
        .pipe((gulp.dest(path.join(destDir, "webapp/js" , moduleRoot))))
        ;
});

gulp.task('build_spahome', function () {
    var moduleRoot = "spahome";
    return gulp.src(moduleRoot + '/**/*.js')
        .pipe(amdOptimize(moduleRoot + "/main", amdConfig))
        .pipe(plugins.concat("main.js"))
        .pipe(plugins.minify())
        .pipe(gulp.dest(path.join(destDir, "webapp/js" , moduleRoot)))
        .pipe(plugins.grev())
        .pipe(gulp.dest(path.join(destDir, "webapp/js" , moduleRoot)))
        .pipe(plugins.grev.manifest("manifest_prod.json"))
        .pipe((gulp.dest(path.join(destDir, "webapp/js" , moduleRoot))))
        ;
});

gulp.task('build_blog', function () {
    var moduleRoot = "blog";
    return gulp.src(moduleRoot + '/**/*.js')
        .pipe(amdOptimize(moduleRoot + "/main", amdConfig))
        .pipe(plugins.concat("main.js"))
        .pipe(plugins.minify())
        .pipe(gulp.dest(path.join(destDir, "webapp/js" , moduleRoot)))
        .pipe(plugins.grev())
        .pipe(gulp.dest(path.join(destDir, "webapp/js" , moduleRoot)))
        .pipe(plugins.grev.manifest("manifest_prod.json"))
        .pipe((gulp.dest(path.join(destDir, "webapp/js" , moduleRoot))))
        ;
});

gulp.task('build_language', function () {
    var moduleRoot = "language";
    return gulp.src(moduleRoot + '/**/*.js')
        .pipe(amdOptimize(moduleRoot + "/main", amdConfig))
        .pipe(plugins.concat("main.js"))
        .pipe(plugins.minify())
        .pipe(gulp.dest(path.join(destDir, "webapp/js" , moduleRoot)))
        .pipe(plugins.grev())
        .pipe(gulp.dest(path.join(destDir, "webapp/js" , moduleRoot)))
        .pipe(plugins.grev.manifest("manifest_prod.json"))
        .pipe((gulp.dest(path.join(destDir, "webapp/js" , moduleRoot))))
        ;
});

gulp.task('build_phooer', function () {
    var moduleRoot = "phooer";
    return gulp.src(moduleRoot + '/**/*.js')
        .pipe(amdOptimize(moduleRoot + "/main", amdConfig))
        .pipe(plugins.concat("main.js"))
        .pipe(plugins.minify())
        .pipe(gulp.dest(path.join(destDir, "webapp/js" , moduleRoot)))
        .pipe(plugins.grev())
        .pipe(gulp.dest(path.join(destDir, "webapp/js" , moduleRoot)))
        .pipe(plugins.grev.manifest("manifest_prod.json"))
        .pipe((gulp.dest(path.join(destDir, "webapp/js" , moduleRoot))))
        ;
});




