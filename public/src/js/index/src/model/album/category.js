/*
 * @author: Caesar
 * @module: 作品集 分类
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
        defaults:{
            id   : null,
            name : null,
            count: 0     // 含有作品集的个数
        }
        // ,
        // // Get's called automatically by Backbone when the set and/or save methods are called (Add your own logic)
        // validate:function (attrs) {

        // },
        // addVote: function(){
        //     this.set('fans', this.get('fans') + 1);
        // },
        // rankUp: function() {
        //     this.set({rank: this.get('rank') - 1});
        // },
        // rankDown: function() {
        //     this.set({rank: this.get('rank') + 1});
        // }

    });

    return Model;

});
