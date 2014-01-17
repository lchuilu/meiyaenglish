$(document).ready(function() {
	$('#indexS span').mouseenter(function(event) {
		event.preventDefault();
		var _this = $(this);
		var idx = _this.prevAll().length;

		var html ;
		var _span = idx +1;
		$('#indexS span').each(function(index, el) {

			var id = index +1;
			console.log(id)
			$('#indexS span').eq(index).removeClass('s'+id+'v');
		});
		$('#indexS span').eq(idx).addClass('s'+_span+'v');

		$('#indexSc .text').hide();
		$('#indexSc .text').eq(idx).show();
	});
	var qq = '<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=10923897&amp;site=qq&amp;menu=yes" target="_blank"><img src="../resources/images/qq.jpg" alt="" id="qqCall" /></a>'
	$('body').append(qq);

});