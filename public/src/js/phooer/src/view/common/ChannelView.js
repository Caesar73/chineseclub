/*
 * @author: Caesar
 * @module:
 *
 */

define([
    'libs',
    // 'phooer/src/collection/common/HeaderCollection',
    'text!../../template/common/channel.html'
    //'index/src/collection/pics/TipsCollection',
    // 'text!../../template/pics/tips.html'
    ], function (libs, template) {
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
        render: function (data) {
            // this.$el.html(this.template(this.model.toJSON()));
            // this.$el.toggleClass('done', this.model.get('done'));
            // this.input = this.$('.edit');
            // return this;
            console.log('Channel view render');
            var that      = this;
            var html      = this.template(data);
            var container = $('#channel-container');
            container.html('').html(html);
            var currentType = localStorage["chooseType"] || 'type_all';
            container.find('[data-category="' + currentType + '"]').addClass('fixed');

            container
            .on('click', '.list.choose-type li', function (e) {
                var me = $(this);
                var fa = container.find('.list.choose-type');
                fa.find('.fixed').removeClass('fixed');
                me.addClass('fixed');
                var s = me.data('category');
                localStorage["chooseType"] = s;
            })
            ;

            window.scrollTop = function(){
                window.scrollTo(0,0);
            };

            //工具
            function initScrollEvents () {
                var scrollEndTimer, offset = 100;
                function globalScroll(e){
                    var theDocumentHeight = document.height || document.body.scrollHeight;

                    if( scrollY >= theDocumentHeight - innerHeight - offset)  $(window).trigger("scrollBottom", e.type);
                    if( e.type == 'scroll'){
                        if(scrollEndTimer) clearTimeout(scrollEndTimer);
                        scrollEndTimer = setTimeout(function(){ $(window).trigger("scrollEnd") },300);
                    }
                };
                $(window).on("scroll load afterflow",globalScroll);
            };

            var animateScrollTo = function (option) {
                var top = 0;
                if(option){
                    if(option.offset)   top += option.offset;
                    if(option.obj)      top += option.obj.offset().top;
                };
                setTimeout(function(){
                    $("html, body").animate({ scrollTop: top }, 400);
                },0)
                return this;
            };

            function debug (s) {
                var $d = $("#debug");
                if(!$d.length){
                    $("<div id='debug'/>").appendTo("body");
                    $d = $("#debug");
                };
                $d.text(s);
            };

            function global_tip (str, delay) {
                delay = delay || 3000;
                var p = $("<div class='global_tip'/>").appendTo("body"),
                    h = $("header"),
                    tip_top = 0;
                if(h.length) tip_top = Math.max(0, h.height());
                p.show().text(str).css("top",tip_top);
                setTimeout(function(){
                    p.fadeOut(function(){
                        p.remove();
                    });
                },delay);
            };
/*

 */
            var SortMenu = {

                init : function (obj) {
                    this.category = obj.category;
                    this.categoryName = obj.categoryName;
                    this.$con = $(obj.container);
                    this.$selectedList = $(obj.selected);
                    this.$unSelectedList = $(obj.unselected);
                    this.$message = $(obj.message);
                    this.tmpl = obj.tmpl;
                    this.count = 0;

                    this.$message.text(this.$message.attr("origin-message"));

                    this.restoreOrder(obj);

                    this.addEvents(obj);
                },

                addEvents : function(obj) {
                    var _this = this, lock = false;

                    this.$selectedList.on("click",obj.itemSelector,function(){
                        if(lock) return;
                        lock = true;

                        var $this = $(this), that = this;
                        if($this.is(obj.itemExclude)) return false;
                        animateAdd(that,_this.$unSelectedList, function(){ animateRemove(that) });
                        var s = _this.$message.attr("origin-message");
                        _this.$message.text(s).removeClass("alert");
                        _this.count -= 1;
                        return false;
                    });

                    this.$unSelectedList.on("click",obj.itemSelector,function(){
                        if(lock) return;
                        lock = true;

                        var that = this;
                        if(_this.count == obj.maxCount){
                            var s = _this.$message.attr("disabled-message");
                            _this.$message.text(s.replace("#n#", obj.maxCount+1 )).addClass("alert");
                            return false;
                        };
                        animateAdd(that,_this.$selectedList, function(){ animateRemove(that) });
                        _this.count += 1;
                        return false;
                    });

                    function saveOrder(){
                        var s = [];
                        _this.$selectedList.find(obj.itemSelector).each(function(){
                            s.push($(this).attr("data-category"));
                        });
                        s = s.join(",");
                        localStorage["menuDefaults"] = s;
                        return s;
                    };

                    function animateAdd(obj,$dest,callback){
                        var $obj = $(obj);
                        $obj.appendTo($dest);
                        if(callback) callback();
                    };

                    function animateRemove(obj){
                        saveOrder();
                        lock = false;
                    }
                },

                restoreOrder : function(obj){
                    var storedMenu = localStorageEnabled ?localStorage["menuDefaults"]:"", defaults;
                    defaults = storedMenu ? storedMenu.split(",") : obj.category.slice(0,obj.defaultCount);

                    for(var i = 0; i<obj.category.length; i++) {
                        var t = obj.category[i];
                        if($.inArray(t,defaults) == -1){
                            var s = this.getItemString({ category : t, name : obj.categoryName[i] });
                            this.$unSelectedList.append(s)
                        }
                    };

                    for(var i = 0; i<defaults.length; i++) {
                        var t = defaults[i],
                            index = $.inArray(t,obj.category);

                        if(index > -1){
                            var s = this.getItemString({ category : t, name : obj.categoryName[index] });
                            this.$selectedList.append(s);
                            this.count += 1;
                        }
                    }
                },

                getItemString : function(obj){
                    var tmpl = this.tmpl;
                    for(k in obj) tmpl = tmpl.replace("#"+k+"#", obj[k]);
                    return tmpl;
                }
            };

            SortMenu.init({
                    category    : ['latvia', 'lithuania', 'estonia', 'belarus', 'ukraine'],
                    categoryName: ['拉脱维亚','立陶宛','爱沙尼亚', '白俄罗斯', '乌克兰'],
                    // tmpl        : "<li data-category='#category#'><a href='javascript:void(0);'>#name#</a></li>",
                    tmpl        : "<li data-category='#category#'><a>#name#</a></li>",
                    maxCount    : 5,
                    defaultCount: 3,
                    container   : ".con",
                    message     : ".tip",
                    selected    : "[data-toggle=menu-selected]",
                    unselected  : "[data-toggle=menu-unselected]",
                    itemSelector: "li",
                    itemExclude : ".fixed"
            });

        }

    });

});

