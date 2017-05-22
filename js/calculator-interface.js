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
