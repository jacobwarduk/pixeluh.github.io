var color1 = "#ef476f",
    color2 = "#ffd166",
    color3 = "#06D6A0",
    color4 = "#118ab2",
    color5 = "#073b4c";

    //as we scroll down the page, each section will have a different color5
$(window).scroll(function() {
  if ($(window).scrollTop() > 50) {
    $("#nav").css("background", color4);
  } else {
    $("#nav").css("background", color1);
  }
})
