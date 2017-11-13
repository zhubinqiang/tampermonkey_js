// ==UserScript==
// @name         google
// @namespace    https://github.com/zhubinqiang/tampermonkey_js
// @version      0.1
// @description  open with a new tab in google search
// @author       Zhu,binqiang
// @match        https://www.google.com/*
// @match        https://www.google.com.hk/*
// @grant        none
// @require      https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    $().ready(function() {
        $("#ires").on("click","a", function() {
            $(this).attr("target", "_blank");
        });

        $("#rhs_block").on("click","a", function() {
            $(this).attr("target", "_blank");
        });

    });

})();
