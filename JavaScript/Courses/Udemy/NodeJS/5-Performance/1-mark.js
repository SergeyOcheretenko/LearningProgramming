'use strict';

function slow() {
    performance.mark('Start');
    const arr = [];
    for (let i = 0; i < 100000000; i++) {
        arr.push(i * i);
    }
    performance.mark('End');
    performance.measure('slow', 'Start', 'End');
    console.log(performance.getEntriesByName('slow'));
}

slow();