const convertToCelsius = function(fahrenheit) {
 //to convert fahrenheit to celsius 
  
  celsius = (fahrenheit - 32) * 5/9;

//round it to one decimal to be more readable
  result = Math.round(celsius * 10) / 10;

return result
};

const convertToFahrenheit = function(celsius) {
  //to convert celsius to fahrenheit
  fahrenheit = celsius * 9/5 + 32;

  //round it to one decimal to be more readable
  result =Math.round(fahrenheit * 10) / 10

  return result
 };

//console.log(convertToFahrenheit(32))
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
