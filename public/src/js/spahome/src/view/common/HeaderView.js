/*
 * @author: Caesar
 * @module:
 *
 */

define([
    'marionette',
    'text!../../template/common/header.html'
    ], function (Marionette, template) {
    //ItemView provides some default rendering logic

    return Marionette.ItemView.extend({
        template: _.template(template),
        initialize: function () {
            // console.log('HEAD INIT!!!');
            var that = this;
            $('header')
            .on('click', '.model-control a', function (e) {
                // console.log('.model-control li');
                that.changeActive(e);
            })
            ;
        },
        changeActive: function (e) {
            // console.log('changeActive');
            var me = $(e.target);
            $('header .model-control a').removeClass('active');
            me.addClass('active');
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

    var TopNavCollection = require('index/src/collection/topNav');

    var TopNavView = Backbone.View.extend({
        el: 'header',
        events: {
            "submit #add": "addItem",
            "submit #filter": "filterItems",
            "click #clear-filter": "clearFilter"
        },
        initialize: function(collection) {
            this.collection = TopNavCollection;
            this.render();
            //this.collection.on("reset", this.render, this);
        },
        render: function () {
            console.log('view header render');
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

    return TopNavView;

});
*/
