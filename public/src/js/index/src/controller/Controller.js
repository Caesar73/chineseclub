/*
 * @author: Caesar
 * @module:
 *
 */

// define(function (require, exports) {
//     var libs       = require('libs');
//     var _          = libs.underscore;
//     var $          = libs.jquery;
//     var Backbone   = libs.Backbone;
//     var Marionette = libs.Marionette;

//     //var App        = require('index/main');
//     var HeaderView     = require('index/src/view/HeaderView');
//     var BottomNavView  = require('index/src/view/BottomNavView');
//     var RootLayoutView = require('index/src/layout/RootLayoutView');
//     var App = window.App;
//     console.log(App);
    //console.log(RootLayoutView);
define([
    'index/src/main/app',
    'libs',

    'index/src/view/common/HeaderView',
    // 'index/src/view/common/ControlBarView',
    //

    // 'index/src/view/pics/PicsNavView',
    // 'index/src/view/list/ListNavView',
    // 'index/src/view/album/AlbumNavView',

    // 'index/src/controller/pics/PicsController',
    // 'index/src/controller/list/ListController',
    // 'index/src/controller/album/AlbumController',

    // 'index/src/view/pics/GalleryView',

    // 'index/src/controller/pics/TipsDialogController',
    // 'index/src/controller/pics/PicsDialogController',
    // 'index/src/controller/list/ListDialogController',
    // 'index/src/controller/album/AlbumDialogController'

    'index/src/view/common/BottomView'
    ],
    function (
        App,
        libs,

        HeaderView,
        // ControlView,
        //

        // PicsNavView,
        // ListNavView,
        // AlbumNavView,

        // PicsController,
        // ListController,
        // AlbumController,

        // GalleryView,

        // TipsDialogController,
        // PicsDialogController,
        // ListDialogController,
        // AlbumDialogController

        BottomNavView
        ) {
    var _            = libs.underscore;
    var $            = libs.jquery;
    var Backbone     = libs.Backbone;
    var Marionette   = libs.Marionette;
    var LocalStorage = libs.LocalStorage;
/*
    var bookCollection = new BookCollection();
    var bookView       = new BookView(collection: bookCollection);
    bookCollection.fetch({ success: function () { bookView.render() } });
*/

    var Controller = Backbone.Marionette.Controller.extend({
        initialize: function (options) {
            console.log('Controller initialize');
            // App.rootLayout.topNavRegion.show(     new HeaderView() );
            // App.rootLayout.bottomNavRegion.show(  new BottomNavView() );

            //App.rootLayout.controlNavRegion.show( new ControlView() );

        },
        //gets mapped to in AppRouter's appRoutes
        index: function () {
            console.log('index');
            // $('#container').addClass('load');
            // $('title').text('几何');
            // //App.rootLayout.mainRegion.show(new WelcomeView());
            // this.changeView('pics');

            // var picsController = PicsController;
            // picsController.initialize();

            // var picsNavView = new PicsNavView;
            // picsNavView.render({});

        },
        loadIndex: function () {
            var that = this;
            if ( !$('#container').hasClass('load') ) {
                console.log('aindex');
                //that.index();
                $('#aindex').trigger('click');
                return false;
            }
            else {
                return true;
            }
        },


        home: function () {
            console.log('home');
            this.changeView({
                name: 'home',
                title: ''
            });
        },
        menu: function () {
            console.log('menu');
            this.changeView({
                name: 'menu',
                title: ''
            });
        },
        cart: function () {
            console.log('cart');
            this.changeView({
                name: 'cart',
                title: ''
            });
        },
        mine: function () {
            console.log('mine');
            this.changeView({
                name: 'mine',
                title: ''
            });
        },
        changeView: function (options) {
            var _name  = options.name;
            var _title = options.title;



            // $('title').text('我的');
            // var controllerBar = $('.header-control-bar');
            // var targetNow     = controllerBar.data('target');
            // controllerBar.removeClass(targetNow).addClass(_type);
            // controllerBar.data('target', _type);
            /*
            var page = $('.page.page-' + _type);
            if (page.hasClass('show')) {
                $('body').scrollTop(0);
            }
            else {
                $('.page.show').removeClass('show');
                page.addClass('show');
            }
            switch (_url) {
                case 'home':
                    break;
            }
            */
        },
        showDialog: function (type) {
            var run = this.loadIndex();
            if (!run) return;
            $('body').removeClass().addClass('ohidden');
            $('#showdow').show();
            $('#dialog').show();
        },
        closeDialog: function () {
            var run = this.loadIndex();
            if (!run) return;
            $('body').removeClass().addClass('oauto');
            $('#showdow').hide();
            $('#dialog').hide();
        }

    });

    return Controller;

});

