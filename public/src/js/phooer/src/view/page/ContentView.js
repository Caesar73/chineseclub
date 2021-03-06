/*
 * @author: Caesar
 * @module:
 *
 */

define([
    'libs',
    'phooer/src/collection/page/ContentCollection',
    'text!../../template/page/content.html'
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
            console.log('Header initialize');
            // this.listenTo(this.model, 'change',  this.render);
            // this.listenTo(this.model, 'destroy', this.remove);
        },
        render: function (response) {
            // this.$el.html(this.template(this.model.toJSON()));
            // this.$el.toggleClass('done', this.model.get('done'));
            // this.input = this.$('.edit');
            // return this;
            console.log('Header view render');
            var that      = this;
            var html      = this.template(response.data);
            var container = $('#pageletListContent');
            container.html('').html(html);

            // container
            // .on('click', '.top_menu_list a', function (e) {
            //     var me = $(this);
            //     var left = me.attr('scroll-left');
            //     // console.log('left: ' + left);
            //     var menu = container.find('#top_menu')
            //     menu.find('.cur').removeClass('cur');
            //     me.addClass('cur');
            //     menu.scrollLeft(left);

            //     var type = me.data('url');
            //     //

            // })
            // ;

        }

    });

});

