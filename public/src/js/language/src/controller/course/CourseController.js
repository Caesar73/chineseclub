/*
 * @author: Caesar
 * @module:
 *
 */

define([
    'libs',
    'language/src/view/course/CourseView',
    'language/src/collection/course/CourselCollection'
    ],
    function (
        libs,
        courseView,
        courselCollection
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
            console.log('course Detail Controller initialize');
            var collection = new courselCollection;
            var view       = new courseView;
            var opt        = options;
            collection.fetch({
                data: {
                    id: opt.id
                },
                success: function (model, response) {
                    console.log('course Detail Controller fetch success');
                    //console.log(response);
                    view.render(response);
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

