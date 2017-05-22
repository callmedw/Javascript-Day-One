var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey)
      .then(function(response) {
        $('.showWeather').text("The percentage of cloud coverage in " + city + " is " + response.clouds.all + "%" + " ");
        $('.showWeather').append("The pressure in " + city + " is " + response.main.pressure + "." + " ");
        $('.showWeather').append("The humidity in " + city + " is " + response.main.humidity + "%" + " ");
      })
      .fail(function(error) {
        $('.showWeather').text(error.responseJSON.message);
      });
  });
});
