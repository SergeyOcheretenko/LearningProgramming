'use strict';

const convert = (km) => parseFloat((km * 0.621371).toFixed(3));

const result = convert(3);

console.log(result); // 1.864
console.log(typeof result); // number
