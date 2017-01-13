/*
 * @author: Caesar
 * @module:
 *
 */

define([
    'blog/src/main/app',
    'libs',

    'blog/src/controller/list/ListController',
    'blog/src/controller/list/ListDetailController',

    'blog/src/controller/mine/MineController',
    'blog/src/controller/mine/MineListController',

    'blog/src/controller/common/WriteController',
    'blog/src/controller/common/CreateController'
    ],
    function (
        App,
        libs,

        ListController,
        ListDetailController,

        MineController,
        MineListController,

        WriteController,
        CreateController

        ) {
    var _            = libs.underscore;
    var $            = libs.jquery;
    var Backbone     = libs.Backbone;
    var Marionette   = libs.Marionette;
    var LocalStorage = libs.LocalStorage;

    var TouchSlide   = libs.TouchSlide;
/*
    var bookCollection = new BookCollection();
    var bookView       = new BookView(collection: bookCollection);
    bookCollection.fetch({ success: function () { bookView.render() } });
*/

    var Controller = Backbone.Marionette.Controller.extend({
        initialize: function (options) {
            console.log('Controller initialize');
            this.back = {
                index: {
                    title: '首页'
                },
                myBlog: {
                    title: '我的游记'
                },
                myFavorite: {
                    title: '我的收藏'
                }
            }
            // App.rootLayout.listRegion.show( new ListView() );
        },
        index: function (platform, type) {
            var _type = type || 'all';
            var _plat = platform || 'webapp';
            window._platform = _plat;

            var container = $('#container');
            console.log('index type: ' + _type + ', platform: ' + _plat);

            $('#mask').show();
            window.resizeContainer();

            var listController = ListController;
            listController.initialize({
                platform: _plat
            });

            window.onscroll = null;

            $('#list').show();
            $('#header').show();
            $('#pencil').show();
            $('#pencil').css('bottom', '7rem');
            $('#mod-navs').show();

            $('#list-detail').hide();

            $('#mine').hide();
            $('#mine-list').hide();
            $('#mine-list-header').hide();

            $('#write').hide();

            $('.navs-item.navs-current').removeClass('navs-current');
            $('.navs-item-home').addClass('navs-current');

            if (_plat == 'native') {
                $('#header').hide();
                $('#pencil').hide();
                $('#mod-navs').hide();

                $('#list').css({
                    'padding-top': '0.3rem',
                    'padding-bottom': '4.2rem'
                });
                var css = '.loading-new { bottom: 0; }';
                $('#tips').text(css);
            }
            else {
                $('#list').css({
                    'padding-top': '3.3rem',
                    'padding-bottom': '9.7rem'
                });

                var css = '.loading-new { bottom: 5.2rem; }';
                $('#tips').text(css);
            }

            // var touchSlide = new TouchSlide();

            // $('#container').addClass('load');
            // $('title').text('几何');
            // //App.rootLayout.mainRegion.show(new WelcomeView());
            // this.changeView('pics');

            // var picsController = PicsController;
            // picsController.initialize();
            var searchBar = container.find('.search-bar');
            searchBar.find('.green_current').removeClass('sort_current').removeClass('green_current');
            var target = searchBar.find('[data-type= ' + _type + ']');
            target.addClass('green_current').addClass('sort_current');
            searchBar.find('label').text( target.text() );
            if (type != null) {
                container.find('#search').trigger('click');
            }

        },
        detail: function (platform, back, id) {
            console.log('detail back: ' + back +  ', id: ' + id);
            var _plat = platform || 'webapp';
            window._platform = _plat;
            var back  = back || 'index';
            var id    = id || 'index';

            $('#mask').show();
            window.resizeContainer();

            // $(window).off('scroll');
            // $(window).scroll(function () {
            //     console.log('detail window scroll false');
            //     return false;
            // });

            var title = this.back[back].title;

            var listDetailController = ListDetailController;
            ListDetailController.initialize({
                type: back,
                title: title,
                platform: _plat
            });

            window.onscroll = null;

            $('#list').hide();
            $('#header').hide();
            $('#pencil').hide();
            $('#pencil').css('bottom', '7rem');
            $('#mod-navs').hide();

            $('#list-detail').show();

            $('#mine').hide();
            $('#mine-list').hide();
            $('#mine-list-header').hide();

            $('#write').hide();

            // $(window).off('scroll');

            // $('#mask').hide();
            console.log('detail end');

        },

        mine: function (platform) {
            console.log('mine');
            var _plat = platform || 'webapp';
            window._platform = _plat;

            $('#mask').show();
            window.resizeContainer('100');
            // this.changeView({
            //     name: 'mine',
            //     title: ''
            // });

            var mineController = MineController;
            mineController.initialize();

            window.onscroll = null;

            $('#list').hide();
            $('#header').hide();
            $('#pencil').show();
            $('#pencil').css('bottom', '7rem');
            $('#mod-navs').show();

            $('#list-detail').hide();

            $('#mine').show();
            $('#mine-list').hide();
            $('#mine-list-header').hide();

            $('#write').hide();

            $('.navs-item.navs-current').removeClass('navs-current');
            $('.navs-item-mine').addClass('navs-current');

            $('#mask').hide();

        },
        myBlog: function (platform) {
            console.log('myBlog');
            var _plat = platform || 'webapp';
            window._platform = _plat;

            $('#mask').show();
            window.resizeContainer();

            var mineListController = MineListController;
            mineListController.initialize({
                type: 'myBlog',
                title : '我的',
                platform: _plat
            });

            window.onscroll = null;

            $('#list').hide();
            $('#header').hide();
            $('#pencil').show();
            $('#pencil').css('bottom', '2rem');
            $('#mod-navs').hide();

            $('#list-detail').hide();

            $('#mine').hide();
            $('#mine-list').show();
            $('#mine-list-header').show();

            $('#write').hide();

            $('.navs-item.navs-current').removeClass('navs-current');
            $('.navs-item-mine').addClass('navs-current');

            if (_plat == 'native') {
                $('#mine-list-header').hide();

                $('#mine-list').css({
                    'padding-top': '0.3rem'
                });
                var css = '.loading-new { bottom: 0; }';
                $('#tips').text(css);
            }
            else {
                $('#mine-list').css({
                    'padding-top': '4.3rem'
                });

                var css = '.loading-new { bottom: 0; }';
                $('#tips').text(css);
            }

            $('#mask').hide();

        },
        myFavorite: function (platform) {
            console.log('myFavorite');
            var _plat = platform || 'webapp';
            window._platform = _plat;

            $('#mask').show();
            window.resizeContainer();

            var mineListController = MineListController;
            mineListController.initialize({
                type: 'myFavorite',
                title : '我的',
                platform: _plat
            });


            window.onscroll = null;

            $('#list').hide();
            $('#header').hide();
            $('#pencil').show();
            $('#pencil').css('bottom', '2rem');
            $('#mod-navs').hide();

            $('#list-detail').hide();

            $('#mine').hide();
            $('#mine-list').show();
            $('#mine-list-header').show();

            $('#write').hide();

            $('.navs-item.navs-current').removeClass('navs-current');
            $('.navs-item-mine').addClass('navs-current');

            if (_plat == 'native') {
                $('#mine-list-header').hide();

                $('#mine-list').css({
                    'padding-top': '0.3rem'
                });
                var css = '.loading-new { bottom: 0; }';
                $('#tips').text(css);
            }
            else {
                $('#mine-list').css({
                    'padding-top': '4.3rem'
                });

                var css = '.loading-new { bottom: 0; }';
                $('#tips').text(css);
            }

            $('#mask').hide();

        },
        myInfo: function (platform) {
            console.log('myInfo');
            var _plat = platform || 'webapp';
            window._platform = _plat;

            $('#mask').show();
            window.resizeContainer();

            $('#mask').hide();

        },
        about: function (platform) {
            console.log('about');
            var _plat = platform || 'webapp';
            window._platform = _plat;
        },

        write: function (platform) {
            console.log('write');
            var _plat = platform || 'webapp';
            window._platform = _plat;

            $('#mask').show();
            window.resizeContainer('100');

            var writeController = WriteController;
            writeController.initialize();

            window.onscroll = null;

            $('#list').hide();
            $('#header').hide();
            $('#pencil').hide();
            $('#mod-navs').hide();

            $('#list-detail').hide();

            $('#mine').hide();
            $('#mine-list').hide();
            $('#mine-list-header').hide();

            $('#write').show();

            $('#mask').hide();

        },
        create: function (platform) {
            console.log('create');
            var _plat = platform || 'webapp';
            window._platform = _plat;

            $('#mask').show();
            window.resizeContainer('100');

            var createController = CreateController;
            createController.initialize();

            window.onscroll = null;

            $('#list').hide();
            $('#header').hide();
            $('#pencil').hide();
            $('#mod-navs').hide();

            $('#list-detail').hide();

            $('#mine').hide();
            $('#mine-list').hide();
            $('#mine-list-header').hide();

            $('#write').show();

            $('#mask').hide();

        },
        // loadIndex: function () {
        //     var that = this;
        //     if ( !$('#container').hasClass('load') ) {
        //         console.log('aindex');
        //         //that.index();
        //         $('#aindex').trigger('click');
        //         return false;
        //     }
        //     else {
        //         return true;
        //     }
        // },


        // home: function () {
        //     console.log('home');
        //     this.changeView({
        //         name: 'home',
        //         title: ''
        //     });
        // },
        // menu: function () {
        //     console.log('menu');
        //     this.changeView({
        //         name: 'menu',
        //         title: ''
        //     });
        // },
        // cart: function () {
        //     console.log('cart');
        //     this.changeView({
        //         name: 'cart',
        //         title: ''
        //     });
        // },
        // mine: function () {
        //     console.log('mine');
        //     this.changeView({
        //         name: 'mine',
        //         title: ''
        //     });
        // },

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

