var apiKey = "71ce7bb50cb9ce230714325f7e72bdaf";

$(document).ready(function() {
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      $('.showWeather').text("The number of clouds in " + city + " is " + response.clouds.all + "." + " ");
      $('.showWeather').append("The pressure is " + city + " at " + response.main.pressure + "." + " ");
      $('.showWeather').append("The humidity in " + city + " at " + response.main.humidity + "." + " ");
      console.log(JSON.stringify(response));
    });
  });
});
