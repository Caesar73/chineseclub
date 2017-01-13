/*
 * @author: Caesar
 * @module:
 *
 */

define([
    'libs',
    'blog/src/collection/list/ListDetailCollection',
    'text!../../template/list/list-detail.html'
    //'index/src/collection/pics/TipsCollection',
    // 'text!../../template/pics/tips.html'
    ], function (libs, Collection, template) {
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
            console.log('ListDetailview initialize');
            // this.listenTo(this.model, 'change',  this.render);
            // this.listenTo(this.model, 'destroy', this.remove);
        },
        render: function (response) {
            // this.$el.html(this.template(this.model.toJSON()));
            // this.$el.toggleClass('done', this.model.get('done'));
            // this.input = this.$('.edit');
            // return this;
            console.log('list detail view render');
            var that      = this;
            var html      = this.template(response.data);
            var container = $('#list-detail');
            //console.log(html);
            container.append(html);
            $('#mask').hide();

            var touchSlide = TouchSlide;
            // console.log(touchSlide);
            touchSlide.init({
                slideCell:"#picScroll",
                isTravelNotes: 'true',
                titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
                titType: 'present',
                autoPage: true, //自动分页
                pnLoop:"false", // 前后按钮不循环
                switchLoad:"_src" //切换加载，真实图片路径为"_src"
            });

            // $(window).off('scroll');

        }

    });

});

