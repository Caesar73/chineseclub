/*
 * @author: Caesar
 * @module:
 *
 */

define([
    'marionette',
    'text!../../template/common/header.html'
    ], function (Marionette, template) {
    //ItemView provides some default rendering logic

    return Marionette.ItemView.extend({
        el: '#header',
        template: _.template(template),
        initialize: function () {
            // console.log('HEAD INIT!!!');
            var that = this;
            $('header')
            .on('click', 'a', function (e) {
                // console.log('.model-control li');
                that.changeActive(e);
            })
            ;
        },
        changeActive: function (e) {
            // console.log('changeActive');
            var me = $(e.target);
            $('header a').removeClass('active');
            me.addClass('active');
        },
        render: function (type) {
            console.log('header view render');
            var _type = type || '';
            var data  = {};
            data._type = _type;
            var html  = this.template(data);
            console.log('header html: ' + html);
            $(this.el).html('').html(html);
        }

    });

});
