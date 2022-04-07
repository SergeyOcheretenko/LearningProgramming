'use strict';

const res1 = [7, 10, 1, 5, 2]
    .filter(x => x > 4)
    .map(x => x * 2)
    .reduce((acc, val) => acc + val);

console.log(res1);