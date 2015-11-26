$(document).ready(function () {
	$('.menu-button').click(function () {
		$(this).toggleClass('open');
	});
});
$(document).ready(function () {
	$('.menu-button').click(function () {
		$('.menu').animate({
			width: "30vw"	
		});
	});
});
