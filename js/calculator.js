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
