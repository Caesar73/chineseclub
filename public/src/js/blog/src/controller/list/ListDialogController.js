/*
 * @author: Caesar
 * @module:
 *
 */

define([
    'libs',
    'blog/src/view/list/ListDetailView',
    'blog/src/collection/list/ListDetailCellection'
    ],
    function (
        libs,
        ListDetailView,
        ListDetailCellection
        ) {
    var _            = libs.underscore;
    var $            = libs.jquery;
    var Backbone     = libs.Backbone;
    var Marionette   = libs.Marionette;
    var LocalStorage = libs.LocalStorage;

    //var Controller = Backbone.Marionette.Controller.extend({
    var Controller = {
        initialize: function (options) {
            console.log('ListDetailCellection Controller initialize');
            //var collection = new DialogCollection;
            var collection = new ListDetailCellection;
            //collection.initialize(options);
            collection.fetch({
                success: function (model, response) {
                    console.log('ListDetailCellection Controller fetch success');
                    // console.log(model);
                    // console.log(response);
                    // console.log(collection);
                    // collection.add(response.data.items[0]);
                    collection.set(response.data.items);
                    new ListDetailView(collection);

                    // var view = new ListDialogView(response);
                    // view.render(collection);
                }
            });
        },
        done: function () {
            // console.log('List Dialog Controller done');
            // bookCollection.fetch({ success: function () { bookView.render() } });
        },
        changeView: function (url) {

        }
    };
    //});

    return Controller;

});

