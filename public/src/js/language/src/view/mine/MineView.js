/*
 * @author: Caesar
 * @module:
 *
 */

define([
    'libs',
    'language/src/collection/mine/MineCollection',
    'text!../../template/mine/mine-index.html'
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
            console.log('Listview initialize');
            // this.listenTo(this.model, 'change',  this.render);
            // this.listenTo(this.model, 'destroy', this.remove);
        },
        render: function (response) {
            // this.$el.html(this.template(this.model.toJSON()));
            // this.$el.toggleClass('done', this.model.get('done'));
            // this.input = this.$('.edit');
            // return this;
            console.log('mine view render');
            var that      = this;
            var html      = this.template(response.data);
            var container = $('#mine');

            container.html('').html(html);

            function callback (opts) {
                var _opts = opts;
                console.log(opts);

            }

        }

    });

});

