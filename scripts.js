$(document).ready(function () {
    $('.nav-button').click(function () {
        $(this).toggleClass('open');
    });
});
$(document).ready(function () {
    $('.nav-button').click(function () {
        $('.menu').toggleClass('open');
    });
});
if ($(.menu).hasClass('open')) {
  $(.nav-button).css({
    background: "#E0E0E0"
  });
}
