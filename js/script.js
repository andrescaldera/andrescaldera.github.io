$(document).ready(function(){

  var $window = $(window);
  $("ul.nav li:first-of-type ").hover(function(){
    $(this).find(".dropdown-menu").stop(true, true).delay(100).fadeIn(200);
  },function(){
    $(this).find(".dropdown-menu").stop(true, true).delay(100).fadeOut(200);
  });

  // $(".carousel").carousel();
  // parallax
  // // carousel
  //
  //   $("#slideshow > .banner-img:gt(0)").hide();
  //   setInterval(function(){
  //     $("#slideshow > .banner-img:first")
  //     .fadeOut(1000)
  //     .next()
  //     .fadeIn(1000)
  //     .end()
  //     .appendTo("#slideshow");
  //   }, 8000);

  // end carousel
  var $bannerImg = $(".item");

  if ($window.innerWidth() > 767) {
    $(window).scroll(function(){
      var wScroll = $(this).scrollTop();
      $bannerImg.css({
        // "transform" : "translate(0px, "+ wScroll/8 + "%)"
        // "transform" : "translate(0px, "+ wScroll/26 + "%)"
        "top" : ""+wScroll/2+"px"
      });
    });
  }
  // end parallax


  // validation newsletter
  var $inputEmail = $(".mc-field-group input[type=email]");
  var $inputText = $(".mc-field-group input[type=text]");
  var $inputEmail2 = $(".input-field-group input[type=email]");
  var $inputText2 = $(".input-field-group input[type=text]");

  $inputEmail.focusout(function(){
    if ($(this).val().length > 0) {
      $(this).prev().css({
        "opacity" : "0",
      });
      $(this).focusin(function(){
        $(this).prev().css({
          "opacity" : "1",
        });
      });
    } else {
      $(this).prev().css({
        "opacity" : "1"
      });
    }
  });
  $inputText.focusout(function(){
    if ($(this).val().length > 0) {
      $(this).prev().css({
        "opacity" : "0",
      });
      $(this).focusin(function(){
        $(this).prev().css({
          "opacity" : "1",
        });
      });
    } else {
      $(this).prev().css({
        "opacity" : "1"
      });
    }
  });
  // contact form
  $inputEmail2.focusout(function(){
    if ($(this).val().length > 0) {
      $(this).prev().css({
        "opacity" : "0",
      });
      $(this).focusin(function(){
        $(this).prev().css({
          "opacity" : "1",
        });
      });
    } else {
      $(this).prev().css({
        "opacity" : "1"
      });
    }
  });
  $inputText2.focusout(function(){
    if ($(this).val().length > 0) {
      $(this).prev().css({
        "opacity" : "0",
      });
      $(this).focusin(function(){
        $(this).prev().css({
          "opacity" : "1",
        });
      });
    } else {
      $(this).prev().css({
        "opacity" : "1"
      });
    }
  });
  // end validation newsletter


});
