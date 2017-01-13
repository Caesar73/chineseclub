/*
 * @author: Caesar
 * @module:
 *
 */

define([
    'phooer/src/main/app',
    'libs',

    'phooer/src/controller/common/HeaderController',
    'phooer/src/view/common/ChannelView',

    'phooer/src/controller/page/ListController'

    ],
    function (
        App,
        libs,

        HeaderController,
        ChannelView,

        ListController

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
            container.find('#pageletListContent').show();
            container.find('#channel-container').hide();

            var headerController = HeaderController;
            headerController.initialize({
                platform: _plat,
                type: 'index'
            });

            var listController = ListController;
            listController.initialize({
                platform: _plat,
                type: _type
            });

        },
        list:function (type, platform) {
            var _type = type || 'all';
            var _plat = platform || 'webapp';
            window._platform = _plat;

            var container = $('#container');
            console.log('index type: ' + _type + ', platform: ' + _plat);
            container.find('#pageletListContent').show();
            container.find('#channel-container').hide();

            // container.find('#pageletListContent').show();
            // container.find('#channel-container').hide();

            var listController = ListController;
            listController.initialize({
                platform: _plat,
                type: _type
            });

        },
        channel : function (platform, type) {
            var _type = type || 'all';
            var _plat = platform || 'webapp';
            window._platform = _plat;

            var container = $('#container');
            console.log('index type: ' + _type + ', platform: ' + _plat);
            container.find('#pageletListContent').hide();
            container.find('#channel-container').show();

            var headerController = HeaderController;
            headerController.initialize({
                platform: _plat,
                type: 'channel'
            });

            var view = new ChannelView;
            view.render({});

        },
        search : function (platform, type) {
            var _type = type || 'all';
            var _plat = platform || 'webapp';
            window._platform = _plat;

            var container = $('#container');
            console.log('index type: ' + _type + ', platform: ' + _plat);
            // container.find('#pageletListContent').hide();
            // container.find('#channel-container').show();

            // var headerController = HeaderController;
            // headerController.initialize({
            //     platform: _plat,
            //     type: 'channel'
            // });

            // var view = new ChannelView;
            // view.render({});

        },


    });

    return Controller;

});

