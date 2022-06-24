'use strict';

console.log('Before');

setImmediate(() => {
    console.log('After all (immediate)');
});

console.log('After');