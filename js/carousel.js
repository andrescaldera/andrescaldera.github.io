$(document).ready(function(){
  // carousel
  var slideIndex = 0;
  carousel();

  function carousel() {
    var imgs = document.getElementsByClassName("slides");
    for (i = 0; i < imgs.length; i++) {
      imgs[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > imgs.length) {
      slideIndex = 1;
    }
    imgs[slideIndex-1].style.display = "inline-block";
    setTimeout(carousel, 4000);
  }
  // end carousel
});
