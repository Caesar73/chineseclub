/*
 * @author: Caesar
 * @module:
 *
 */

define([
    "libs",
    "spahome/src/main/app",
    "spahome/src/router/AppRouter",
    "spahome/src/controller/Controller"
], function (libs, App, AppRouter, Controller) {
    //alert('spahome/main');
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
            $('#bootstrap').hide();
        }
    }

    return exports;
});
