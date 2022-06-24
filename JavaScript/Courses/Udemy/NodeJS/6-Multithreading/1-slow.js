'use strict';

const factorial = require('./module/factorial.js');

const compute = (array) => {
    const arr = [];
    for (let i = 0; i < 10000000; i++) {
        arr.push(i * i);
    }
    return array.map(elem => factorial(elem));
};

const main = () => {
    performance.mark('Start');

    const result = [
        compute([25, 20, 19, 48, 30, 50]),
        compute([25, 20, 19, 48, 30, 50]),
        compute([25, 20, 19, 48, 30, 50]),
        compute([25, 20, 19, 48, 30, 50])
    ];
    console.log(result);

    performance.mark('End');
    performance.measure('main', 'Start', 'End');
    console.log(performance.getEntriesByName('main').pop());
};

main();