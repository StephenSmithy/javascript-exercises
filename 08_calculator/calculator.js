const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(inputArray) {
	return inputArray.reduce((total, input) => total + input, 0);
};

const multiply = function(inputArray) {
  return inputArray.reduce((total, input) => total * input, 1);
};

const power = function(a, b) {
  let result = a;
	for (let i = 1; i < b; i ++) {
    result = result * a;
  }
  return result;
};

const factorial = function(a) {
 let result = 1 
 for (let i = 0; i < a; i++) {
  result = result * (a - i);
 }
 return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
