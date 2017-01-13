/*
 * @author: Caesar
 * @module:
 *
 */

define([
    'libs',
    'blog/src/collection/album/AlbumCollection',
    'text!../../template/common/header-control-bar.html',
    'blog/src/controller/DialogController',
    'blog/src/controller/pics/TipsDialogController'
    ], function (
        libs,
        Collection,
        template,
        DialogController,
        TipsDialogController
    ) {
    //ItemView provides some default rendering logic

    var libs       = require('libs');
    var _          = libs.underscore;
    var $          = libs.jquery;
    var Backbone   = libs.Backbone;
    var Marionette = libs.Marionette;

    return Marionette.ItemView.extend({
        template: _.template(template),
        events    : {
            //'click a'     : 'showDialog',
            //'click a.tips': 'showTipsDialog',
            'click .close': 'closeDialog'
        },
        showTipsDialog: function (e) {
            var me = $(e.target);
            $('body').removeClass().addClass('ohidden');
            $('#showdow').show();
        },
        showDialog: function (e) {
            var me = $(e.target);
            var dialog = me.data('target');
            //console.log('name: ' + me.name);
            console.log('target-dialog: ' + dialog);
            console.log('I clicked the album-view button!');
            $('body').removeClass().addClass('ohidden');
            $('#showdow').show();

            var dialogController = DialogController;
            dialogController.initialize(dialog);

        },
        closeDialog: function () {
            $('body').removeClass().addClass('oauto');
            $('#showdow').hide();
        }
    });

});

