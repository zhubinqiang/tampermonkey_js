// ==UserScript==
// @name         ruanyifeng
// @namespace    https://github.com/zhubinqiang/tampermonkey_js
// @version      0.1
// @description  block some ads
// @author       Zhu,binqiang
// @match        http://www.ruanyifeng.com/blog/*
// @grant        none
// @require      https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js


// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    $().ready(function(){

        $(".entry-sponsor").remove();
        $("#related_entries").prev().remove();
        $("#cre").remove();

        // for home page
        $("#homepage").next().remove();
        $("#latest-comments").next().remove();
    });

})();