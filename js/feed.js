$(document).ready(function(){
  // instafeed
  var feed = new Instafeed({
    clientId: 'de20c8b1dc394285aa23db84b32cc803',
    accessToken: '3457657437.de20c8b.743705c02eb048c69db553ef7b562af1',
    get: 'user',
    userId: '3457657437',
    template: '<a href="{{link}}" target="_blank"><img src="{{image}}" width="230" height="164"/></a>',
    sortBy: 'most-recent',
    limit: '6',
    resolution: 'low_resolution'
   });
   feed.run();
  // end instafeed
});
