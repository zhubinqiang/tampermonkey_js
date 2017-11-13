// ==UserScript==
// @name         51cto_home
// @namespace    https://github.com/zhubinqiang/tampermonkey_js
// @version      0.1
// @description  get wuyou coin
// @author       Zhu,binqiang
// @match        http://home.51cto.com/home
// @match        http://home.51cto.com/index.php?s=/Home
// @grant        none
// @require      https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    $().ready(function() {
        $("#jsSignGetCredits").click(function() {
        	console.log($(this).text());
        	return false;
        });
    });

})();