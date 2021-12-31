'use strict';

const partial = (fn, ...args) => fn.bind(this, ...args);

const add = (a, b) => a + b;
const mult = (a, b, c, d) => a * b * c * d;

const add2 = partial(add, 2);
const mult23 = partial(mult, 2, 3);

console.log(add2(4)); // 6 = 2 + 4
console.log(add2(13)); // 15 = 2 + 13

console.log(mult23(1, 4)); // 24 = 2 * 3 * 1 * 4
console.log(mult23(4, 5)); // 120 = 2 * 3 * 4 * 5
