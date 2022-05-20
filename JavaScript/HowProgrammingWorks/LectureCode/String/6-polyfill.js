'use strict';

const name = 'Marcus Aurelius';

console.log(`name = ${name}`);

// Polyfill

if (!String.prototype.includes) {
    String.prototype.includes = function(s) {
        return this.indexOf(s) > -1;
    };
}

console.log(name.includes('Mar'));