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
      "transform" : "translate(0px, "+ wScroll/8 + "%)"
    });
  });
  // end parallax

  // instafeed
  var feed = new Instafeed({
    clientId: 'de20c8b1dc394285aa23db84b32cc803',
    accessToken: '2226cc8699fe4eab84b305f64109722f',
    get: 'user',
    userId: '3457657437',
    template: '<a href="{{link}}"><img src="{{image}}"/></a>',
    sortBy: 'most-recent',
    limit: '6',
    resolution: 'thumbnail'
   });
   feed.run();
  // end instafeed

});
