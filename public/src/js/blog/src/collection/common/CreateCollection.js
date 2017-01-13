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

    var Item = require('blog/src/model/common/create');

    var Collection = Backbone.Collection.extend({
        model: Item,
        url: '/api/v1/blog/common/create',
        initialize: function() {
            console.log('List Model initialize');
            //this.on("add", this.updateSet, this);
        },
        // Filter down the list of all todo items that are finished.
        done: function () {
            //console.log('TodoList: done');
            //console.log(this.localStorage);
            console.log('create collection done');
        },
        updateSet: function() {
            //items = this.models;
        }
    });

    return Collection;

});
