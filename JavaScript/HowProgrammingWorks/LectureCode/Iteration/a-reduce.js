'use strict';

let count = 0;
const arr = [7, 10, 1, 5, 2];
const sum = (acc, val) => (count++, console.dir({ count, acc, val }), acc + val);
const res = arr.reduce(sum, 0);
console.log({ res, count });