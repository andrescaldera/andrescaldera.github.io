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
  // carousel
  var slideIndex = 0;
  carousel();

  function carousel() {
    var i;
    var x = document.getElementsByClassName("slides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {
      slideIndex = 1;
    }
    x[slideIndex-1].style.display = "inline-block";
    setTimeout(carousel, 4000); // Change image every 2 seconds
  }
  // end carousel

  // justifiedGallery
  $("#galleryContainer").justifiedGallery({
    rowHeight : 300,
    lastRow : 'nojustify',
    margins : 3,
    rel: "gallery"
  });
  // end justifiedGallery
  // swipebox
  $('.swipebox').swipebox({
    removeBarsOnMobile : true, // false will show top navigation bar on mobile devices
    hideCloseButtonOnMobile : false, // true will hide the close button on mobile devices
    //removeBarsOnMobile : true,  false will show bottom bar on mobile devices
    hideBarsDelay : 20000000, // delay before hiding bars on desktop
    videoMaxWidth : 1140,
    loopAtEnd: false,
    autoplayVideos: false,
    useSVG: true
  });
  // end swipebox



});
