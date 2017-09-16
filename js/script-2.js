// $(document).ready(function(){
//   (function () {
//       var pageLoad = {
//           init: function () {
//               this.cacheDom();
//               this.bindEvents();
//           },
//           cacheDom: function () {
//               this.$window= $(window);
//               this.$dropdown = $("ul.nav li .dropdown");
//               // this.$dropdownMenu = this.$dropdown.find(".dropdown-menu");
//
//           },
//           bindEvents: function () {
//               // this.$dropdown.hover(this.hoverFadeIn.bind(this), this.hoverFadeOut.bind(this));
//               this.$dropdown.hover(function () {
//                   $(this).find(".dropdown-menu").stop(true, true).delay(100).fadeIn(200);
//               }, function () {
//                   $(this).find(".dropdown-menu").stop(true, true).delay(100).fadeOut(200);
//               });
//           },
//           // hoverFadeIn: function (event) {
//           //     var $target = $(event.target).find(".dropdown-menu");
//           //     console.log($target);
//           //     $target.stop(true, true).delay(100).fadeIn(200);
//           //
//           // },
//           // hoverFadeOut: function(event){
//           //     var $target = $(event.target).find(".dropdown-menu");
//           //     console.log($target);
//           //     $target.stop(true, true).delay(100).fadeOut(200);
//           // }
//       };
//
//       return {
//           dropdown: pageLoad.init()
//       };
//       // dropdown.init();
//   })();
//
// });
