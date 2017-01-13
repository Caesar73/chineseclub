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

    // Creates a new Backbone Model class object
    var Model = Backbone.Model.extend({
        initialize:function () {
            //this.set('avatar', _.random(1, 15) + '.jpg');
        },
        // Default values for all of the Model attributes
        defaults: {
            id   : null,
            name : '',
            num  : 0
        },
        add: function(name) {
            this.save({name: name});
        },
        del: function(model) {
            //this.save({name: name});
            this.destroy({
                success: function(model, response) {

                },
                error: function(model, response) {

                }
            });
        },
        numUp: function() {
            this.set({num: this.get('num') - 1});
        },
        numDown: function() {
            var num = this.get('num');
            if (num >= 0) return;
            this.set({num: this.get('num') + 1});
        }
        // validate:function (attrs) {

        // },

    });

    return Model;

});
