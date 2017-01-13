/*
 * @author: Caesar
 * @module:
 *
 */

define(function (require, exports) {
    var libs       = require('libs');
    var _          = libs.underscore;
    var $          = libs.jquery;
    var Backbone   = libs.Backbone;
    var Md5        = libs.Md5;
    // Creates a new Backbone Model class object
    var exports = {
        init: function (options) {
            this.options = options || {};
            this.el      = $(options.e)[0];
            this.$el     = $(options.e);
            this.MAXWIDTH  = options.MAXWIDTH || 260;
            this.MAXHEIGHT = options.MAXHEIGHT || 260;
            this.owidth    = options.width || '100%';
            this.div = document.getElementById(options.previewId);
            this.render();
        },
        render: function () {
            var that = this;
            var me   = this.el;
            var div  = this.div;
            //console.log(me);

            if (me.files && me.files[0]) {
                div.innerHTML ='<img id=imghead>';
                var img = document.getElementById('imghead');
                img.onload = function(){
                    var rect = that.clacImgZoomParam(img.offsetWidth, img.offsetHeight, that.owidth);
                    img.width  =  rect.width;
                    img.height =  rect.height;
                    img.style.marginLeft = rect.left+'px';
                    img.style.marginTop = rect.top+'px';
                    img.className = rect.className;
                    var name = $('#upload-img');
                    //console.log(name);
                    name = name[0].files[0].name;
                    var size = name.split('.');
                    name = size[size.length - 1];
                    //console.log(name);
                    var key = Md5($(img).attr('src')) + '.' + name;
                    //console.log('key: ' + key);
                    img.setAttribute('data-key', key);
                    //$('#imghead').data('key', key);
                }
                var reader = new FileReader();
                reader.onload = function (evt) {img.src = evt.target.result;}
                reader.readAsDataURL(me.files[0]);
            }
            else {
                return;
                //兼容IE
                var sFilter = 'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
                me.select();
                var src = document.selection.createRange().text;
                div.innerHTML = '<img id=imghead>';
                var img = document.getElementById('imghead');
                img.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;
                var rect = that.clacImgZoomParam(img.offsetWidth, img.offsetHeight);
                status =('rect:'+rect.top+','+rect.left+','+rect.width+','+rect.height);
                div.innerHTML = '' +
                    "<div id=divhead style='width:" +
                    rect.width + "px;height:" + rect.height +
                    "px;margin-top:" + rect.top + "px;" + sFilter
                    + src + "\"'></div>";
            }
        },
        clacImgZoomParam: function (width, height, owidth) {
            var maxWidth  = this.MAXWIDTH;
            var maxHeight = this.MAXHEIGHT;
            var _owidth   = owidth;
            // var width = this.MAXWIDTH;
            // var height = this.MAXWIDTH;

            var param = {top:0, left:0, width:width, height:height};

/*
            if ( width > maxWidth || height > maxHeight ) {
                rateWidth  = width / maxWidth;
                rateHeight = height / maxHeight;
                if ( rateWidth > rateHeight ) {
                    param.width  = maxWidth;
                    param.height = Math.round(height / rateWidth);
                }
                else {
                    param.width  = Math.round(width / rateHeight);
                    param.height = maxHeight;
                }
            }
*/
            if ( width > height ) {
                param.width  = owidth;
                param.height = height / width * owidth;
                param.top    = parseInt( (owidth - param.height) / 2 );
                param.left   = 0;
                param.className = 'top';
            }
            else if ( height > width ) {
                param.width  = width / height * owidth;
                param.height = owidth;
                param.top    = 0;
                param.left   = parseInt( (owidth - param.width) / 2 );
            }
            else {
                param.width  = owidth;
                param.height = owidth;
            }

            // param.left = Math.round((maxWidth - param.width) / 2);
            // param.top  = Math.round((maxHeight - param.height) / 2);

            return param;
        }

    };

    return exports;

});

