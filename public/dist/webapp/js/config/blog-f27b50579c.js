/*
 * @author: Caesar
 * @module:
 *
 */

// require.config({
//     baseUrl: "/src/js",
//     paths: {
//         "jquery"     : "libs/src/jquery.min",
//         "underscore" : "libs/src/underscore.min",
//         "backbone"   : "libs/src/backbone",
//         "marionette" : "libs/src/marionette",
//         "libs"       : "libs/main"
//     }
// });

require.config({
    baseUrl: "/dist/webapp/js",
    paths: {
        "libs": "libs/main"
    }
});


require(['libs'], function (libs) {
    var $ = libs.jquery;
    $(document).ready(main);
});

function main () {
    require(['blog/main', 'libs'], function (App, libs) {
        var _            = libs.underscore;
        var $            = libs.jquery;
        var Backbone     = libs.Backbone;
        var Marionette   = libs.Marionette;
        var LocalStorage = libs.LocalStorage;

        //var test = libs.test;
        /*
        Backbone.history.start({
            pushState : true,
            hashChange: false,
            root      : 'home'
        });
        */

        //Backbone.history.start();
        App.init();



        // window.App = App;
        // console.log(window.App);
        //App.start();

    });
}