// ==UserScript==
// @name         baidu_question
// @namespace    https://github.com/zhubinqiang/tampermonkey_js
// @version      0.1
// @description  remove right area
// @author       Zhu,binqiang
// @match        https://zhidao.baidu.com/question/*
// @grant        none
// @require      https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    $().ready(function() {
        $("#qb-side").hide();
    });

})();