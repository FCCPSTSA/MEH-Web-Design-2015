$(document).ready(function () {
	$('.menu-button').click(function () {
		$(this).toggleClass('open');
	});
});
$(document).ready(function () {
	$('.menu-button').click(function () {
		var isOpened = true;
		$('.menu').animate({
			width: "30vw"
		});
	});
});
if (isOpened === true) {
	$(document).ready(function () {
		$('.menu-button').click(function () {
			$('.menu').animate({
				width: "0vw"
			});
		});
	});
}
