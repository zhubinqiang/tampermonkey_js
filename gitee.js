// ==UserScript==
// @name         gitee
// @namespace    https://github.com/zhubinqiang/tampermonkey_js
// @version      0.1
// @description  block some ads
// @author       Zhu,binqiang
// @match        https://gitee.com/zhubinqiang/*
// @grant        none
// @require      https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    $().ready(function() {
        $(".carousel-inner").hide();
        $(".git-user-horsepower-card").hide();
    });

})();