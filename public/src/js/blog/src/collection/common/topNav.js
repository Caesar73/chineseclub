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

    var Item = require('blog/src/model/common/topNav');

    var Collection = Backbone.Collection.extend({
        model: Item,
        initialize: function() {
            //this.on("add", this.updateSet, this);
        },
        updateSet: function() {
            //items = this.models;
        }
    });

    var TopNav = new Collection([
        new Item({ title: '首页', url: 'home' }),
        new Item({ title: '列表', url: 'list' }),
        new Item({ title: '我的', url: 'mine' })
    ]);

    return TopNav;

});