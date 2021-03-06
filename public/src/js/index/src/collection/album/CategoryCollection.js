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

    var Item = require('index/src/model/album/category');

    var Collection = Backbone.Collection.extend({
        model: Item,
        url: '/api/v1/category/list',
        initialize: function() {
            console.log('Album Model initialize');
            //this.on("add", this.updateSet, this);
        },
        // Filter down the list of all todo items that are finished.
        done: function () {
            //console.log('TodoList: done');
            //console.log(this.localStorage);
            console.log('category collection done');
        },
        updateSet: function() {
            //items = this.models;
        }
    });

    return Collection;

});
