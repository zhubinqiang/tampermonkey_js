// ==UserScript==
// @name         intel_notification
// @namespace    https://github.com/zhubinqiang/tampermonkey_js
// @version      0.1
// @description  skip notification
// @author       Zhu,binqiang
// @match        http://*/notify-Caution_Notification*
// @grant        none
// @require      https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    $().ready(function(){
        var cookie = 'notified-Caution_Notification=1';
        var expires = new Date();
        expires.setTime(expires.getTime() + 1000 * 60 * 60);
        var domain = ';Domain=.csdn.net';
        document.cookie = cookie+';expires='+expires.toUTCString()+domain;
        if (document.cookie.indexOf(cookie) == -1) {
            document.cookie = cookie+';expires='+expires.toUTCString();
        }
        window.location.href = $("a")[1].href;
    });

})();
