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
  var $window = $(window);
  if ($window.innerWidth() > 746) {
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
  else if ($window.innerWidth() <= 746) {
    $("#slideshow > .banner-img:gt(0)").hide();
  }
  // end carousel

  // parallax
  $(window).scroll(function(){

    var wScroll = $(this).scrollTop();
    var $bannerImg = $(".banner-img");
    $bannerImg.css({
      // "transform" : "translate(0px, "+ wScroll/8 + "%)"
      // "transform" : "translate(0px, "+ wScroll/26 + "%)"
      "top" : ""+wScroll/2+"px"
    });

  });
  // end parallax

  // gallery mobile
  var $moreButton = $(".more-button");
  var $indexGalleryItem = $(".index-gallery-item:nth-of-type(n+2)");
  var $indexGalleryMobile = $(".index-gallery-mobile");
  var $open = $(".open");
  var $close = $(".close");

  $close.hide();

  $open.on("click", function(){
    $indexGalleryMobile.css({"height":"100%"});
    $indexGalleryItem.css({
      "display":"flex",
      "flex-flow":"column"
    });
    $open.hide();
    $close.show();
  });

  $close.on("click", function(){
    $indexGalleryMobile.css({"height":"85vw"});
    $indexGalleryItem.css({
      "display":"none",
    });
    $close.hide();
    $open.show();
  });
  // end gallery mobile

});
