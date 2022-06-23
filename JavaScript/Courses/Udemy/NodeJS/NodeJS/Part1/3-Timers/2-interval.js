'use strict';

const intervalId = setInterval(() => {
    console.log(performance.now());
}, 1000);

setTimeout(() => {
    clearInterval(intervalId);
    console.log('Clear interval');
}, 5000);