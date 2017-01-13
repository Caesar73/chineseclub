/*
 * @author: Caesar
 * @module:
 *
 */

define([
    'libs',
    'blog/src/view/mine/MineListView',
    'blog/src/view/mine/MineListNavView',
    'blog/src/collection/mine/MineListCollection'
    ],
    function (
        libs,
        MineListView,
        MineListNavView,
        ListCollection
        ) {
    var _            = libs.underscore;
    var $            = libs.jquery;
    var Backbone     = libs.Backbone;
    var Marionette   = libs.Marionette;
    var LocalStorage = libs.LocalStorage;

    //var Controller = Backbone.Marionette.Controller.extend({
    var Controller = {
        initialize: function (options) {
            console.log('MineList Controller initialize: ' + options.type);
            var _options = options;
            var collection = new ListCollection;
            var view       = new MineListView(_options);
            var navView    = new MineListNavView;

            navView.render({
                type: _options.type,
                title: _options.title
            });

            collection.fetch({
                success: function (model, response) {
                    console.log('MineList Controller fetch success');
                    //console.log(response);
                    // var data = response;
                    var data = {
                        platform: _options.platform
                    };
                    data = $.extend(true, data, response);
                    // console.log(data);

                    // var data = response;
                    view.render(data);

                }
            });

        },
        done: function () {
            console.log('MineList Controller done');
            //bookCollection.fetch({ success: function () { bookView.render() } });
        },
        changeView: function (url) {

        }
    };
    //});

    return Controller;

});

