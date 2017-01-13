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

    var Item = require('phooer/src/model/page/content');

    // var HeaderCollection = Backbone.Collection.extend({
    //     model: Item,
    //     initialize: function() {
    //         //this.on("add", this.updateSet, this);
    //     },
    //     updateSet: function() {
    //         //items = this.models;
    //     }
    // });

    // var Header = new HeaderCollection([
    //     new Item({ title: '首页', url: 'home' }),
    //     new Item({ title: '列表', url: 'list' }),
    //     new Item({ title: '我的', url: 'mine' })
    // ]);

    var Collection = Backbone.Collection.extend({
        model: Item,
        url: '/api/v1/phooer/common/header',
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