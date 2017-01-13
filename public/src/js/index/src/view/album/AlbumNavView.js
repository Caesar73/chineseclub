/*
 * @author: Caesar
 * @module:
 *
 */

define([
    'libs',
    'text!../../template/album/album-nav.html'
    ], function (libs, template) {

    var libs       = require('libs');
    var _          = libs.underscore;
    var $          = libs.jquery;
    var Backbone   = libs.Backbone;
    var Marionette = libs.Marionette;

    //return Marionette.ItemView.extend({
    return Backbone.View.extend({
        template  : _.template(template),
        //collection: Collection,
        //tagName   : 'ul',
        el: '#control',
        initialize: function (options) {
            this.render({});
        },
        render : function (data) {
            var html = this.template({});
            this.$el.html(html);
        },
        events    : {
            'click .close'   : 'close',
            'click span.del' : 'clear'
        },
        close: function () {
            var value = this.input.val();
            if (!value) {
                this.clear();
            }
            else {
                this.model.save({title: value});
                this.$el.removeClass("editing");
            }
        },
        clear: function () {
            this.model.destroy();
        }

    });

});
