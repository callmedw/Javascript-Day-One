var Calculator = require('./../js/calculator.js').calculatorModule;

$(document).ready(function() {
	$("form#add").submit(function(event) {
		event.preventDefault();
	  var number1 = parseInt($("#add1").val());
	  var number2 = parseInt($("#add2").val());
		var result = add(number1, number2);
	  $("#output").text(result);
	});
	$("form#subtract").submit(function(event) {
		event.preventDefault();
	  var number1 = parseInt($("#subtract1").val());
	  var number2 = parseInt($("#subtract2").val());
		var result = subtract(number1, number2);
	  $("#output2").text(result);
	});
	$("form#multiply").submit(function(event) {
		event.preventDefault();
	  var number1 = parseInt($("#multiply1").val());
	  var number2 = parseInt($("#multiply2").val());
		var result = multiply(number1, number2);
	  $("#output3").text(result);
	});
	$("form#divide").submit(function(event) {
		event.preventDefault();
	  var number1 = parseInt($("#divide1").val());
	  var number2 = parseInt($("#divide2").val());
		var result = divide(number1, number2);
	  $("#output4").text(result);
	});
});

var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});

$(document).ready(function(){
  $('#time').text(moment());
});

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
