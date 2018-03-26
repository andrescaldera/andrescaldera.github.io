$(document).ready(function(){
  (function(){
    var gallery = {
      context:[],
      init: function(){
        this.getData();
      },
      getData: function() {
        var that = this;
        var url = "/data/detail_sc.json";
        var file = $.getJSON(url);
        file.done(function(data){
          console.log(data.imgs[0].title);
          that.context = data;
          that.render();
          that.justify();
        });
     },
      render: function() {
        var htmlTemplate = $("#galleryImgs").html();
        var template = Handlebars.compile(htmlTemplate,{
          noEscape : true
        });

        $("#galleryContainer").html(template(this.context));
      },
      justify: function(){
        $("#galleryContainer").justifiedGallery({
          rowHeight : 300,
          maxRowHeight : 300,
          lastRow : "nojustify",
          margins : 20,
          rel: "gallery"
        }).
        on("jg.complete",function(){
          $(".gallery a").click(function(event){
            event.preventDefault();
          });
          $(".swipebox").swipebox({
            removeBarsOnMobile : true,
            hideCloseButtonOnMobile : false,
            hideBarsDelay : 20000000,
            videoMaxWidth : 1140,
            loopAtEnd: false,
            autoplayVideos: false,
            useSVG: true
          });
        });
      }
    }
    return {
      gallery: gallery.init()
    }
  })();

});
