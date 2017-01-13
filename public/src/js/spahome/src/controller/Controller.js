/*
 * @author: Caesar
 * @module:
 *
 */

define([
    'spahome/src/main/app',
    'libs',
    'spahome/src/controller/list/ListController',
    'spahome/src/controller/list/ListDetailController',

    'spahome/src/view/common/BottomView'
    ],
    function (
        App,
        libs,
        ListController,
        ListDetailController,

        BottomNavView
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
            // App.rootLayout.listRegion.show( new ListView() );
        },
        index: function () {
            console.log('index');

            var listController = ListController;
            listController.initialize();

            $('#list').show();
            $('#pencil').show();
            $('#mod-navs').show();
            $('#list-detail').hide();

            // var touchSlide = new TouchSlide();

            // $('#container').addClass('load');
            // $('title').text('几何');
            // //App.rootLayout.mainRegion.show(new WelcomeView());
            // this.changeView('pics');

            // var picsController = PicsController;
            // picsController.initialize();



        },
        detail: function (id) {
            console.log('detail id: ' + id);

            // $(window).off('scroll');
            // $(window).scroll(function () {
            //     console.log('detail window scroll false');
            //     return false;
            // });

            window.onscroll = null;
            var listDetailController = ListDetailController;
            ListDetailController.initialize();

            $('#list').hide();
            $('#pencil').hide();
            $('#mod-navs').hide();
            $('#list-detail').show();




            // $(window).off('scroll');

            console.log('detail end');

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

