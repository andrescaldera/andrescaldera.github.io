$(document).ready(function(){

  var $window = $(window);
  var $carousel = $(".carousel");
  var $dropdown = $(".dropdown");
  var $anchor = $(".navbar .container .navbar-collapse .nav li:first-of-type a");

  if ($window.innerWidth() > 767){
    $("ul.nav li .dropdown").hover(function(){
      $(this).find(".dropdown-menu").stop(true, true).delay(100).fadeIn(200);
    },function(){
      $(this).find(".dropdown-menu").stop(true, true).delay(100).fadeOut(200);
    });
  }

  // carousel
  if ($window.innerWidth() > 767) {
    $carousel.carousel({
      interval : 6000,

    });
  } else if ($window.innerWidth() <= 767) {
    $carousel.carousel("pause");
  }
  // parallax
  var $bannerImg = $(".item");

  if ($window.innerWidth() > 767) {
    $(window).scroll(function(){
      var wScroll = $(this).scrollTop();
      $bannerImg.css({
        // "transform" : "translate3d(0px, "+ wScroll/8 + "%, 0)"
        // "transform" : "translate(0px, "+ wScroll/26 + "%)"
        "top" : ""+wScroll/4+"px"
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
  //input button clear
  var $form = $('#emf-form');
  var $newletter = $('#mc-embedded-subscribe-form');
  $('#emf-li-post-button input').on('click', function () {

    $form.find('input:text').val('').focus();
    $form.find('input[type=email]').val('').focus();
    $form.find('textarea').val('').focus();
  });
  $('#mc-embedded-subscribe').on('click', function () {
    $newletter.find('input:text').val('').focus();
    $newletter.find('input[type=email]').val('').focus();
  });


  // travel page
  var $tnavbar = $(".tnavbar .container");
  if ($window.innerWidth() <= 767) {
    $tnavbar.removeClass("navbar-travel-container");
  } else if ($window.innerWidth() > 767) {
    $tnavbar.addClass("navbar-travel-container");
  }

});
