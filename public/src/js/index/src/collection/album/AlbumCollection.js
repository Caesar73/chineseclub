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

    var Item = require('index/src/model/album/album');

    var Collection = Backbone.Collection.extend({
        model: Item,
        url: '/api/v1/album/list',
        initialize: function() {
            console.log('Album Model initialize');
            //this.on("add", this.updateSet, this);
        },
        // Filter down the list of all todo items that are finished.
        done: function () {
            //console.log('TodoList: done');
            //console.log(this.localStorage);
            console.log('album collection done');
        },
        updateSet: function() {
            //items = this.models;
        }
    });

    return Collection;

});
/*
var InfinityScroll = Backbone.View.extend({
  initialize: function () {
    this.collection.on('add', this.collection_addHandler, this);
    this.collection.on('sync', this.collection_syncHandler, this);
  },
  collection_addHandler: function (model) {
    var html = this.template(model.toJSON());
    this.fragment = this.fragment ? this.fragment.add(html) : $(html);
  },
  collection_syncHandler: function () {
    if (this.fragment) {
      this.$el.append(this.fragment);
      this.fragment = null;
    }
  }
});
 */