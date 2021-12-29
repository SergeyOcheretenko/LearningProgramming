'use strict';

let a = 5;
let b = 11;

// Variant 1
const t = a;
a = b;
b = t;

// Variant 2
a = b - a;
b = b - a;
a = a + b;

// Variant 3
;[a, b] = [b, a];
