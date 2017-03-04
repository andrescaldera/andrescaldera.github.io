$(document).ready(function(){

  $("#galleryContainerBanner").justifiedGallery({
    rowHeight : 200,
    maxRowHeight : 300,
    lastRow : 'nojustify',
    margins : 15,
    rel: "gallery"
  }).on("jg.complete", function(){
    $(".gallery a").click(function(event){
      event.preventDefault();});
    $('.swipebox').swipebox({
      removeBarsOnMobile : true,
      hideCloseButtonOnMobile : false,
      // removeBarsOnMobile : true,  false will show bottom bar on mobile devices
      hideBarsDelay : 20000000,
      videoMaxWidth : 1140,
      loopAtEnd: false,
      autoplayVideos: false,
      useSVG: true
    });
  });
  $("#galleryContainer").justifiedGallery({
    rowHeight : 300,
    maxRowHeight : 300,
    lastRow : 'nojustify',
    margins : 15,
    rel: "gallery"
  }).on("jg.complete", function(){
    $(".gallery a").click(function(event){
      event.preventDefault();});
    $('.swipebox').swipebox({
      removeBarsOnMobile : true,
      hideCloseButtonOnMobile : false,
      // removeBarsOnMobile : true,  false will show bottom bar on mobile devices
      hideBarsDelay : 20000000,
      videoMaxWidth : 1140,
      loopAtEnd: false,
      autoplayVideos: false,
      useSVG: true
    });
  });


  // swipebox
  // $('.swipebox').swipebox({
  //   removeBarsOnMobile : true, // false will show top navigation bar on mobile devices
  //   hideCloseButtonOnMobile : false, // true will hide the close button on mobile devices
  //   //removeBarsOnMobile : true,  false will show bottom bar on mobile devices
  //   hideBarsDelay : 20000000, // delay before hiding bars on desktop
  //   videoMaxWidth : 1140,
  //   loopAtEnd: false,
  //   autoplayVideos: false,
  //   useSVG: true
  // });
  // end swipebox


});
