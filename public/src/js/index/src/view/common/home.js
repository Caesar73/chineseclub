/*
 * @author: Caesar
 * @module:
 *
 */

define(function (require, exports) {
    var libs       = require('libs');
    var _          = libs.underscore;
    var $          = libs.jquery;
    var Backbone   = libs.Backbone;
    var Marionette = libs.Marionette;

    // var TopNavView    = require('index/src/view/topNav');
    // var BottomNavView = require('index/src/view/bottomNav');

    var HomeView = Backbone.View.extend({
        el: 'home-page',
        events: {
            "submit #add": "addItem",
            "submit #filter": "filterItems",
            "click #clear-filter": "clearFilter"
        },
        initialize: function () {
            console.log('view home initialize');
            //new TopNavView();
            // new BottomNavView();

            //this.navCollection = Nav;
            //this.render();
            //this.collection.on("reset", this.render, this);
            //navCollection = new Nav(items);
            //this.itemView  = new ItemCollectionView(navCollection);
        },
        render: function () {
            console.log('view home render');
            //this.renderNav();
            // this.$el.html("");
            // this.navCollection.each(function (item) {
            //     this.renderNav(item);
            // }, this);
        },
        addItem: function (e) {
            e.preventDefault();
            //this.itemView.addItem();
        },
        filterItems: function (e) {
            e.preventDefault();
            //this.itemView.filterByPrice();
        },
        clearFilter: function (e) {
            e.preventDefault();
            //this.itemView.clearFilter();
        }
    });

    return HomeView;

});
