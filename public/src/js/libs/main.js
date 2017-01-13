/**
 * Created by sunlei11 on 2/11 0011.
 */

define([
    "test",
    "jquery",
    "underscore",
    "backbone",
    "marionette",
    "touchSlide",
    "pageLoader",
    // "qinius",
    "md5",
    "anijs",
    "localStorage",
    "jqcookie"
], function (
    test,
    jquery,
    underscore,
    backbone,
    marionette,
    touchSlide,
    pageLoader,
    // qinius,
    md5,
    anijs,
    localStorage,
    jqcookie
    ) {
    //console.log(qinius);
    //console.log(localStorage);
    //alert('libs main js');
    return {
        test        : test,
        jquery      : jquery,
        underscore  : underscore,
        Backbone    : backbone,
        Marionette  : marionette,
        TouchSlide  : touchSlide,
        PageLoader  : pageLoader,
        // Qinius      : qinius,
        Md5         : md5,
        Anijs       : anijs,
        LocalStorage: localStorage,
        jqcookie    : jqcookie
    }
});