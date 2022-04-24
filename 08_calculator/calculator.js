const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	totalSum = array.reduce((total, arrayValue) => {
    return total + arrayValue;
  }, 0); // total is assigned the initial value of 0 for the first iteration
  return totalSum;
};

const multiply = function(array) {
  totalProduct = array.reduce((total, arrayValue) => {
    return total * arrayValue;
  }, 1); // total is assigned the initial value of 1 for the first iteration
  return totalProduct;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(num) {
	let result = num;
  if (num === 0) {
    return 1;
  } else {
    for(i = num - 1; i >= 1; i--) {
      result = result * i;
    }
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
