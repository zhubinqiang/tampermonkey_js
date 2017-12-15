// ==UserScript==
// @name         man_linuxde
// @namespace    https://github.com/zhubinqiang/tampermonkey_js
// @version      0.1
// @description  block some ads
// @author       Zhu,binqiang
// @match        http://man.linuxde.net/*
// @grant        none
// @require      https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    $().ready(function() {
        $(".ad").hide();
    });

})();