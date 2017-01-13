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

    var Controller = require('phooer/src/controller/Controller');

   return Marionette.AppRouter.extend({
       //"index" must be a method in AppRouter's controller
       appRoutes: {
            // main
            ''                      : 'index',
            'index'                 : 'index',
            'index/:platform'       : 'index',
            'index/:platform/:type' : 'index',

            'list/:type'           : 'list',
            'list/:type/:platform' : 'list',

            'channel'                 : 'channel',
            'channel/:platform'       : 'channel',
            'channel/:platform/:type' : 'channel',

            'search'                 : 'search',
            'search/:platform'       : 'search',
            'search/:platform/:type' : 'search'


            // 'detail/:platform/:back/:id' : 'detail',

            // 'mine'                     : 'mine',
            // 'mine/:platform'           : 'mine',
            // 'myBlog/:platform'         : 'myBlog',
            // 'myFavorite/:platform'     : 'myFavorite',
            // 'myInfo/:platform'         : 'myInfo',

            // 'about'                 : 'about',

            // 'write/:platform' : 'write',
            // 'create/:platform': 'create'



       }
   });

});
