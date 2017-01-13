/*
 * @author: Caesar
 * @module:
 *
 */

define([
    'libs',
    'phooer/src/view/page/ContentView',
    'phooer/src/collection/page/ContentCollection'
    ],
    function (
        libs,
        ContentView,
        ContentCollection
        ) {
    var _            = libs.underscore;
    var $            = libs.jquery;
    var Backbone     = libs.Backbone;
    var Marionette   = libs.Marionette;
    var LocalStorage = libs.LocalStorage;

    //var Controller = Backbone.Marionette.Controller.extend({
    var Controller = {
        initialize: function (options) {
            var opt = options;
            console.log('List Controller initialize');
            var collection = new ContentCollection;
            var view       = new ContentView;
            collection.fetch({
                success: function (model, response) {
                    console.log('List Controller fetch success');
                    //console.log(response);
                    view.render(response);
                }
            });

        },
        done: function () {
            console.log('List Controller done');
            //bookCollection.fetch({ success: function () { bookView.render() } });
        },
        changeView: function (url) {

        }
    };
    //});

    return Controller;

});

