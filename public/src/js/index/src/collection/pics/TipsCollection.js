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

    var Item = require('index/src/model/pics/tips');

    var Collection = Backbone.Collection.extend({
        model: Item,
        // url: '/api/v1/album/list',
        initialize: function () {
            //this.model = require('index/src/model/tips');;
            this.url   = '/api/v1/tips';
            //console.log('Tips Dialog Model initialize');
            //console.log('model: ' + this.model + ', url: ' + this.url);
            //this.on("add", this.updateSet, this);
        },
        done: function () {
            //console.log('TodoList: done');
            //console.log(this.localStorage);
            //console.log('Tips dialog collection done');
        },
        updateSet: function() {
            //items = this.models;
        }
    });

    return Collection;

});

