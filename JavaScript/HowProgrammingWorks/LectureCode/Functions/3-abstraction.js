'use strict';

const power = Math.pow;
const square  = x => power(x, 2);
const cube = x => power(x, 3);

console.log(power(10, 2)); // 100
console.log(square(10));   // 100

console.log(power(4, 3));  // 64
console.log(cube(4));      // 64
