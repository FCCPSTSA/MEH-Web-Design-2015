$(document).ready(function() {
    $('.nav-button').click(function() {
        $(this).toggleClass('open');
    });
});
$(document).ready(function() {
    $('.nav-button').click(function() {
        $('.menu').toggleClass('open');
        $('.content').animate({
          'filter': 'brightness(60%)',
          '-webkit-filter': 'brightness(60%)',
          'webkitFilter': 'brightness(60%)'
        });
    });
});
