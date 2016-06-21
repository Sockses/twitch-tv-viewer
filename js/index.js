$(document).ready(function() {

  var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

  users.forEach(function(user) {

    // get basic user information
    $.getJSON("https://api.twitch.tv/kraken/users/" + user + "?callback=?", function(userData) {
      console.log(userData);
        $(".viewer-container").append('<div class="user" id="' + user + '"><img class="logo" src="' + userData.logo + '"/><a class="userURL" href="' + userData._links.self + '"><h3 class="userName">' + userData.display_name + '</h3></a></div>');

        // get the stream information
        $.getJSON('https://api.twitch.tv/kraken/streams/' + user + '?callback=?', function(streamData) {
          console.log(streamData);
          if (streamData.stream === null) {
            $('#' + user).append('<h3 class="streamStatus">Offline</h3>');
          } else {
            $('#' + user).append('<h3 class="streamStatus">' + streamData.stream.channel.game + ': ' + streamData.stream.channel.status.slice(0,40) + '...</h3>');
          }
        });
      }
    );
  });
});
