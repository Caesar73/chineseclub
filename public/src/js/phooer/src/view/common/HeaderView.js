/*
 * @author: Caesar
 * @module:
 *
 */

define([
    'libs',
    'phooer/src/collection/common/HeaderCollection',
    'text!../../template/common/header.html'
    //'index/src/collection/pics/TipsCollection',
    // 'text!../../template/pics/tips.html'
    ], function (libs, Collection, template) {
    //ItemView provides some default rendering logic

    var libs       = require('libs');
    var _          = libs.underscore;
    var $          = libs.jquery;
    var Backbone   = libs.Backbone;
    var Marionette = libs.Marionette;

    var PageLoader = libs.PageLoader;

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
            console.log('Header initialize');
            // this.listenTo(this.model, 'change',  this.render);
            // this.listenTo(this.model, 'destroy', this.remove);
        },
        render: function (response) {
            // this.$el.html(this.template(this.model.toJSON()));
            // this.$el.toggleClass('done', this.model.get('done'));
            // this.input = this.$('.edit');
            // return this;
            console.log('Header view render');
            var that      = this;
            var html      = this.template(response.data);
            var container = $('#header');
            container.html('').html(html);

            var option = {
                    category    : ['latvia', 'lithuania', 'estonia', 'belarus', 'ukraine'],
                    categoryName: ['拉脱维亚','立陶宛','爱沙尼亚', '白俄罗斯', '乌克兰'],
                    scrollLeft  : [ 80, 70, 80, 80, 70],
                    // tmpl        : "<li data-category='#category#'><a href='javascript:void(0);'>#name#</a></li>",
                    // tmpl        : "<li data-category='#category#'><a>#name#</a></li>",
                    tmpl        : '<a href="#list/#category#" data-url="#category#" href="javascript:;" class="btn " scroll-left="#scrollLeft#">#name#</a>',
                    maxCount    : 5,
                    defaultCount: 3,
                    container   : ".con",
                    message     : ".tip",
                    selected    : "[data-toggle=menu-selected]",
                    unselected  : "[data-toggle=menu-unselected]",
                    itemSelector: "li",
                    itemExclude : ".fixed"
            };

            function getItemString (obj) {
                var tmpl = option.tmpl;
                for(k in obj) tmpl = tmpl.replace("#"+k+"#", obj[k]);
                return tmpl;
            }

            var storedMenu = localStorageEnabled ?localStorage["menuDefaults"]:"", defaults;
            defaults = storedMenu ? storedMenu.split(",") : option.category.slice(0,option.defaultCount);
            console.log(storedMenu);
            console.log(defaults);
            var scrollLeft = 60;

            for(var i = 0; i<defaults.length; i++) {
                var t     = defaults[i];
                var index = $.inArray(t,option.category);
                if (index > -1) {
                    if (i > 1) {
                        scrollLeft = scrollLeft + option.scrollLeft[index];
                    }

                    var s = getItemString({
                        category : t,
                        name : option.categoryName[index],
                        scrollLeft: scrollLeft
                    });
                    console.log(s);
                    container.find('.top_menu_list').append(s);
                    // this.$selectedList.append(s);

                    this.count += 1;
                }
            }

            container
            .on('click', '.top_menu_list a', function (e) {
                var me = $(this);
                var left = me.attr('scroll-left');
                var menu = container.find('#top_menu');
                // console.log('left: ' + left);
                menu.find('.cur').removeClass('cur');
                me.addClass('cur');
                // menu.scrollLeft(left);
                menu.animate({
                    'scrollLeft': left
                }, 200);
                var type = me.data('url');
                //

            })
            ;

            // var menu = container.find('#top_menu');
            // var aaaa = menu.find('a').eq(0);
            // console.log('aaaa: ');
            // console.log(aaaa);
            // aaaa.trigger('click');


        }

    });

});

