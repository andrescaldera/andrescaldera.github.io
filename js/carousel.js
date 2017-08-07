$(document).ready(function(){

    var carousel = (function(){
        // cache DOM
        var $window = $(window);
        var $carousel = $(".carousel");
        var $bannerImg = $(".item");
        
        if ($window.innerWidth() > 767) {
            $carousel.carousel({
                interval: 6000
            });

            // bind events
            $window.scroll(function(){
                var windowScroll = $(this).scrollTop();
                $bannerImg.css({
                    "top": "" + windowScroll / 4 + "px"
                });
            });

        } else if ($window.innerWidth() <= 767) {
            $carousel.carousel("pause");
        }
       

    })();
});


// carousel
    // if ($window.innerWidth() > 767) {
    //     $carousel.carousel({
    //         interval: 6000,

    //     });
    // } else if ($window.innerWidth() <= 767) {
    //     $carousel.carousel("pause");
    // }
    // // parallax
    // var $bannerImg = $(".item");

    // if ($window.innerWidth() > 767) {
    //     $(window).scroll(function() {
    //         var wScroll = $(this).scrollTop();
    //         $bannerImg.css({
    //             // "transform" : "translate3d(0px, "+ wScroll/8 + "%, 0)"
    //             // "transform" : "translate(0px, "+ wScroll/26 + "%)"
    //             "top": "" + wScroll / 4 + "px"
    //         });
    //     });
    // }
    // end parallax