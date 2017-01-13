/*
 * @author: Caesar
 * @module:
 *
 */

define([
    'libs',
    'index/src/view/pics/PicsDialogView',
    'index/src/collection/pics/TipsCollection'
    ],
    function (
        libs,
        PicsDialogView,
        PicsDialogCollection
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
            var collection = new PicsDialogCollection;
            //collection.initialize(options);
            collection.fetch({
                success: function (model, response) {
                    console.log('Pics Dialog Controller fetch success');
                    // console.log(model);
                    // console.log(response);
                    // console.log(collection);
                    // collection.add(response.data.items[0]);
                    collection.set(response.data.items);
                    new PicsDialogView(collection);

                    // var view = new PicsDialogView(response);
                    // view.render(collection);
                }
            });
        },
        done: function () {
            // console.log('Pics Dialog Controller done');
            // bookCollection.fetch({ success: function () { bookView.render() } });
        },
        changeView: function (url) {

        }
    };
    //});

    return Controller;

});

