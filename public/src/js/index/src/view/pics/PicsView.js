/*
 * @author: Caesar
 * @module:
 *
 */

define([
    'libs',
    'index/src/tool/imgUpload',
    'index/src/collection/pics/PicsCollection',
    'text!../../template/pics/pics-list.html',
    'text!../../template/pics/pics-list-li.html',
    'text!../../template/pics/pics-list-bo.html'
    ], function (libs, imgUpload, Collection, template, tli, tbo) {
    //ItemView provides some default rendering logic

    var libs       = require('libs');
    var _          = libs.underscore;
    var $          = libs.jquery;
    var Backbone   = libs.Backbone;
    var Marionette = libs.Marionette;
    var Qinius     = libs.Qinius;

    var _img = imgUpload;

    //console.log('Qinius');
    //console.log(Qinius);

    return Marionette.ItemView.extend({
        template: _.template(template),
        tli: _.template(tli),
        collection: Collection,
        tagName: 'ul',
        render: function (response) {
            console.log('pics view render');
            var that      = this;
            var html      = this.template(response.data);
            var container = $('#container');
            //console.log(html);
            container.html(html);//.append(html);

            var width      = container.find('.table-view li').eq(1).width();
            var bottomList = container.find('.list-gallery');
            var size       = bottomList.find('.table-view-cell').size();

            container.find('.table-view li').height(width);
            //var bottomListW = bottomList.width();
            if ( size*120 > $(window).width() ) {
                bottomList.addClass('over');
                bottomList.width(size*110 + 10);
            }

            container
            .on('change', '#upload-img', function (e) {
                // 添加图片到预览框
                that.showImgReady(e);
            })
            .on('click', '#upload', function (e) {
                // 点击上传图片
                var me = $(e.target);
                if (me.hasClass('loading')) {
                    return;
                }
                else {
                    me.addClass('loading')
                    that.upload(e);
                }
            })
            .on('click', '#upload-img-btn', function () {
                container.find('.upload-board').hide();
                container.find('#upload-img').trigger('click');
            })
            .on('mouseenter', '#imghead', function (e) {
                var me = $(this);
                var board = container.find('.upload-board');
                var width = container.find('.table-view li').eq(1).width();
                var top;
                if (me.hasClass('top')) {
                    var a = 23 - me.css('margin-top').split('px')[0];
                    //console.log(a);
                    top   = -(width + a) + 'px';
                }
                else {
                    top   = -(width + 24) + 'px';
                }
                //var top   = -(width + 24) + 'px';
                board.css('top', top);
                board.show();
            })
            .on('mouseleave', '.upload-board', function () {
                container.find('.upload-board').hide();
            })
            .on('click', '#choose', function () {
                container.find('.upload-board').hide();
                container.find('#upload-img').trigger('click');
            })
            ;

            $(window).resize(function () {
                var width = container.find('.table-view li').eq(1).width();
                container.find('.table-view li').height(width);
            });

            var qnius = new Qinius({
                domain:      'http://geometry.leanapp.cn/',
                tokenUrl:    '/token/qiniu',
                fileInputId: 'upload-img',
                uploadId:    'upload',
                uploadSucc:  that.uploadSucc
            });

        },
        events: {
            'click li a': 'clickedButton',
            'click *': 'clickedButton',
            //'click #upload-img': 'upload',
            'change #upload-img': 'showImgReady',
            'click #upload': 'upload'
        },
        clickedButton: function (e) {
            var me = $(e.target);
            console.log('name: ' + me.name);
            console.log('I clicked the pics-view button!');
        },
        upload: function (e) {
            var me = $(e.target);
            console.log('upload');
        },
        uploadSucc: function (id, res) {
            console.log('uploadSucc');
            console.log(res);
            var that         = this;
            var con          = $('.pic-list');
            var container    = $('#container');
            var li           = con.find('.table-view-cell').eq(1);
            var height       = li.height();
            var data         = {};
            data.item        = {};
            data.item.id     = id;
            data.item.height = height;
            data.item.index  = parseInt(li.data('index')) + 1;
            data.item.href   = $('#imghead').attr('src');

            // 发送 记录数据
            var size = $('#upload-img')[0].files[0].size;
            size = Math.round(size/1024);

            // alert(size);
            // 增加到相册列表
            var tliHtml =  _.template(tli);
            tliHtml     = tliHtml(data);
            $('.upload-cell').after(tliHtml);

            // 重新计算 谁是每行最后一个图片，加last class
            var picsList = $('.pic-list');
            var li       = picsList.find('li');
            var l = picsList.find('li').size();
            for (var i = 0;i < l;i++) {
                var o = li.eq(i);
                if ( (i + 1)%5 == 0 ) {
                    if (!o.hasClass('last')) {
                        o.addClass('last');
                    }
                }
                else {
                    o.removeClass('last');
                }
            }

            // 增加到相册底部栏目
            var tboHtml =  _.template(tbo);
            tboHtml     = tboHtml(data);
            $('.list-gallery').prepend(tboHtml);
            // console.log('tboHtml: ' + tboHtml);
            // var width      = container.find('.table-view li').eq(1).width();
            var bottomList = container.find('.list-gallery');
            var size       = bottomList.find('.table-view-cell').size();
            // container.find('.table-view li').height(width);
            //var bottomListW = bottomList.width();
            if ( size*120 > $(window).width() ) {
                bottomList.addClass('over');
                bottomList.width(size*110 + 10);
            }
            else {
                bottomList.removeClass('over');
                bottomList.width($(window).width());
            }

            // 去除loading 状态
            container.find('#upload').removeClass('loading');
            $('#preview').html('');
            // that.resetImgPreview();

            //con.after(html);
            //$('.list-gallery').append(html);
            //window.location.reload();
        },
        showImgReady: function (e) {
            var width = $('#container').find('.table-view .table-view-cell .lpic').eq(0).width();
            _img.init({
                e: e.target,
                previewId: 'preview',
                width: width
            });
        },
        resetImgPreview: function () {
            console.log('resetImgPreview');
            $('#preview').html('');
        }

    });

});
