/*
 * @author: Caesar
 * @module:
 *
 */

define([
    'libs',
    'blog/src/view/list/ListDetailView',
    'blog/src/view/list/ListDetailNavView',
    'blog/src/collection/list/ListDetailCollection'
    ],
    function (
        libs,
        ListDetailView,
        ListDetailNavView,
        ListDetailCollection
        ) {
    var _            = libs.underscore;
    var $            = libs.jquery;
    var Backbone     = libs.Backbone;
    var Marionette   = libs.Marionette;
    var LocalStorage = libs.LocalStorage;

    var TouchSlide   = libs.TouchSlide;

    //var Controller = Backbone.Marionette.Controller.extend({
    var Controller = {
        initialize: function (options) {
            console.log('List Detail Controller initialize');
            var collection = new ListDetailCollection;
            var view       = new ListDetailView;
            var navView    = new ListDetailNavView;
            var _options = options;
            var _plat    = _options.platform || 'webapp';

            var container = $('#list-detail');
            container.html('');

            console.log('back type : ' + _options.type);
            navView.render({
                type: _options.type,
                title: _options.title
            });

            collection.fetch({
                success: function (model, response) {
                    console.log('List Detail Controller fetch success');
                    //console.log(response);
                    var data = {
                        platform: _plat
                    };
                    data = $.extend(true, data, response);
                    // console.log(data);
                    view.render(data);

                    // window._platform = _plat;
                    if (_plat == 'native') {
                    //     var detail    = $('#list-detail');
                    //     var picScroll = detail.find('#picScroll');
                    //     var tempWrap  = detail.find('.tempWrap');

                    //     detail.find('.header').hide();
                    //     var dh = detail.height();
                    //     picScroll.height( dh );
                    //     tempWrap.height( dh );
                    //     detail.find('.bd').height( dh );
                    //     detail.find('.bd section').height( dh );
                    //     var ch = dh - detail.find('.title').height() - detail.find('.imgBoard').height();
                    //     detail.find('.bd section .content').height( ch );

                    //     detail.find('.content p').css({
                    //         'padding-top': '0rem'
                    //     });
                    //     picScroll.css({
                    //         'padding-top': '0rem'
                    //     });

                    //     // #detail/native/index/1
                    }
                    else {
                        // var detail = $('#list-detail');
                        // detail.find('.header').show();
                        // detail.find('#picScroll').css({
                        //     'padding-top': '4rem'
                        // });

                    }

                }
            });

        },
        done: function () {
            console.log('List Controller done');
            //bookCollection.fetch({ success: function () { bookView.render() } });
        },
        changeView: function (url) {

        }
    };
    //});

    return Controller;

});

