/*
 * @author: Caesar
 * @module:
 *
 */

define([
    'libs',
    'language/src/view/lesson/LessonView',
    'language/src/view/lesson/LessonNavView',
    'language/src/collection/lesson/LessonCollection'
    ],
    function (
        libs,
        LessonView,
        LessonNavView,
        LessonCollection
        ) {
    var _            = libs.underscore;
    var $            = libs.jquery;
    var Backbone     = libs.Backbone;
    var Marionette   = libs.Marionette;
    var LocalStorage = libs.LocalStorage;

    //var Controller = Backbone.Marionette.Controller.extend({
    var Controller = {
        initialize: function (options) {
            console.log('lesson Controller initialize');
            var _options  = options;
            var type      = options.type;
            var view      = new LessonView;
            var navView   = new LessonNavView;
            var container = $('#lesson');
            container.html('');

            var collection = new LessonCollection({
                type: type
            });

            console.log('back type : ' + _options.type);

            navView.render({
                type: _options.type,
                title: _options.title
            });

            collection.fetch({
                data: {
                    type: type
                },
                success: function (model, response) {
                    console.log('lesson Controller fetch success');
                    // console.log(response);
                    view.render(response, type);
                }
            });

        },
        done: function () {
            console.log('lesson Controller done');
            //bookCollection.fetch({ success: function () { bookView.render() } });
        },
        changeView: function (url) {

        }
    };
    //});

    return Controller;

});

