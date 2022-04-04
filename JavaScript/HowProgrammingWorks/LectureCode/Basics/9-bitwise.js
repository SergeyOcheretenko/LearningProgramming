'use strict';

const a = 9;
const b = 14;
const c = -9;

const aBinary = a.toString(2); // 1001
const bBinary = b.toString(2); // 1110
const cBinary = c.toString(2); // -1001

console.log(a + 'to base 2:' + aBinary);
console.log(b + 'to base 2:' + bBinary);

console.log('Bitwise operators');

console.log(a, '&', b, '=', (a & b)); // 8
console.log(aBinary, '&', bBinary,
    '=', (a & b).toString(2)); // 1000

console.log(a, '|', b, '=', (a | b)); // 15
console.log(aBinary, '|', bBinary, 
    '=', (a | b).toString(2)); // 1111