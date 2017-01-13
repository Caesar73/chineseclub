/*
 * @author: Caesar
 * @module:
 *
 */

define([
    'libs',
    'index/src/view/pics/PicsView',
    'index/src/collection/pics/PicsCollection'
    ],
    function (
        libs,
        PicsView,
        PicsCollection
        ) {
    var _            = libs.underscore;
    var $            = libs.jquery;
    var Backbone     = libs.Backbone;
    var Marionette   = libs.Marionette;
    var LocalStorage = libs.LocalStorage;

    //var Controller = Backbone.Marionette.Controller.extend({
    var Controller = {
        initialize: function (options) {
            console.log('Pics Controller initialize');
            var collection = new PicsCollection;
            var view       = new PicsView;
            collection.fetch({
                success: function (model, response) {
                    console.log('Pics Controller fetch success');
                    //console.log(response);
                    view.render(response);
                }
            });
        },
        done: function () {
            console.log('Pics Controller done');
            //bookCollection.fetch({ success: function () { bookView.render() } });
        },
        changeView: function (url) {

        }
    };
    //});

    return Controller;

});

