/*
 * @author: Caesar
 * @module:
 *
 */

define([
    'libs',
    'blog/src/view/common/WriteView',
    'blog/src/collection/common/WriteCollection'
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
            console.log('Write Controller initialize');
            var collection = new ListCollection;
            var view       = new ListView;
            collection.fetch({
                success: function (model, response) {
                    console.log('Write Controller fetch success');
                    //console.log(response);
                    view.render(response);
                }
            });
        },
        done: function () {
            console.log('Write Controller done');
            //bookCollection.fetch({ success: function () { bookView.render() } });
        },
        changeView: function (url) {

        }
    };
    //});

    return Controller;

});

