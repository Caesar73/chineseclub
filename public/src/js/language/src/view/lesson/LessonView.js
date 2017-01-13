/*
 * @author: Caesar
 * @module:
 *
 */

define([
    'libs',
    'language/src/collection/lesson/LessonCollection',
    'text!../../template/lesson/lesson-list.html'
    //'index/src/collection/pics/TipsCollection',
    // 'text!../../template/pics/tips.html'
    ], function (libs, Collection, template) {
    //ItemView provides some default rendering logic

    var libs       = require('libs');
    var _          = libs.underscore;
    var $          = libs.jquery;
    var Backbone   = libs.Backbone;
    var Marionette = libs.Marionette;

    var PageLoader = libs.PageLoader;

    return Marionette.ItemView.extend({
        // Cache the template function for a single item.
        template  : _.template(template),
        //collection: Collection,
        // tagName:  "li",
        // tagClass: 'table-view-cell',
        events: {
            'click li a': 'clickedButton',
            'click button.add-tips': 'showAddTips',
            'click button.save-tips': 'saveTips',
            'click span.del': 'clear'
        },
        initialize: function () {
            console.log('Lesson view initialize');
            // this.listenTo(this.model, 'change',  this.render);
            // this.listenTo(this.model, 'destroy', this.remove);
        },
        render: function (response, type) {
            // this.$el.html(this.template(this.model.toJSON()));
            // this.$el.toggleClass('done', this.model.get('done'));
            // this.input = this.$('.edit');
            // return this;
            console.log('lesson view render');
            var that      = this;
            var html      = this.template(response.data);
            var container = $('#lesson');

            //console.log(html);
            container.append(html);
            // container.append(loadingHtml);

            // PageLoader.init({
            //     url: '/api/v1/language/lesson',
            //     limit: 10,
            //     count: 2,
            //     current: 1,
            //     tplType: 'search',
            //     callback: callback
            // });

        }

    });

});

