// f = (c * 1.8) + 32
// c = (f - 32) / 1.8

const toFahrenheit = (celsius) => {
  const fahrenheit = celsius * 1.8 + 32;
  return Number(fahrenheit.toFixed(2));
};

const toCelsius = (fahrenheit) => {
  const celsius = (fahrenheit - 32) / 1.8;
  return Number(celsius.toFixed(2));
};

console.log(`1 degree Fahrenheit is ${toCelsius(1)} degree Fahrenheit`);
console.log(`1 degree Celsius is ${toFahrenheit(1)} degree Fahrenheit`);

// 1 degree Fahrenheit is -17.22 degree Fahrenheit
// 1 degree Celsius is 33.8 degree Fahrenheit
