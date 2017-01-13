/*
 * @author: Caesar
 * @module: Qiniu Simple Upload
 *
 *
 *
 */

;(function () {

    /** Used to determine if values are of the language type `Object`. */
    var objectTypes = {
        'function': true,
        'object': true
    };

    /** Detect free variable `exports`. */
    var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;

    /** Detect free variable `module`. */
    var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;

    /** Detect free variable `global` from Node.js. */
    var freeGlobal = freeExports && freeModule && typeof global == 'object' && global && global.Object && global;

    /** Detect free variable `self`. */
    var freeSelf = objectTypes[typeof self] && self && self.Object && self;

    /** Detect free variable `window`. */
    var freeWindow = objectTypes[typeof window] && window && window.Object && window;

    /** Detect the popular CommonJS extension `module.exports`. */
    var moduleExports = freeModule && freeModule.exports === freeExports && freeExports;

    /**
    * Used as a reference to the global object.
    *
    * The `this` value is used if it's the global object to avoid Greasemonkey's
    * restricted `window` object, otherwise the `window` object is used.
    */
    var root = freeGlobal || ((freeWindow !== (this && this.window)) && freeWindow) || freeSelf || this;

    function QiniuUploader (options) {
        options = options || {};
        options = $.extend({}, QiniuUploader.defaults, options);
        // Validation
        if (!options.domain) throw new Error('Missing domain!');

        if (options.presetElem) {
            this.$fileInputElem = $('#' + options.fileInputId);
            this.$uploadElem    = $('#' + options.uploadId);
            if (this.$fileInputElem.length === 0) throw new Error('Invalid fileInputId!');
            if (this.$uploadElem.length === 0)    throw new Error('Invalid uploadId!');
            this.attachEvents();
        }

        this._options = options;
        this._handlers = {};

        this._init();
    }

    QiniuUploader.defaults = {
      tokenUrl: '/token/qiniu',
      uploadUrl: 'http://upload.qiniu.com/',
      presetElem: true
      // fileInputId
      // uploadId
      // domain
    };

    QiniuUploader.prototype._init = function () {
        console.log('Qiniu init !');
    };

    QiniuUploader.prototype.on = function (type, handler) {
      if (!this._handlers[type]) this._handlers[type] = [];
      this._handlers[type].push(handler);
    };

    QiniuUploader.prototype.emit = function (type) {
        if (!this._handlers[type]) return;
        var _this = this;
        var args  = Array.prototype.slice.call(arguments, 1);
        this._handlers[type].forEach(function (f) {
            f.apply(_this, args);
        });
    };

    QiniuUploader.prototype.attachEvents = function () {
        var _this = this;
        //console.log(_this);
        //alert(_this.defaults.tokenUrl);
        //var url = _this.defaults.tokenUrl;
        _this.$uploadElem.on('click', function () {
        //var o   = _this.$fileInputElem.val().lastIndexOf('\\');
        var key = $('#imghead').data('key');
        $.ajax({
          type: 'POST',
          url: _this._options.tokenUrl,
          contentType: 'json',
          data: {
            key: key
          },
          success: function (response) {
            console.log(response);
            var data = response.data;
            if (!data.token) {
              _this.emit('error', {
                data: data,
                msg: 'ERROR: cannot get token'
              });
              return;
            }
            // _this.emit('getToken', data.ak);
            // _this.upload(data.ak);
            _this.emit('getToken', data.token);
            _this.upload(data.token);
          }
        })
      });
    };

    QiniuUploader.prototype.upload = function (file, token) {
        var _this = this;
        var formData = new FormData();
        //console.log(file);
        if (token === undefined) {
            if (!this._options.presetElem) throw new Error("You are using non-preset mode. Missing token");
            token = file;
            file = this.$fileInputElem[0].files[0];
        }

        formData.append('token', token);
        formData.append('file', file);
        // TODO: customize the key?
        var key = $('#imghead').data('key');
        formData.append('key', key); // Default name
        this.emit('started');

        $.ajax({
            xhr: function () {
                var xhr = new window.XMLHttpRequest();
                xhr.upload.addEventListener('progress', function (e) {
                    if (e.lengthComputable) {
                        var percent = e.loaded / e.total;
                        percent = parseInt(percent * 100);
                        console.log('percent: ' + percent);
                        _this.emit('progress', percent);
                    }
                }, false);
                return xhr;
            },
            type: 'POST',
            url: this._options.uploadUrl,
            data: formData,
            processData: false,
            contentType: false,
            success: function (response) {
                // console.log(response);
                _this.emit('complete', _this._options.domain + response.key);
                _this._options.uploadSucc(response.key, response);
            },
            error: function () {
                alert(' 上传失败！');
            }
        });
    };

    // window.Qinius = QiniuUploader;
    // var Qinius = QiniuUploader;
    // return Qinius;

    var Qinius = QiniuUploader;
    // Some AMD build optimizers like r.js check for condition patterns like the following:
    if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
        root.Qinius = Qinius;
        define(function() {
            return Qinius;
        });
    }
    // Check for `exports` after `define` in case a build optimizer adds an `exports` object.
    else if (freeExports && freeModule) {
        // Export for Node.js or RingoJS.
        if (moduleExports) {
            (freeModule.exports = Qinius).Qinius = Qinius;
        }
        // Export for Rhino with CommonJS support.
        else {
            freeExports.Qinius = Qinius;
        }
    }
    else {
        // Export for a browser or Rhino.
        root.Qinius = Qinius;
    }

}.call(this));
// }).call(function () {
//     console.log(this);
//     return this || (typeof window !== 'undefined' ? window : global);
// });
