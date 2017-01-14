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

  // parallax
  $(window).scroll(function(){

    var wScroll = $(this).scrollTop();

    $(".banner-img img").css({
      "transform" : "translate(0px, "+ wScroll/8 + "%)"
    });
  });
  // end parallax

});
