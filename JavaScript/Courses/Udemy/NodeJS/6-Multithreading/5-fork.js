'use strict';

const { fork } = require('child_process');

const forkProcess = fork('./module/fork.js');

forkProcess.on('message', (msg) => {
    console.log(`Message: ${msg}`);
});

forkProcess.on('close', (code) => {
    console.log(`Exit code: ${code}`);
});

forkProcess.send('Ping');
forkProcess.send('disconnect');