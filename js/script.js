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
      "transform" : "translate(0px, "+ wScroll/6 + "%)"
    });
  });
  // end parallax

  // preview photo
  $(".preview").hide();

  $(".gallery-item").children("img").on("click", function(){
    $(".preview").show();
    $("body").css("overflow", "hidden");
    $(".right-nav-sup").hide();
    $(".left-nav-sup").hide();

    var that = this;
    console.log(that);

    $(this).clone().appendTo("#picture");

    var fCaption = $(this).next("figcaption").html();
    $("#figCaption").html(fCaption);

    $("#picture").children().css({"position": "absolute","display": "block","max-width": "100%","max-height": "100%","left": "0","right": "0","top": "0","bottom": "0","margin": "auto"});

    $(".close-preview").click(function(){
      $(".preview").hide();
      $("body").css("overflow", "auto");
      $("#picture").children().remove();
    });

  });// end preview photo


});
