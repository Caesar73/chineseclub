/*
 * @author: Caesar
 * @module:
 *
 */

define([
    'libs',
    'language/src/view/course/ListView',
    'language/src/collection/course/ListCollection'
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
            console.log('course Controller initialize');
            var type = options.type;
            var collection = new ListCollection({
                type: type
            });
            var view       = new ListView;

            collection.fetch({
                data: {
                    type: type
                },
                success: function (model, response) {
                    console.log('course Controller fetch success');
                    // alert('type: ' + type);
                    view.render(response, type);
                }
            });

        },
        done: function () {
            console.log('course Controller done');
            //bookCollection.fetch({ success: function () { bookView.render() } });
        },
        changeView: function (url) {

        }
    };
    //});

    return Controller;

});

