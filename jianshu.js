// ==UserScript==
// @name         jianshu
// @namespace    https://github.com/zhubinqiang/tampermonkey_js
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.jianshu.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    $("#note-fixed-ad-container").remove();
    $("#web-note-ad-1").remove();
})();