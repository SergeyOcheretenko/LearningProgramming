'use strict';

const { Worker } = require('worker_threads');

const compute = (array) => {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./module/worker.js', {
            workerData: { array }
        })

        worker.on('message', (msg) => {
            console.log(worker.threadId);
            resolve(msg);
        });

        worker.on('error', (err) => {
            reject(err);
        });

        worker.on('exit', () => {
            console.log('Finish worker');
        });
    });
};

const main = async () => {
    try {
        performance.mark('Start');

        const result = await Promise.all([
            compute([25, 20, 19, 48, 30, 50]),
            compute([25, 20, 19, 48, 30, 50]),
            compute([25, 20, 19, 48, 30, 50]),
            compute([25, 20, 19, 48, 30, 50])
        ]);
        console.log(result);

        performance.mark('End');
        performance.measure('main', 'Start', 'End');
        console.log(performance.getEntriesByName('main').pop());
    } catch (err) {
        console.log(err.message);
    }
};

setTimeout(() => {
    console.log('Thread is not blocked');
}, 500);

main();