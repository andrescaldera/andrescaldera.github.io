$(document).ready(function(){
  // carousel
  var $window = $(window);

  if ($window.innerWidth() > 767) {
    $("#slideshow > .banner-img:gt(0)").hide();
    setInterval(function(){
      $("#slideshow > .banner-img:first")
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo("#slideshow");
    }, 8000);
  }
  else if ($window.innerWidth() <= 767) {
    $("#slideshow > .banner-img:gt(7)").hide();
    $("#slideshow > .banner-img:lt(7)").hide();
  }
  // end carousel

  // parallax
  var $bannerImg = $(".banner-img");

  if ($window.innerWidth() > 767) {
    $(window).scroll(function(){
      var wScroll = $(this).scrollTop();
      $bannerImg.css({
        // "transform" : "translate(0px, "+ wScroll/8 + "%)"
        // "transform" : "translate(0px, "+ wScroll/26 + "%)"
        "top" : ""+wScroll/4+"px"
      });
    });
  }
  // end parallax

  // gallery mobile
  // var $indexGalleryItem = $(".index-gallery-item-parent:nth-of-type(n+2)");
  // var $indexGalleryMobile = $(".index-gallery-mobile");
  // var $open = $(".open-button");
  // var $close = $(".close-button");
  //
  // $close.hide();
  //
  // $open.on("click", function(){
  //   $indexGalleryMobile.css({"height":"100%"});
  //   $indexGalleryItem.css({
  //     "display":"flex",
  //     "flex-flow":"column"
  //   });
  //   $open.hide();
  //   $close.show();
  //   $close.css({
  //     "display":"flex"
  //   });
  // });
  //
  // $close.on("click", function(){
  //   $indexGalleryMobile.css({"height":"85vw"});
  //   $indexGalleryItem.css({
  //     "display":"none",
  //   });
  //   $close.hide();
  //   $open.show();
  // });
  // end gallery mobile

  // validation newsletter
  var $inputEmail = $(".mc-field-group input[type=email]");
  var $inputText = $(".mc-field-group input[type=text]");

  $inputEmail.focusout(function(){
    if ($inputEmail.val().length > 0) {
      $inputEmail.prev().css({
        "opacity" : "0",
      });
      $inputEmail.focusin(function(){
        $inputEmail.prev().css({
          "opacity" : "1",
        });
      });
    } else {
      $inputEmail.prev().css({
        "opacity" : "1"
      });
    }
  });
  $inputText.focusout(function(){
    if ($inputText.val().length > 0) {
      $inputText.prev().css({
        "opacity" : "0",
      });
      $inputText.focusin(function(){
        $inputText.prev().css({
          "opacity" : "1",
        });
      });
    } else {
      $inputText.prev().css({
        "opacity" : "1"
      });
    }
  });
  // end validation newsletter


});
