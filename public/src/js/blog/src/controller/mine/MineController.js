/*
 * @author: Caesar
 * @module:
 *
 */

define([
    'libs',
    'blog/src/view/mine/MineView',
    'blog/src/collection/mine/MineCollection'
    ],
    function (
        libs,
        ListView,
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
            console.log('Mine Controller initialize');
            var collection = new ListCollection;
            var view       = new ListView;
            collection.fetch({
                success: function (model, response) {
                    console.log('Mine Controller fetch success');
                    //console.log(response);
                    var data = response;

                    // var title = '我的';
                    // var options = {
                    //     title: title
                    // }
                    // data = $.extend(true, data, options);

                    view.render(data);
                }
            });
        },
        done: function () {
            console.log('Mine Controller done');
            //bookCollection.fetch({ success: function () { bookView.render() } });
        },
        changeView: function (url) {

        }
    };
    //});

    return Controller;

});

