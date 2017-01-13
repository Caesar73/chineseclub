/*
 * @author: Caesar
 * @module:
 *
 */

define([
    'language/src/main/app',
    'libs',

    'language/src/controller/course/ListController',
    'language/src/controller/course/CourseController',

    'language/src/controller/lesson/LessonController',

    'language/src/controller/mine/MineController',

    'language/src/controller/mine/HomeworkController',
    'language/src/controller/mine/NotebookController',

    'language/src/view/common/HeaderView',
    'language/src/view/common/BottomView'
    ],
    function (
        App,
        libs,

        ListController,
        CourseController,

        LessonController,

        MineController,

        HomeworkCollection,
        NotebookController,

        HeaderView,
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
            this.back = {
                studying: {
                    title: '学习中'
                },
                completed: {
                    title: '已完成'
                },
                free: {
                    title: '公共课'
                }
            }
        },
        index: function (platform, type) {
            var _type = type || 'studying';
            var _plat = platform || 'webapp';
            if (_type == 'free') {
                this.free(_plat);
                return;
            }

            console.log('index: ' + type + ', p: ' + _plat);

            var header = new HeaderView();
            header.render(_type);

            window.onscroll = null;

            $('#header').show();
            $('#course-list').show();

            $('#free').hide();
            $('#lesson').hide();
            $('#mine').hide();

            $('#mod-navs').show();

            // $('#pencil').hide();
            // $('#pencil').css('bottom', '7rem');

            $('.navs-item.navs-current').removeClass('navs-current');
            $('.navs-item-home').addClass('navs-current');

            var listController = ListController;
            listController.initialize({
                type: _type
            });
            $('#mask').hide();

            // $('#list').show();
            // $('#pencil').show();
            // $('#mod-navs').show();
            // $('#list-detail').hide();

            // var touchSlide = new TouchSlide();

            // $('#container').addClass('load');
            // $('title').text('几何');
            // //App.rootLayout.mainRegion.show(new WelcomeView());
            // this.changeView('pics');

            // var picsController = PicsController;
            // picsController.initialize();

            // 设置 手风琴效果
            var courseContainer = $('#course-list');
            if ( courseContainer.hasClass('bind-course-list') ) {
                return;
            }
            else {
                courseContainer.addClass('bind-course-list');
                courseContainer
                .on('click', '.ui-collapsible-heading-toggle', function (e) {
                    var me = $(e.target);
                    var fa = me.parents('.ui-collapsible-heading');
                    var li = fa.siblings('.ui-collapsible-list');
                    // me.addClass('class_name')
                    if (li.hasClass('active')) {
                        courseContainer.find('.ui-collapsible-list.active').removeClass('active');
                    }
                    else {
                        courseContainer.find('.ui-collapsible-list.active').removeClass('active');
                        li.addClass('active');
                    }

                })
                ;
            }

        },
        lesson: function (platform, back, id) {
            console.log('lesson back: ' + back +  ', id: ' + id);
            var _plat = platform || 'webapp';
            var back  = back || 'index';
            var id    = id || 'index';

            $('#mask').show();
            window.onscroll = null;

            $('#header').hide();
            $('#course-list').hide();
            $('#free').hide();
            $('#mine').hide();

            $('#lesson').show();

            $('#mod-navs').hide();

            var title = this.back[back].title;

            var lessonController = LessonController;
            lessonController.initialize({
                type: back,
                title: title
            });

            // $('#pencil').hide();
            // $('#pencil').css('bottom', '7rem');

            // var lessonController = LessonController;
            // lessonController.initialize({
            //     id: id
            // });

            $('#mask').hide();

        },
        // detail: function (platform, id) {
        //     console.log('detail id: ' + id);
        //     var _plat = platform || 'webapp';

        //     // $(window).off('scroll');
        //     // $(window).scroll(function () {
        //     //     console.log('detail window scroll false');
        //     //     return false;
        //     // });

        //     window.onscroll = null;
        //     var listDetailController = ListDetailController;
        //     ListDetailController.initialize();

        //     $('#course-list').hide();
        //     $('#pencil').hide();
        //     $('#mod-navs').hide();
        //     $('#list-detail').show();




        //     // $(window).off('scroll');

        //     console.log('detail end');

        // },
        free: function (platform) {
            console.log('free');
            var _plat = platform || 'webapp';

            $('#mask').show();

            var type   = 'free';
            var header = new HeaderView();
            header.render(type);

            // var mineController = MineController;
            // mineController.initialize();

            window.onscroll = null;

            $('#header').show();
            $('#course-list').hide();

            $('#free').show();
            $('#lesson').hide();
            $('#mine').hide();

            // $('#pencil').hide();
            // $('#pencil').css('bottom', '7rem');
            // $('#write').hide();

            $('#mod-navs').show();

            $('.navs-item.navs-current').removeClass('navs-current');
            $('.navs-item-cart').addClass('navs-current');

            var type = 'free';
            var listController = ListController;
            listController.initialize({
                type: type
            });

            $('#mask').hide();

            // 设置 手风琴效果
            var courseContainer = $('#free');
            if ( courseContainer.hasClass('bind-course-list') ) {
                return;
            }
            else {
                courseContainer.addClass('bind-course-list');
                courseContainer
                .on('click', '.ui-collapsible-heading-toggle', function (e) {
                    var me = $(e.target);
                    var fa = me.parents('.ui-collapsible-heading');
                    var li = fa.siblings('.ui-collapsible-list');
                    // me.addClass('class_name')
                    if (li.hasClass('active')) {
                        courseContainer.find('.ui-collapsible-list.active').removeClass('active');
                    }
                    else {
                        courseContainer.find('.ui-collapsible-list.active').removeClass('active');
                        li.addClass('active');
                    }

                })
                ;
            }

        },
        mine: function (platform) {
            console.log('mine');
            var _plat = platform || 'webapp';

            $('#mask').show();

            var mineController = MineController;
            mineController.initialize();

            window.onscroll = null;

            $('#header').hide();
            $('#course-list').hide();

            $('#free').hide();
            $('#lesson').hide();
            $('#mine').show();

            // $('#pencil').hide();
            // $('#pencil').css('bottom', '7rem');
            // $('#write').hide();

            $('#mod-navs').show();

            $('.navs-item.navs-current').removeClass('navs-current');
            $('.navs-item-mine').addClass('navs-current');

            $('#mask').hide();

        },
        myHomework: function (platform) {
            console.log('myHomework');
            var _plat = platform || 'webapp';

            $('#mask').show();

            $('#lesson').hide();

            $('#mod-navs').show();

            var homeworkCollection = HomeworkCollection;
            homeworkCollection.initialize();

            $('#mask').hide();

        },
        myNotebook: function (platform) {
            console.log('myNotebook');
            var _plat = platform || 'webapp';

            $('#mask').show();

            $('#lesson').hide();

            $('#mod-navs').show();

            var notebookController = NotebookController;
            notebookController.initialize();

            $('#mask').hide();

        },
        myInfo: function (platform) {
            console.log('myInfo');
            var _plat = platform || 'webapp';

            $('#lesson').hide();
            $('#mod-navs').show();
        },
        about: function (platform) {
            console.log('about');
            var _plat = platform || 'webapp';

            $('#lesson').hide();
            $('#mod-navs').show();
        },

        changeView: function (options) {
            var _name  = options.name;
            var _title = options.title;

            // $('#mod-navs').show();
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

