/*
 * @author: Caesar
 * @module:
 *
 */

define([
    'libs',
    'text!../../template/common/nav.html'
    ], function (libs, template) {
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
            console.log('List nav view initialize');
        },
        render: function (options) {
            var _options = options;
            // console.log('mine list view render');
            var that      = this;
            var html      = this.template({
                type: _options.type,
                url: 'index',
                title: _options.title
            });
            var container = $('#list-detail');
            container.append(html);

        }

    });

});

