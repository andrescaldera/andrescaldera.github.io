$(document).ready(function(){
  var $window = $(window);
  // instafeed
  if ($window.innerWidth() <= 543) {
    var feed = new Instafeed({
      clientId: 'de20c8b1dc394285aa23db84b32cc803',
      accessToken: '3457657437.de20c8b.743705c02eb048c69db553ef7b562af1',
      get: 'user',
      userId: '3457657437',
      template: '<div><a href="{{link}}" target="_blank" class="shadow-2"><img src="{{image}}" width="230" height="164"/></a></div>',
      sortBy: 'most-recent',
      limit: '1',
      resolution: 'standard_resolution'
    });
    feed.run();

  } else if ($window.innerWidth() > 543) {
    var feed2 = new Instafeed({
      clientId: 'de20c8b1dc394285aa23db84b32cc803',
      accessToken: '3457657437.de20c8b.743705c02eb048c69db553ef7b562af1',
      get: 'user',
      userId: '3457657437',
      template: '<div><a href="{{link}}" target="_blank" class="shadow-2"><img src="{{image}}" width="230" height="164"/></a></div>',
      sortBy: 'most-recent',
      limit: '6',
      resolution: 'low_resolution'
    });
    feed2.run();
  }

  // end instafeed
});
