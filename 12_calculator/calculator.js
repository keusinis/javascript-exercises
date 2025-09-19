const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((accumulator, current) => accumulator + current, 0);
};

const multiply = function(arr) {
  return arr.reduce((accumulator, current) => accumulator *= current, 1);
};

const power = function(num1, num2) {
  // let ans = 1;
  // for(let i = 0; i < num2; i++) {
  //   ans *= num1;
  // }
	// return ans;

  return num1 ** num2;
};

const factorial = function(num) {
  // let fact = 1;
  // for(let i = 2; i <= num; i++) {
  //   fact *= i;
  // }
  // return fact;

  if (num === 0)
    return 1;
  if (num === 2)
    return num;
	return num * factorial(--num);
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
