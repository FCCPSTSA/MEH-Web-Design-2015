$(window).on('scroll', function(e) {
  var value = $(this).scrollTop();
  if (value < 200) {
    $('header').css({
      'height': '100px'
    });
    $('h1').css({
      'font-size': '75px'
    });
    $('.nav-button').css({
      'visibility': 'hidden'
    });
    $('.toplinks').css({
      'visibility': 'visible'
    });
  } else {
    $('header').css({
      'height': '60px'
    });
    $('h1').css({
      'font-size': '40px'
    });
    $('.nav-button').css({
      'visibility': 'visible'
    });
    $('.toplinks').css({
      'visibility': 'hidden'
    });
  }
});
$(document).ready(function() {
  $('.nav-button').click(function() {
    $(this).toggleClass('open');
    $('.menu').toggleClass('open');
  });
});
