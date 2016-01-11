$(document).on('scroll', function(e) {
    var value = $(this).scrollTop();
    if ( value < 200 ) {
        $("header").css("height", "100px");
        $('h1').css({'font-size' : '75px'});
    }
    else {
        $("header").css("height", "60px");
        $('h1').css({'font-size' : '30px'});
    }
});
$(document).ready(function() {
    $('.nav-button').click(function() {
        $(this).toggleClass('open');
    });
});
$(document).ready(function() {
    $('.nav-button').click(function() {
        $('.menu').toggleClass('open');
    });
});