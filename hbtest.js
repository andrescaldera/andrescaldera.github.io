$(document).ready(function(){
  (function(){
    var gallery = {
      context:[],
      init: function(){
        this.getData();
      },
      getData: function() {
        var that = this;
        // var url = "data/details_sc.json";
        $.getJSON("data/detail_sc.json").then(function(data){
          console.log(data);
          that.context = data;
          that.render();
        })
     },
      render: function() {
        var htmlTemplate = $("#hbtemplate").html();
        var template = Handlebars.compile(htmlTemplate);

        $(".content").html(template(this.context));
      }
    }
    return {
      gallery: gallery.init()
    }
  })();


});
