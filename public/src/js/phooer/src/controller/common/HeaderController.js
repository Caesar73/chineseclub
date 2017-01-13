/*
 * @author: Caesar
 * @module:
 *
 */

define([
    'libs',
    'phooer/src/view/common/HeaderView',
    'phooer/src/view/common/ChannelHeaderView',
    'phooer/src/collection/common/HeaderCollection'
    ],
    function (
        libs,
        HeaderView,
        ChannelHeaderView,
        HeaderCollection
        ) {
    var _            = libs.underscore;
    var $            = libs.jquery;
    var Backbone     = libs.Backbone;
    var Marionette   = libs.Marionette;
    var LocalStorage = libs.LocalStorage;

    //var Controller = Backbone.Marionette.Controller.extend({
    var Controller = {
        initialize: function (options) {
            var opt = options;
            console.log('Header Controller initialize');
            var collection = new HeaderCollection;
            var view       = new HeaderView;
            if (opt.type == 'channel') {
                view = new ChannelHeaderView;
                view.render({});
                return;
            }
            else {
                collection.fetch({
                    success: function (model, response) {
                        console.log('Header Controller fetch success');
                        //console.log(response);
                        view.render(response);
                    }
                });
            }

        },
        done: function () {
            console.log('Header Controller done');
            //bookCollection.fetch({ success: function () { bookView.render() } });
        },
        changeView: function (url) {

        }
    };
    //});

    return Controller;

});

