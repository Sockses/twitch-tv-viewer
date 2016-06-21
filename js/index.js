$(document).ready(function() {
  // $.getJSON('https://api.twitch.tv/kraken/streams/ogamingsc2?callback=?', function(data) {
  //   console.log(data);
  // });

  var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

  users.forEach(function(user) {
    $.getJSON("https://api.twitch.tv/kraken/users/" + user + "?callback=?", function(data) {
      console.log(data);
        $(".viewer-container").append('<div class="user"><img class="logo" src="' + data.logo + '"/><h3 class="userName">' + data.display_name + '</h3></div>');
      }
    );
  });
});
