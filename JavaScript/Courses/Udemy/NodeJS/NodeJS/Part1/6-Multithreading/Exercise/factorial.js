'use strict';

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

function compute({ array }) {
    const arr = [];
    for (let i = 0; i < 100000000; i++) {
        arr.push(i * i);
    }
    return array.map(elem => factorial(elem));
};

module.exports = { factorial, compute };