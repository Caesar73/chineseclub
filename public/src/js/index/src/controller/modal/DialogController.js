/*
 * @author: Caesar
 * @module:
 *
 */

define([
    'libs',
    'index/src/view/dialog/DialogView',
    'index/src/collection/dialog/DialogCollection'
    ],
    function (
        libs,
        DialogView,
        DialogCollection
        ) {
    var _            = libs.underscore;
    var $            = libs.jquery;
    var Backbone     = libs.Backbone;
    var Marionette   = libs.Marionette;
    var LocalStorage = libs.LocalStorage;

    //var Controller = Backbone.Marionette.Controller.extend({
    var Controller = {
        initialize: function (options) {
            console.log('Dialog Controller initialize');
            //var collection = new DialogCollection;
            var collection = new DialogCollection(options);
            //collection.initialize(options);
            var view       = new DialogView;
            collection.fetch({
                success: function (model, response) {
                    console.log('Dialog Controller fetch success');
                    //console.log(response);
                    view.render(response);
                }
            });
        },
        done: function () {
            console.log('Dialog Controller done');
            //bookCollection.fetch({ success: function () { bookView.render() } });
        },
        changeView: function (url) {

        }
    };
    //});

    return Controller;

});

