'use strict';

const start = performance.now();

setTimeout(() => {
    console.log(performance.now() - start);
    console.log('1 second');
}, 1000);

function func(arg) {
    console.log(`Argument: ${arg}`);
}

setTimeout(func, 1500, 'test argument');

const timerId = setTimeout(() => {
    console.log('Timer for clearing');
}, 5000);

setTimeout(() => {
    clearTimeout(timerId);
    console.log('Clear timeout');
}, 1000);