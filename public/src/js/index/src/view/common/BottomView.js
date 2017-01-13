/*
 * @author: Caesar
 * @module:
 *
 */

define([
    'marionette',
    'text!../../template/common/bottom.html'
    ], function (Marionette, template) {
    //ItemView provides some default rendering logic

    return Marionette.ItemView.extend({
        template  : _.template(template),
        // collection: Collection,
        tagName   : 'ul',
        events    : {
            'click li a': 'clickedButton'
        },
        clickedButton: function (e) {
            var me = $(e.target);
            // console.log('I clicked the button!');
            // if (me.hasClass('active')) {
            //     console.log('scrollTop');
            //     $('body').scrollTop(0);
            // }
            // else {
            //     me.siblings('.active').removeClass('active');
            //     me.addClass('active');
            // }
            //e.preventDefault();
        }

    });

});


/*

define(function (require, exports) {
    var libs       = require('libs');
    var _          = libs.underscore;
    var $          = libs.jquery;
    var Backbone   = libs.Backbone;
    var Marionette = libs.Marionette;

    var BottomNavCollection = require('index/src/collection/bottomNav');

    var BottomNavView = Backbone.View.extend({
        el: 'bottom-nav',
        events: {
            "submit #add": "addItem",
            "submit #filter": "filterItems",
            "click #clear-filter": "clearFilter"
        },
        initialize: function(collection) {
            this.collection = BottomNavCollection;
            this.render();
            //this.collection.on("reset", this.render, this);
        },
        render: function () {
            console.log('view nav render');
            var html = '';
            //console.log(this.navCollection);
            _.each(this.collection.models, function (item) {
                //console.log(item);
                html = html + '<div><a href="#' + item.attributes.url + '">' + item.attributes.title + '<\/a><\/div>';
            });
            console.log('html: ' + html);
            $(this.el).html('').html(html);
        }
    });

    return BottomNavView;

});


define(
  ["lib/backbone",
    "views/itemcollectionview",
    "collections/cart"
  ], function(Backbone, ItemCollectionView, Cart) {
  var CartCollectionView = Backbone.View.extend({
    el: "body",
    events: {
      "submit #add": "addItem",
      "submit #filter": "filterItems",
      "click #clear-filter": "clearFilter"
    },
    initialize: function(items) {
      cartCollection = new Cart(items);
      this.itemView = new ItemCollectionView(cartCollection);
    },
    addItem: function(e) {
      e.preventDefault();
      this.itemView.addItem();
    },
    filterItems: function(e) {
      e.preventDefault();
      this.itemView.filterByPrice();
    },
    clearFilter: function(e) {
      e.preventDefault();
      this.itemView.clearFilter();
    }
  });
  return CartCollectionView;
});

*/
