'use strict';

const https = require('https');

const start = performance.now();

for (let i = 0; i < 50; i++) {
    https.get('https://kpi.ua', (res) => {
        res.on('data', () => { });
        res.on('end', () => {
            console.log(performance.now() - start);
        });
    });
}