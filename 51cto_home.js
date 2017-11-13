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
		$("#jsSignGetCredits").on("click", "a", function() {
			alert("style:" + $(this).attr("style"));
			return false;
		});

		$.ajax({
			type: 'POST',
			dataType: 'json',
			url: '/home/ajax-to-sign',
			data: {
				_csrf: yii.getCsrfToken()
			},
			success: function(res) {
				$.shadow.close();
				if (res.isSignSuccess) {
					_isToSigned = false;
					$("#jsSignSpan").html("<b>" + res.lastedTimes + "</b>天");
					$(".jsSignBefore").hide();
					$(".jsSignAfter").show();
					$('#jsSignWybNum').html(res.wuyoucent);
					var alertSignId = $.alert.show({
						title: '提示',
						obj: '.jsGetFreeCredits',
						isHasClose: true
					});
					$("#" + alertSignId + " .jsGetWYBnum").html(res.signCentToday);
					$("#" + alertSignId + " .jsGetLatedTimes").html("您已连续领取" + res.lastedTimes + "天，继续加油");
				} else {
					$.message.show({
						text: '领取无忧币失败！',
						showCancelButton: false
					});
				}

			}
		});

	});

})();