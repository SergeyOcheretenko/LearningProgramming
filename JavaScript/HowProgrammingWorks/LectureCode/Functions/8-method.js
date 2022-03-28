'use strict';

const powName = 'pow';

const obj = {
    fn1: function inc(a) {
        return ++a;
    },
    sum: function(a, b) {
        return a + b;
    },
    inc(a) {
        return ++a;
    },
    max: (a, b) => {
        return a > b ? a : b;
    },
    min: (a, b) => (a < b ? a : b),
    dec: a => --a,
    [powName](a, b) {
        return Math.pow(a, b);
    },
};

console.log('obj.fn1.name = ' + obj.fn1.name);
console.log('obj.sum.name = ' + obj.sum.name);
console.log('obj.inc.name = ' + obj.inc.name);
console.log('obj.max.name = ' + obj.max.name);
console.log('obj.min.name = ' + obj.min.name);
console.log('obj.dec.name = ' + obj.dec.name);

console.log('obj.fn1(5) = ' + obj.fn1(5));
console.log('obj.sum(1, 3) = ' + obj.sum(1, 3));
console.log('obj.max(8, 6) = ' + obj.max(8, 6));

console.log('obj.pow(8, 6) = ' + obj.pow(8, 6));
console.log('obj[\'pow\'](8, 6) = ' + obj[powName](8, 6));
