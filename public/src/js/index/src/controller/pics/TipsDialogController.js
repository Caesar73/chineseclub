/*
 * @author: Caesar
 * @module:
 *
 */

define([
    'libs',
    'index/src/view/pics/TipsDialogView',
    'index/src/collection/pics/TipsCollection'
    ],
    function (
        libs,
        TipsDialogView,
        TipsDialogCollection
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
            var collection = new TipsDialogCollection;
            //collection.initialize(options);
            collection.fetch({
                success: function (model, response) {
                    console.log('Tips Dialog Controller fetch success');
                    // console.log(model);
                    // console.log(response);
                    // console.log(collection);
                    // collection.add(response.data.items[0]);
                    collection.set(response.data.items);
                    new TipsDialogView(collection);

                    // var view = new TipsDialogView(response);
                    // view.render(collection);
                }
            });
        },
        done: function () {
            // console.log('Tips Dialog Controller done');
            // bookCollection.fetch({ success: function () { bookView.render() } });
        },
        changeView: function (url) {

        }
    };
    //});

    return Controller;

});

