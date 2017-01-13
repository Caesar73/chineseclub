/*
 * @author: Caesar
 * @module:
 *
 */

define([
    'libs',
    'spahome/src/view/list/ListDetailView',
    'spahome/src/collection/list/ListDetailCollection'
    ],
    function (
        libs,
        ListDetailView,
        ListDetailCollection
        ) {
    var _            = libs.underscore;
    var $            = libs.jquery;
    var Backbone     = libs.Backbone;
    var Marionette   = libs.Marionette;
    var LocalStorage = libs.LocalStorage;

    var TouchSlide   = libs.TouchSlide;

    //var Controller = Backbone.Marionette.Controller.extend({
    var Controller = {
        initialize: function (options) {
            console.log('List Detail Controller initialize');
            var collection = new ListDetailCollection;
            var view       = new ListDetailView;
            collection.fetch({
                success: function (model, response) {
                    console.log('List Detail Controller fetch success');
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

