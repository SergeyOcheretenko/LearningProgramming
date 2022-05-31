'use strict';

const text = (str = '') => ({
    line: newLine => text(str + '\n' + newLine),
    toString: () => str
});

// Usage

const txt = text('line1')
    .line('line2')
    .line('line3')
    .line('line4');

console.log(txt.toString());