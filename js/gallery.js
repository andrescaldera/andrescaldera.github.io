$(document).ready(function(){
  // justifiedGallery


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
      removeBarsOnMobile : true, // false will show top navigation bar on mobile devices
      hideCloseButtonOnMobile : false, // true will hide the close button on mobile devices
      //removeBarsOnMobile : true,  false will show bottom bar on mobile devices
      hideBarsDelay : 20000000, // delay before hiding bars on desktop
      videoMaxWidth : 1140,
      loopAtEnd: false,
      autoplayVideos: false,
      useSVG: true
    });
  });
  $("#galleryContainerDetailsSC").justifiedGallery({
    rowHeight : 300,
    maxRowHeight : 300,
    lastRow : 'nojustify',
    margins : 15,
    rel: "gallery"
  }).on("jg.complete", function(){
    $(".gallery a").click(function(event){
      event.preventDefault();});
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
  });
  $("#galleryContainerFireS").justifiedGallery({
    rowHeight : 300,
    maxRowHeight : 300,
    lastRow : 'nojustify',
    margins : 15,
    rel: "gallery"
  }).on("jg.complete", function(){
    $(".gallery a").click(function(event){
      event.preventDefault();});
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
  });
  $("#galleryContainerPhilarmonie").justifiedGallery({
    rowHeight : 300,
    maxRowHeight : 300,
    lastRow : 'nojustify',
    margins : 15,
    rel: "gallery"
  }).on("jg.complete", function(){
    $(".gallery a").click(function(event){
      event.preventDefault();});
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
  });
  $("#galleryContainerLaDefense").justifiedGallery({
    rowHeight : 300,
    maxRowHeight : 300,
    lastRow : 'nojustify',
    margins : 15,
    rel: "gallery"
  }).on("jg.complete", function(){
    $(".gallery a").click(function(event){
      event.preventDefault();});
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
  });




  // // end justifiedGallery


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

  // $(".gallery").each(function (i, el){
  //   $(el).justifiedGallery({
  //     rel: "gallery-" + i,
  //     rowHeight : 200,
  //     // maxRowHeight : 300,
  //     lastRow : 'nojustify',
  //     margins : 15,
  //   }).on("jg.complete", function(){
  //     $(this).find("a").swipebox({
  //       removeBarsOnMobile : true, // false will show top navigation bar on mobile devices
  //       hideCloseButtonOnMobile : false, // true will hide the close button on mobile devices
  //       //removeBarsOnMobile : true,  false will show bottom bar on mobile devices
  //       hideBarsDelay : 20000000, // delay before hiding bars on desktop
  //       videoMaxWidth : 1140,
  //       loopAtEnd: false,
  //       autoplayVideos: false,
  //       useSVG: true
  //     });
  //   });
  // });


});
