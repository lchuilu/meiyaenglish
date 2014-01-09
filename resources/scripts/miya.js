$(document).ready(function() {
	$('#indexSwitch .s1').mouseenter(function(event) {
		event.preventDefault();
		var _this = $(this);
		var idx = _this.prevAll().length;
		var html ;
		$('#indexSc .text').hide();
		$('#indexSc .text').eq(idx).fadeIn();
	});
	var qq = '<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=10923897&amp;site=qq&amp;menu=yes" target="_blank"><img src="../resources/images/qq.jpg" alt="" id="qqCall" /></a>'
	$('body').append(qq);

});