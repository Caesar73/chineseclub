/*
 * @author: Caesar
 * @module:
 *
 */

define([
    'libs',
    'index/src/collection/dialog/DialogCollection',
    'text!../../template/album/album-list.html'
    ], function (libs, Collection, template) {
    //ItemView provides some default rendering logic

    var libs       = require('libs');
    var _          = libs.underscore;
    var $          = libs.jquery;
    var Backbone   = libs.Backbone;
    var Marionette = libs.Marionette;

    return Marionette.ItemView.extend({
        template  : _.template(template),
        collection: Collection,
        tagName   : 'ul',
        render    : function (response) {
            //console.log('album view render');
            var html = this.template(response.data);
            console.log('Dialog View');
            //$('#container').html(html);//.append(html);
        },
        events    : {
            'click li a': 'clickedButton'
        },
        clickedButton: function (e) {
            var me = $(e.target);
            console.log('name: ' + me.name);
            console.log('I clicked the album-view button!');
        }

    });

});
