'use strict';

const text = (str = '', o = {
    line: newLine => (str += '\n' + newLine, o),
    toString: () => str
}) => o;

// Usage

const txt = text('line1')
    .line('line2')
    .line('line3')
    .line('line4');

console.log(txt.toString());