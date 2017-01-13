/*
 * @author: Caesar
 * @module:
 *
 */

define([
    'libs',
    'index/src/collection/list/ListCollection',
    'text!../../template/list/list-list.html',
    //'index/src/collection/pics/TipsCollection',
    'text!../../template/pics/tips.html'
    ], function (libs, Collection, template, tipsTpl) {
    //ItemView provides some default rendering logic

    var libs       = require('libs');
    var _          = libs.underscore;
    var $          = libs.jquery;
    var Backbone   = libs.Backbone;
    var Marionette = libs.Marionette;

    return Marionette.ItemView.extend({
        // Cache the template function for a single item.
        template  : _.template(template),
        //collection: Collection,
        // tagName:  "li",
        // tagClass: 'table-view-cell',
        events: {
            'click li a': 'clickedButton',
            'click button.add-tips': 'showAddTips',
            'click button.save-tips': 'saveTips',
            'click span.del': 'clear'
        },
        initialize: function () {
            this.listenTo(this.model, 'change',  this.render);
            this.listenTo(this.model, 'destroy', this.remove);
        },
        render: function (response) {
            // this.$el.html(this.template(this.model.toJSON()));
            // //this.$el.toggleClass('done', this.model.get('done'));
            // //this.input = this.$('.edit');
            // return this;
            console.log('list view render');
            var that      = this;
            var html      = this.template(response.data);
            var container = $('#container');
            //console.log(html);
            container.html('').html(html);
        },
        // Toggle the `"done"` state of the model.
        // toggleDone: function() {
        //     this.model.toggle();
        // },
        updateOnEnter: function(e) {
            if (e.keyCode == 13) this.close();
        },
        clickedButton: function (e) {
            var me = $(e.target);
            console.log('name: ' + me.name);
            console.log('I clicked the album-view button!');
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

/*

define([
    'libs',
    'index/src/collection/list/sListCollection',
    'text!../template/list/list-list.html'
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
        render: function (response) {
            console.log('list view render');
            var html = this.template(response.data);
            console.log(html);
            $('#container').html(html);//.append(html);
        },
        events    : {
            'click li a': 'clickedButton'
        },
        clickedButton: function (e) {
            var me = $(e.target);
            console.log('name: ' + me.name);
            console.log('I clicked the list-view button!');
        }

    });

});


 */