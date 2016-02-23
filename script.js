$(document).on('click', 'a[href^="#"]', function(e) {
    $(".more").click(function() {
      $("html, body").animate({
        scrollTop: $("#about").offset().top
      }, 2000);
    });

    var id = $(this).attr('href');
    var move = $(id).offset().top;

    e.preventDefault();

    $('body, html').animate({
      scrollTop: $(id).offset().top
    }, 1800);
});
