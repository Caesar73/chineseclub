/*
 * @author: Caesar
 * @module:
 *
 */

define([
    'marionette',
    //'index/src/collection/bottomNav',
    'text!../../template/pics/gallery.html'
    ], function (Marionette, template) {
    //ItemView provides some default rendering logic

    return Marionette.ItemView.extend({
        template  : _.template(template),
        //collection: Collection,
        tagName   : 'div',
        render    : function (data) {
            var that = this;
            //console.log(data);
            var html = that.template(data);
            //console.log(html);
            var showdow = $('#showdow');
            showdow.html(html);
            showdow.show();
            var wH = $(window).height();
            showdow.find('.main-pic').height(wH - 120);
            showdow.height(wH - 120);

            if (showdow.hasClass('gallery')) {
                that.fixImgMargin();
                return;
            }
            else {
                that.init(that);
            }

        },
        events    : {
            'click .fullscreen': 'fullscreen',
            'click .close'     : 'close',
            'click .prepage'   : 'prepage',
            'click .nextpage'  : 'nextpage',
            'click li a'       : 'clickedButton'
        },
        init: function (that) {
            var _that   = that;
            var showdow = $('#showdow');
            var wH      = $(window).height();

            showdow.addClass('gallery');
            $('body').addClass('ohidden');
            showdow.find('.main-pic').height(wH - 120);
            showdow.height(wH - 120);
            _that.fixImgMargin();

            showdow
            .on('click', '.fullscreen', function (e) {
                //var me = $(e.target);
                _that.fullscreen(e);
                _that.fixImgMargin();
            })
            .on('click', '.select', function (e) {
                //var me = $(e.target);
                _that.select(e);
                _that.fixImgMargin();
            })
            .on('click', '.download', function (e) {
                //var me = $(e.target);
                _that.download(e);
            })
            .on('click', '.delete', function (e) {
                //var me = $(e.target);
                _that.del(e);
            })
            .on('click', '.close', function (e) {
                var me = $(e.target);
                _that.close(e);
            })
            .on('click', '.prepage', function (e) {
                var me = $(e.target);
                _that.prepage(e);
                _that.fixImgMargin();
            })
            .on('click', '.nextpage', function (e) {
                var me = $(e.target);
                _that.nextpage(e);
                _that.fixImgMargin();
            })
            ;
        },
        fixImgMargin: function () {
            var container  = $('#container');
            var showdow    = $('#showdow');
            var wrapper    = showdow.find('.main-pic .pic-wrapper');
            var wrapperW   = wrapper.width();
            var wrapperH   = wrapper.height();
            var img        = showdow.find('.main-pic #main-img');
            var imgW       = img.width();
            var imgH       = img.height();

            var image = new Image();
            image.src = img[0].src;
            var naturalW = image.width;
            var naturalH = image.height;

            if ( (wrapperW/wrapperH) >= 1 ) {
                var w = wrapperH/naturalH*naturalW;
                img.css('height', '100%');
                img.css('width',  w);
                img.css('margin-top', -(wrapperH/2));
                img.css('margin-left', (wrapperW - w)/2);
            }
            else {
                var h = wrapperW/naturalW*naturalH;
                img.css('width', '100%');
                img.css('height', h);
                img.css('margin-top', -(h/2));
            }

        },
        fullscreen: function (e) {
            console.log('fullscreen');
            var me         = $(e.target);
            var container  = $('#container');
            var showdow    = $('#showdow');
            var bottomList = container.find('.list-gallery');
            var wH         = $(window).height();

            if (me.hasClass('show')) {
                window.showH = showdow.find('.main-pic').height();
                me.removeClass('show');
                var img  = bottomList.find('li.active img');
                var src  = img.attr('src');
                var bod  = showdow.find('.fullscreen-board');
                var fimg = bod.find('img');
                fimg.attr('src', src);
                $('body').removeClass('ohidden');
                bod.show();
                var fimgH = fimg.height();
                showdow.css('height', fimgH);
                showdow.addClass('full');
            }
            else {
                me.addClass('show');
                var bod  = showdow.find('.fullscreen-board');
                $('body').addClass('ohidden');
                bod.hide();
                showdow.height(window.showH);
                showdow.removeClass('full');
            }
            // if (bottomList.hasClass('hide')) {
            //     bottomList.removeClass('hide');
            //     me.addClass('show');
            //     bottomList.show();
            //     showdow.find('.main-pic').height(wH - 120);
            //     showdow.height(wH - 120);
            // }
            // else {
            //     bottomList.addClass('hide');
            //     me.removeClass('show');
            //     bottomList.hide();
            //     showdow.find('.main-pic').height(wH);
            //     showdow.height(wH);
            // }

        },
        select: function (e) {
            console.log('select');
            var me         = $(e.target);
            var container  = $('#container');
            var showdow    = $('#showdow');
            var bottomList = container.find('.list-gallery');
            var wH         = $(window).height();

            if (bottomList.hasClass('hide')) {
                bottomList.removeClass('hide');
                me.addClass('show');
                bottomList.show();
                showdow.find('.main-pic').height(wH - 120);
                showdow.height(wH - 120);
                window.showH = wH - 120;
            }
            else {
                bottomList.addClass('hide');
                me.removeClass('show');
                bottomList.hide();
                showdow.find('.main-pic').height(wH);
                showdow.height(wH);
                window.showH = wH;
            }
        },
        download: function (e) {
            console.log('download');
            var picUrl = $('#main-img').attr('src');

            function doSaveAsIMG(e) {
                var me = $(e.target);
                console.log(me);
                if (document.all.IframeReportImg.src != "about:blank") {
                    // document.getElementsByName('IframeReportImg')[0].document.execCommand("SaveAs");
                    // $('#IframeReportImg')[0].document.execCommand('SaveAs');
                    // me[0].document.execCommand('SaveAs');
                }
            }

            function downLoadReportIMG (picUrl) {
                //如果隐藏IFRAME不存在，则添加
                if (!document.getElementById("IframeReportImg")) {
                    // onload="doSaveAsIMG();"
                    var iframeHtml = '' +
                    '<iframe style="display:block;" id="IframeReportImg" name="IframeReportImg" width="100px" height="100px" src="about:blank">' +
                    '</iframe>';
                    $(iframeHtml)
                    .appendTo('body')
                    .on('load', function (e) {
                        doSaveAsIMG(e);
                    })
                    ;
                }
                if (document.all.IframeReportImg.src != picUrl) {
                    //加载图片
                    document.all.IframeReportImg.src = picUrl;
                }
                else {
                    //图片直接另存为
                    doSaveAsIMG();
                }
            }

            downLoadReportIMG(picUrl);

        },
        del: function (e) {
            console.log('del');
        },
        close: function (e) {
            console.log('close');
            var showdow    = $('#showdow');
            var container  = $('#container');
            var fullscreen = showdow.find('.fullscreen');
            var bottomList = container.find('.list-gallery');
            var wH         = $(window).height();
            $('body').removeClass('ohidden');

            if (!fullscreen.hasClass('show')) {
                fullscreen.addClass('show');
            }

            if (bottomList.hasClass('hide')) {
                bottomList.removeClass('hide');
                showdow.find('.main-pic').height(wH - 120);
                showdow.height(wH - 120);
            }

            bottomList.hide();
            showdow.hide();
            showdow.html('');
            showdow.removeClass('gallery');
            showdow.off();
        },
        prepage: function (e) {
            console.log('prepage');
        },
        nextpage: function (e) {
            console.log('nextpage');
        },
        clickedButton: function (e) {
            var me = $(e.target);
            console.log('I clicked the button!');
            if (me.hasClass('active')) {
                console.log('scrollTop');
                $('body').scrollTop(0);
            }
            else {
                me.siblings('.active').removeClass('active');
                me.addClass('active');
            }
            //e.preventDefault();
        }

    });

});
