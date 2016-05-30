$(document).on('click', 'a[href^="#"]', function(event) {
  var id = $(this).attr('href');
  var move = $(id).offset().top;

  event.preventDefault();

  $('body, html').animate({
    scrollTop: $(id).offset().top
  }, 1900);
});
