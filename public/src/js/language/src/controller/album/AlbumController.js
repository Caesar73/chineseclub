/*
 * @author: Caesar
 * @module:
 *
 */

define([
    'libs',
    'index/src/view/album/AlbumView',
    'index/src/collection/album/AlbumCollection'
    ],
    function (
        libs,
        AlbumView,
        AlbumCollection
        ) {
    var _            = libs.underscore;
    var $            = libs.jquery;
    var Backbone     = libs.Backbone;
    var Marionette   = libs.Marionette;
    var LocalStorage = libs.LocalStorage;

    //var Controller = Backbone.Marionette.Controller.extend({
    var Controller = {
        initialize: function (options) {
            console.log('Album Controller initialize');
            var collection = new AlbumCollection;
            var view       = new AlbumView;
            collection.fetch({
                success: function (model, response) {
                    console.log('Album Controller fetch success');
                    //console.log(response);
                    view.render(response);
                }
            });
        },
        done: function () {
            console.log('Album Controller done');
            //bookCollection.fetch({ success: function () { bookView.render() } });
        },
        changeView: function (url) {

        }
    };
    //});

    return Controller;

});

