$(document).ready(function() {
    $('.nav-button').click(function() {
        $(this).toggleClass('open');
        $('.coverup').toggleClass('crackedopen');
    });
});
$(document).ready(function() {
    $('.nav-button').click(function() {
        $('.menu').toggleClass('open');
        $('.content').animate({
          'webkitTransform': 'skewY(10deg)',
          'transform': 'skewY(10deg)'
        });
    });
});

