/*
 * @author: Caesar
 * @module:
 *
 */

define([
    'libs',
    'index/src/collection/pics/TipsCollection',
    'text!../../template/pics/tips-list.html'
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
            console.log('Tips Dialog View: ' + html);
            $('#dialog').html(html);//.append(html);
        },
        events    : {
            'click li a': 'clickedButton',
            'click button.add-tips': 'showAddTips',
            'click button.save-tips': 'saveTips',
            'click span.del': 'clear'
        },
        clickedButton: function (e) {
            var me = $(e.target);
            console.log('name: ' + me.name);
            console.log('I clicked the album-view button!');
        },
        addOne: function () {
            // var view = new TodoView({model: todo});
            // this.$("#todo-list").append(view.render().el);
        },
        addAll: function () {
            // Todos.each(this.addOne, this);
        },
        showAddTips: function () {
            this.$el.find('input.add-tips').show();
        },
        hideAddTips: function () {
            this.$el.find('input.add-tips').hide();
        },
        saveTips: function () {
            var name = this.$el.find('input.add-tips').val();
            if (!name) {
                this.clear();
            }
            else {
                this.model.save({name: name});
                this.hideAddTips();
            }
        },
        close: function () {
            var value = this.input.val();
            if (!value) {
                this.clear();
            }
            else {
                this.model.save({title: value});
                this.$el.removeClass("editing");
            }
        },
        clear: function () {
            this.model.destroy();
        }
    });

});
