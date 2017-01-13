/*
 * @author: Caesar
 * @module:
 *
 */

define([
    'libs',
    'blog/src/view/common/CreateView',
    'blog/src/collection/common/CreateCollection'
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
            console.log('Create Controller initialize');
            var collection = new ListCollection;
            var view       = new ListView;
            collection.create({
                userid: '00001'
            },{
                success: function (model, response) {
                    console.log('Create Collection add success');
                    //console.log(response);
                    view.render(response);
                }
            });
        },
        done: function () {
            console.log('Create Controller done');
            //bookCollection.fetch({ success: function () { bookView.render() } });
        },
        changeView: function (url) {

        }
    };
    //});

    return Controller;

});

