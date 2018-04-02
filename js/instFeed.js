$(document).ready(function(){
  var $window = $(window);
  // instafeed
  if ($window.innerWidth() <= 543) {
    var feed = new Instafeed({
      clientId: '3ba8f299954d45a0af7f8634679b4c8e',
      accessToken: '3457657437.3ba8f29.28ecae7c9fa945208aa644d30406815e',
      get: 'user',
      userId: '3457657437',
      template: '<div><a href="{{link}}" target="_blank" class="shadow-1"><img src="{{image}}" width="230" height="164"/></a></div>',
      sortBy: 'most-recent',
      limit: '1',
      resolution: 'standard_resolution'
    });
    feed.run();

  } else if ($window.innerWidth() > 543) {
    var feed2 = new Instafeed({
      clientId: '3ba8f299954d45a0af7f8634679b4c8e',
      accessToken: '3457657437.3ba8f29.28ecae7c9fa945208aa644d30406815e',
      get: 'user',
      userId: '3457657437',
      template: '<div><a href="{{link}}" target="_blank" class="shadow-1"><img src="{{image}}" width="230" height="164"/></a></div>',
      sortBy: 'most-recent',
      limit: '6',
      resolution: 'low_resolution'
    });
    feed2.run();
  }

  // end instafeed

  //
  // code=1319208a6bc64eeaad4666424cc5668c
  // accessToken: 3457657437.3ba8f29.28ecae7c9fa945208aa644d30406815e
  //
});
