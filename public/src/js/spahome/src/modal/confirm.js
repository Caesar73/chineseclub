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
    var exports = {
        initialize: function (options) {
            this.options = options;
        }
    };

    return exports;

});
