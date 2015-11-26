var isOpen = false;

$(document).ready(function () {
	$('.menu-button').click(function () {
		$(this).toggleClass('open');
	});
});
if (isOpen === false) {
	$(document).ready(function () {
		$('.menu-button').click(function () {
			isOpened = true;
			$('.menu').animate({
			width: "30vw"
			});
		});
	});
}
if (isOpened === true) {
	$(document).ready(function () {
		$('.menu-button').click(function () {
			isOpen = false
			$('.menu').animate({
				width: "0vw"
			});
		});
	});
}
