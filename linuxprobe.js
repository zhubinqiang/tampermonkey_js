// ==UserScript==
// @name         nuxprobe
// @namespace    https://github.com/zhubinqiang/tampermonkey_js
// @version      0.1
// @description  block some ads
// @author       Zhu,binqiang
// @match        https://www.linuxprobe.com/*
// @grant        none
// @require      https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    $().ready(function() {
        $("#text-36").hide();
        $("#text-37").hide();
        $("#text-38").hide();
        $("#text-41").hide();
        $(".ad").hide();
    });

})();
