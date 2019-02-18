$(document).ready(function() {
	$('.nav-tabs li').click(function() {
		if (!$(this).hasClass('active')) {
			var i = $(this).index();
			$('.nav-tabs li.active').removeClass('active');
			$('.tabs-content .active').hide().removeClass('active');
			$(this).addClass('active');
			$($('.tabs-content').children('.content-item')[i]).fadeIn(1000).addClass('active');
		}
	});
});