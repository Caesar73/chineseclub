/*
 * @author: Caesar
 * @module:
 *
 */

define([
    'libs',
    'spahome/src/collection/list/ListCollection',
    'text!../../template/list/list-list.html'
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
            console.log('Listview initialize');
            // this.listenTo(this.model, 'change',  this.render);
            // this.listenTo(this.model, 'destroy', this.remove);
        },
        render: function (response) {
            // this.$el.html(this.template(this.model.toJSON()));
            // this.$el.toggleClass('done', this.model.get('done'));
            // this.input = this.$('.edit');
            // return this;
            console.log('list view render');
            var that      = this;
            var html      = this.template(response.data);
            var container = $('#list');

            var loadingHtml = '' +
            '<div class="loading-new" id="loading-new">' +
                '<span><i><\/i>正在加载...<\/span>' +
            '<\/div>'
            ;

            //console.log(html);
            container.html('').html(html);
            container.append(loadingHtml);

            function callback (opts) {
                var _opts = opts;
                console.log(opts);


                $.get(_opts.url, {page: _opts.page, type: 'continue'}, function (res) {
                    console.log('GET');
                    if (res.code == '0') {
                        var html = that.template(response.data);
                        // console.log(html);
                        _opts.block    = false;
                        _opts.current  += 1;
                        _opts.instance.session('page', _opts.page);
                        console.log('page: ' + _opts.instance.session('page'));
                        var oldHtml = _opts.instance.session('data');
                        oldHtml = oldHtml + html;
                        _opts.instance.session('data', oldHtml);
                        _opts.$loader.before(html);
                        // window.LazyLoad();
                        // var lazyload = TD.utils.lazyload();
                        // lazyload.addImages(document.querySelectorAll('img.coverImg'));
                    }
                    else {

                    }

                }, 'json');

                // var html      = that.template(response.data);
                // var container = $('#list');
                // $('.loading-new').before(html);
                // _opts.$loader.before(html);
            }



            PageLoader.init({
                url: '/api/v1/list/list',
                limit: 10,
                count: 2,
                current: 1,
                tplType: 'search',
                callback: callback
            });
        }

    });

});

