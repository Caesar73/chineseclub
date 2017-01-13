/*
 * @author: Caesar
 * @module:
 *
 */

define([
    "libs",
    "phooer/src/main/app",
    "phooer/src/router/AppRouter",
    "phooer/src/controller/Controller"
], function (libs, App, AppRouter, Controller) {
    //alert('phooer/main');
    var libs       = require('libs');
    var _          = libs.underscore;
    var $          = libs.jquery;
    var Backbone   = libs.Backbone;
    var Marionette = libs.Marionette;
    //var App        = this;

    var exports = {
        init: function () {
            App.appRouter = new AppRouter({
                controller: new Controller()
            });

            App.start();
            $('#mask').hide();
        }
    }

    return exports;
});
