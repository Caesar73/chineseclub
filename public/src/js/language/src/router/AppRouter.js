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

    var Controller = require('language/src/controller/Controller');

   return Marionette.AppRouter.extend({
       //"index" must be a method in AppRouter's controller
       appRoutes: {
            // main
            ''                      : 'index',
            'index'                 : 'index',
            'index/:platform'       : 'index',
            'index/:platform/:type' : 'index',
            // 'index/:platform/free'        : 'free',

            'lesson/:platform/:back/:id' : 'lesson',

            'free/:platform'       : 'free',

            'mine/:platform'        : 'mine',
            'myHomemwork/:platform' : 'myHomework',
            'myNote/:platform'      : 'myNotebook',
            'myInfo/:platform'      : 'myInfo',
            'about'                 : 'about'

       }
   });

});
