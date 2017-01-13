/*
 * @author: Caesar
 * @module:
 *
 */

define([
    "libs",
    // 'index/src/router/AppRouter',
    // 'index/src/controller/Controller',

    // "index/src/page1/page1",
    // "index/src/page2/page2",
    "index/src/view/common/home",
    "index/src/view/common/HeaderView",
    "index/src/layout/RootLayoutView"

], function (
    libs,
    // AppRouter,
    // Controller,
    // page1,
    // page2,
    HomeView,
    HeaderView,
    RootLayoutView
    ) {
    //alert('index/main');
    var libs       = require('libs');
    var _          = libs.underscore;
    var $          = libs.jquery;
    var Backbone   = libs.Backbone;
    var Marionette = libs.Marionette;
    //var App        = this;
    var App        = new Backbone.Marionette.Application();

    // App.rootLayout = new RootLayoutView({
    //     regions: {
    //         bottomNavRegion: "bottom-nav",
    //         topNavRegion   : "top-nav",
    //         //headerRegion   : "#global",
    //         mainRegion     : "#container"
    //     }
    // });
    App.rootLayout = new RootLayoutView();

    App.static = {};
    App.static.mobile = isMobile();

    App.rootLayout = new RootLayoutView();

    App.on('start', function (options) {
        App.static.init();
    });

    function isMobile () {
        var ua = (navigator.userAgent || navigator.vendor || window.opera, window, window.document);
        return (/iPhone|iPod|iPad|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
    }

    App.static = {
        init: function () {
            if (Backbone.history) Backbone.history.start();
            //console.log('main init');
            // var router = new this.Controller.Route();
            // console.log(router);
            // this.initView();
            // this.initEvents();
        },
        initView: function () {
            new HomeView();
        },
        initEvents: function () {

        },
        Model: {},
        Views: {},
        Controller: {},
        Collection: {}
    };

    App.static.Controller.Route = Backbone.Router.extend({
        routes: {
            ''        : 'index',
            '!/hello' : 'hello',//使用#!/hello驱动路由
            'aaa'     : 'aaa',
            'home': 'home',
            'list': 'list',
            'mine': 'mine'
        }
    });

    return App;

});
