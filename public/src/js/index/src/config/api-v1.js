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

    // URI 为  api.geehee.cn/1_1/
    exports.uri = {
        version: '/api/v1'
    }

    exports.url = {
        pics: {
            c: '/pics',
            u: '',
            r: '',
            d: ''
        },
        list: {
            c: '',
            u: '',
            r: '',
            d: ''
        },
        album: {
            c: '',
            u: '',
            r: '',
            d: ''
        }

    };


    return exports;

});
