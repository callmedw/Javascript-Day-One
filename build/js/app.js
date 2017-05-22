(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Calculator(skinName) {
  this.skin = skinName;
}

Calculator.prototype.add = function(numner1, number2) {
  return number1 + number2;
}




var add = function(number1, number2) {
	return number1 + number2;
};
var subtract = function(number1, number2) {
  return number1 - number2;
};
var multiply = function(number1, number2) {
  return number1 * number2;
};
var divide = function(number1, number2) {
  return number1 / number2;
};

exports.calculatorModule = Calculator;

},{}],2:[function(require,module,exports){
function Calculator(skinName) {
  this.skin = skinName;
}

Calculator.prototype.pingPong = function(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else  {
      output.push(i);
    }
  }
  return output;
};

exports.calculatorModule = Calculator;

},{}],3:[function(require,module,exports){
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

},{"./../js/calculator.js":1,"./../js/pingpong.js":2}]},{},[3]);
