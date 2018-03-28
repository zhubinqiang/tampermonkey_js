// ==UserScript==
// @name         csdn
// @namespace    https://github.com/zhubinqiang/tampermonkey_js
// @version      0.1
// @description  remove ads, open read all
// @author       Zhu,binqiang
// @match        http://blog.csdn.net/*
// @grant        none
// @require      https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js
// ==/UserScript==


(function() {
    'use strict';

    // Your code here...
    $().ready(function() {
        $("#wrapper").hide();
        $("#pic").hide();
        $(".read_more_btn").click();
    });

})();