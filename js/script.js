$(document).ready(function(){

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

  // preview photo
  $(".preview").hide();
  $(".gallery-item").click(function(){
    $(".preview").show();
    $("body").css("overflow", "hidden");

    $(this).children("img").clone().appendTo("#picture");

    $(".left-nav").click(function(){
      $("#picture").children().remove();
      $(this).prev().children("img").clone().appendTo("#picture");
    });
    $(".right-nav").click(function(){
      $("#picture").children().remove();
      $(this).next().children("img").clone().appendTo("#picture");
    });

    var fCaption = $(this).find("figcaption").html();
    console.log(fCaption);
    $("#figCaption").html(fCaption);

    $("#picture").children().css({"position": "absolute","display": "block","max-width": "100%","max-height": "100%","left": "0","right": "0","top": "0","bottom": "0","margin": "auto"});
    $("#picture").children().click(function(){
      $("#picture").children().css("transform","scale(1)");
    });

    $(".close-preview").click(function(){
      $(".preview").hide();
      $("body").css("overflow", "auto");
      $("#picture").children().remove();
    });

  });// end preview photo


});
