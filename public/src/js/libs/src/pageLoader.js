/*
 * author: Caesar
 * module: pageLoader
 * depend: lazyload
 *
 */

;(function (root, factory) { "use strict";
    if (typeof module == "object" && typeof module.exports == "object") {
        module.exports = root.document ?
                factory(root, true) :
                function (w) {
                    if (!w.document) {
                        throw new Error("PageLoader requires a window with a document");
                    }
                    return factory(w);
                };
    } else {
        factory(root);
    }

})(typeof window !== "undefined"? window : this, function(window, noGlobal) {
    /**
     * AniJS is library for write declarative animations in your static html documents
     * @class AniJSit
     * @constructor initializer
     * @author @dariel_noel
     */
    var PageLoaderLib = function() {

        var instance = this;

        /**
         * Initializer Function
         * @method initializer
         * @return
         */
        instance._initializer = function() {

        };



        /**
         * Parse Declarations and setup Anim in a founded elements
         * @method run
         * @return
         */
        instance.init = function (pageSettings) {

            pageSettings = pageSettings || {};

            var opts = {
                url:         pageSettings.url || '/api/v1/url',
                block:       pageSettings.block || false, // 导航对象，当自动分页设为true时为“导航对象包裹层”
                page:        pageSettings.page || 1, // 切换对象包裹层
                current:     pageSettings.current || 0, // 效果，支持 left、leftLoop
                scrolldelay: pageSettings.scrolldelay || null, // 自动播放
                count:       pageSettings.count || 2
            }

            if (pageSettings.loaderSelector) {
                opts.$loader = $('' + pageSettings.loaderSelector);
            }
            else {
                opts.$loader = $('.loading-new');
            }

            if (pageSettings.callback) {
                opts.callback = pageSettings.callback;
            }
            else {

                opts.callback = function () {
                    // alert(page);
                    $.get(instance.opts.url, {page: instance.opts.page, type: 'continue'}, function (res) {
                        console.log('GET');
                        if (res.status == 'ok') {
                            var html = res.content;
                            // console.log(html);
                            instance.opts.block    = false;
                            instance.opts.current  += 1;
                            instance.session('page', instance.opts.page);
                            console.log('page: ' + instance.session('page'));
                            var oldHtml = instance.session('data');
                            oldHtml = oldHtml + html;
                            instance.session('data', oldHtml);
                            instance.opts.$loader.before(html);
                            // window.LazyLoad();
                            // var lazyload = TD.utils.lazyload();
                            // lazyload.addImages(document.querySelectorAll('img.coverImg'));
                        }

                    }, 'json');
                }

            }

            instance.opts = opts;
            opts.instance = instance;
            instance.run();

        };


        instance.session = function (name, value) {
            if (!window.sessionStorage) {
                return false;
            }

            var path = window.location.href;
            if (typeof value != 'undefined') {
                // 设置 Session
                window.sessionStorage.setItem(name +"_" + path, value);
            }
            else {
                // 返回 Session
                return window.sessionStorage.getItem(name + "_" + path) || "";
            }
        }


        //记录
        instance.remember = function () {
            try {
                if ( $('#container a').length <= window.name ) {
                    return false;
                }

                var fragment = [];
                $('#container a').each(function (i, e) {
                    if(i >= window.name) {
                        fragment.push("<a>"+e.innerHTML+"</a>");
                    }
                });

                // alert(session('top'));

                session('data', fragment.join(''));
                session('top', document.body.scrollTop);
                session('page', opts.current || 0);

            }
            catch (e) {
            }
        }


        //加载记录
        instance.loadRes = function () {
            try {
                var html = session('data');
                // alert(html);
                if (html) {
                    // $('.loading-new').before(html);
                    instance.opts.$loader.before(html);
                    window.LazyLoad();
                    // lazyload.addImages(document.querySelectorAll('#container img.cover[data-src]'));
                    document.body.scrollTop = session('top');
                    page = parseInt(session('page'));
                    // alert(page);
                    // pager.current = + session('page');
                    // //如果超过最大页数 隐藏获取更多
                    // if(pager.current >= pager.count ||page.current >= pager.limit){
                    //     // $("#morepage").hide();
                    // }
                    // window.sessionStorage.clear();
                }
            }
            catch (e) {
            }

        }


        instance.listenScroll = function () {

            window.addEventListener("scroll", function(){
                // instance.clearTimeout(instance.opts.scrolldelay);
                instance.session('top', document.body.scrollTop);
                // console.log('top: ' + instance.session('top'));
                // if(self.isPending || self.isLimit) return false;

                instance.opts.scrolldelay = setTimeout(function(){
                    if(document.body.scrollTop > (document.height||document.documentElement.offsetHeight) -window.innerHeight-10){
                        // self.btn.trigger('autoload');
                    }
                },100);

            });
        }


        instance.run = function () {
            instance.listenScroll();

            $(function () {
                var container = $('#container');
                window.name = container.find('a').length; //记住开始节点数
                instance.loadRes();
                // container
                // .bind('touchstart',function (e) {
                //     remember();
                // });
            });

            // $(window).scroll(function (e) {
            //     console.log('inner window scroll false');
            //     return false;
            // });
            // $(window).off('scroll');
            console.log('run window scroll');

// document.getElementById("myBtn").addEventListener("click", function(){
//     document.getElementById("demo").innerHTML = "Hello World";
// });

            window.onscroll = null;
            // $(window).scroll(function (e) {
            window.onscroll = function (e) {
                console.log('page loader scroll');
                var screenHeight = $(window).height();
                var loaderTop;
                if (instance.opts.$loader.offset()) {
                    loaderTop = instance.opts.$loader.offset().top - screenHeight;
                }
                else {
                    // return false;
                }

                var scrollTop    = window.scrollY;

                if (scrollTop >= loaderTop) {
                    if (instance.opts.block) { return false; }
                    instance.opts.block = true;
                    instance.opts.page = parseInt(instance.opts.page);
                    instance.opts.page  = instance.opts.page + 1;

                    console.log('page: ' + instance.opts.page + ', count: ' + instance.opts.count);
                    if (instance.opts.page > instance.opts.count) {
                        $('.loading-new').find('span').html('已显示全部数据');
                        return false;
                    }
                    else {

                        instance.opts.callback.call(this, instance.opts);

                    }


                }

            }

        };

        /**
         * Thanks a lot to underscore guys
         * @method isFunction
         * @param {} obj
         * @return UnaryExpression
         */
        instance._isFunction = function (obj) {
            return !!(obj && obj.constructor && obj.call && obj.apply);
        };


        // instance._initializer();


    };

    var PageLoader = new PageLoaderLib();
    // PageLoader.run();

    // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
    // AMD Support
    if ( typeof define === "function" && define.amd ) {
        define( "pageLoader", [], function() {
            return PageLoader;
        });
    }
    if (typeof noGlobal == typeof undefined) {
        window.PageLoader = PageLoader;
    }

    return PageLoader;
});



