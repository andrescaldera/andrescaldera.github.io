$(document).ready(function(){
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
