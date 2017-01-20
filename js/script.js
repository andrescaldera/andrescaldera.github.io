$(document).ready(function(){

  // mobile-nav
  $(".menu-close").hide();
  $("#mobile-nav").hide();

  $(".menu-ham").click(function(){
    $("#mobile-nav").slideToggle(function(){
      $(".menu-ham").hide();
      $(".menu-close").show();
    });
  });

  $(".menu-close").click(function(){
    $("#mobile-nav").slideToggle(function(){
      $(".menu-close").hide();
      $(".menu-ham").show();
    });
  });
  // end mobile-nav
  // carousel
  $("#slideshow > .banner-img:gt(0)").hide();

  setInterval(function(){
    $("#slideshow > .banner-img:first")
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo("#slideshow");
  }, 8000);
  // end carousel

  // parallax
  $(window).scroll(function(){

    var wScroll = $(this).scrollTop();

    $(".banner-img").css({
      // "transform" : "translate(0px, "+ wScroll/8 + "%)"
      // "transform" : "translate(0px, "+ wScroll/26 + "%)"
      "top" : ""+wScroll/2+"px"
    });
  });
  // end parallax

});
