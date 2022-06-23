'use strict';

const { fork } = require('child_process');
const { Worker } = require('worker_threads');
const perf_hooks = require('perf_hooks');

const performanceObserver = new perf_hooks.PerformanceObserver((items, observer) => {
    console.log(items.getEntries());
});

performanceObserver.observe({ entryTypes: ['measure'] });

function workerFunction(array) {
    return new Promise((resolve) => {
        performance.mark('StartWorker');
        const worker = new Worker('./worker.js', {
            workerData: { array }
        })

        worker.on('message', (msg) => {
            performance.mark('EndWorker');
            performance.measure('worker', 'StartWorker', 'EndWorker');
            resolve(msg);
        });
    });
};

function forkFunction (array) {
    return new Promise((resolve) => {
        performance.mark('StartFork');
        const forkProcess = fork('./fork.js');
        forkProcess.send({array});
        forkProcess.on('message', (msg) => {
            performance.mark('EndFork');
            performance.measure('fork', 'StartFork', 'EndFork');
            resolve(msg);
        });
    });
};

const main = async () => {
    await workerFunction([25, 19, 48, 30]);
    await forkFunction([25, 19, 48, 30]);
};

main();