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

    //var Item = require('index/src/model/album');

    var Collection = Backbone.Collection.extend({
        // model: Item,
        // url: '/api/v1/album/list',
        initialize: function(dialog) {
            var model;
            var url;
            switch (dialog) {
                case 'tips':
                    model = require('index/src/model/pics/tips');
                    url   = '/api/v1/' + dialog + '';
                    break;
                default:
                    break;
            }
            // switch () {

            // }
            //var model = 'index/src/model/' + dialog + 'Tip';
            //this.model = require(model);
            this.model = model;
            this.url   = url;
            console.log('Dialog Model initialize');
            console.log('model: ' + this.model + ', url: ' + this.url);
            //this.on("add", this.updateSet, this);
        },
        // Filter down the list of all todo items that are finished.
        done: function () {
            //console.log('TodoList: done');
            //console.log(this.localStorage);
            console.log('dialog collection done');
        },
        updateSet: function() {
            //items = this.models;
        }
    });

    return Collection;

});

