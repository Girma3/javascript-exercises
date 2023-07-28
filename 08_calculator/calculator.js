const add = function(a,b) {
  let result = a + b;
	return result
};

const subtract = function(c,d) {
  let diffrence = c - d
  return diffrence
	
};

const sum = function(array) {
  let initialValue = 0
 let result =  array.reduce((total,numbers)=>total+ numbers,initialValue);
	return result
};


const multiply = function(array) {
let result = array.reduce((total,numbers)=>total * numbers);
return result
};

const power = function(base,exponent) {
	let powerNumber = 1
  for(i = 0;i < exponent;i++){
    powerNumber = powerNumber * base
  }
  return powerNumber
};


const factorial = function(num) {
	a = 1;//to return 1 for  0 factorial
  
  // the loop  start from 1
  for(let i = 1; i <= num;i++){
      
      a *= i
   }
return a
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
