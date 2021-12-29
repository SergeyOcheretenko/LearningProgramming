'use strict';

console.log(Math.random()); // between 0 and 1, type -> float

const generateRandomInt = (min, max) => Math.round(Math.random() * (max - min) + min);

console.log(generateRandomInt(3, 10)); // between 3 and 10, type -> int

