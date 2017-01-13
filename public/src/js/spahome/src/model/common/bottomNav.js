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
/*
    exports.Item = function () {

    };
*/
    var Item = Backbone.Model.extend({
        defaults: {
            'title': 'title',
            'url'  : 'url'
        }
    });

    return Item;

});
