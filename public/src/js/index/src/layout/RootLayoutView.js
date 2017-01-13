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

    // A LayoutView is a hybrid of an ItemView and a collection of Region objects.
    // They are ideal for rendering application layouts with multiple sub-regions managed by specified region managers.
    // var RootLayoutView = Marionette.LayoutView.extend({
    //     el: 'body'
    // });
    // console.log(RootLayoutView);
    // return RootLayoutView;

    return Marionette.LayoutView.extend({
        el: 'body',
        regions: {
            topNavRegion     : "#header",
            containerRegion  : "container",
            // controlNavRegion : "control",
            bottomNavRegion  : "#bottom"

            // //headerRegion   : "#global-header",
            // mainRegion     : "#container"
        }
    });

});
