/*
 * @author: Caesar
 * @module:
 *
 */

define([
    'libs',
    'blog/src/view/tips/TipsView',
    'text!../../template/pics/tips-dialog.html'
    ], function (libs, TipsView, template) {
    //ItemView provides some default rendering logic

    var libs       = require('libs');
    var _          = libs.underscore;
    var $          = libs.jquery;
    var Backbone   = libs.Backbone;
    var Marionette = libs.Marionette;

    //return Marionette.ItemView.extend({
    return Backbone.View.extend({
        template  : _.template(template),
        //collection: Collection,
        //tagName   : 'ul',
        el: '#dialog',
        initialize: function (collection) {
            this.collection = collection;
            //console.log(collection);
            //this.listenTo(this.collection, 'add',   this.addOne);
            this.listenTo(this.collection, 'reset', this.addAll);
            //this.listenTo(this.collection, 'all',   this.render);
            this.render();
            //var items = response.data.items;
            //this.collection.set(response.data.items);
            //console.log(this.collection);
            //this.collection.add(items[0]);
        },
        render : function () {
            // this.collection = collection;
            // this.listenTo(this.collection, 'add',   this.addOne);
            // this.listenTo(this.collection, 'reset', this.addAll);
            // this.listenTo(this.collection, 'all',   this.render);
            //console.log('album view render');
            var html = this.template({});
            //$('#dialog').html(html);
            this.$el.html(html);
            this.addAll();
        },
        events    : {
            'click li a'             : 'clickedButton',
            'click button.add-tips'  : 'showAddTips',
            'keypress input.add-tips': 'createOnEnter',
            'click button.save-tips' : 'saveTips',
            'click span.del'         : 'clear'
        },
        clickedButton: function (e) {
            var me = $(e.target);
            console.log('name: ' + me.name);
            console.log('I clicked the album-view button!');
        },
        addOne: function (model) {
            //alert(1);
            //console.log(model);
            var view = new TipsView({model: model});
            //console.log(view.render().el);
            //console.log(this.$el);
            //this.$el.find('.tips-list').append(view.render().el);
            this.$el.find('.tips-list').append(view.render().el);
        },
        addAll: function () {
            //_.each(this.collection.models, this.addOne, this);
            this.collection.each(this.addOne, this);
        },
        showAddTips: function () {
            var input = this.$el.find('input.add-tips');
            input.show();
            input.focus();
        },
        createOnEnter: function (e) {
            var me = $(e.target);
            if (e.keyCode != 13) return;
            if (!me.val()) return;
            var that = this;
            this.collection.create(
                {name: me.val()},
                {
                    success: function (model, response) {
                        //console.log('Tips Created Successful');
                        //console.log(response);
                        model.set('id', response.data.id);
                        that.addOne(model);
                    }
                }
            );
            me.val('');
            this.hideAddTips();
        },
        saveTips: function () {
            var input = this.$el.find('input.add-tips');
            if (!input.val()) {
                this.clear();
            }
            else {
                var that = this;
                this.collection.create(
                    {name: input.val()},
                    {
                        success: function (model, response) {
                            //console.log('Tips Created Successful');
                            //console.log(response);
                            model.set('id', response.data.id);
                            that.addOne(model);
                        }
                    }
                );
                input.val('');
                this.hideAddTips();
            }
        },
        editTips: function () {
            hideAddTips();
            this.$el.find('.tips-list').addClass('editing');
        },
        completeEditTips: function () {
            this.$el.find('.tips-list').removeClass('editing');
        },
        hideAddTips: function () {
            this.$el.find('input.add-tips').hide();
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
