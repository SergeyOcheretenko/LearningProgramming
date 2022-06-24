'use strict';

const perf_hooks = require('perf_hooks');

test = perf_hooks.performance.timerify(test);

const performanceObserver = new perf_hooks.PerformanceObserver((items, observer) => {
    console.log(items.getEntries());
    const entry = items.getEntriesByName('slow').pop();
    console.log(`${entry.name}: ${entry.duration}`);
    observer.disconnect();
});

performanceObserver.observe({ entryTypes: ['measure', 'function'] });

function test() {
    const arr = [];
    for (let i = 0; i < 10000000; i++) {
        arr.push(i * i);
    }
}

function slow() {
    performance.mark('Start');
    const arr = [];
    for (let i = 0; i < 10000000; i++) {
        arr.push(i * i);
    }
    performance.mark('End');
    performance.measure('slow', 'Start', 'End');
}

slow();
test();