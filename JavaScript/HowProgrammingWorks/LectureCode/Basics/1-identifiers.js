'use strict';

const MAX_VALUE = 10;
const INTERVAL = 1000;
let count = 0;
let timer = null;

const event = () => {
  if (count === MAX_VALUE) {
    console.log('THE END');
    clearInterval(timer);
    return;
  }
  console.dir({ count, date: new Date() });
  count++;
};

console.log('BEGIN');
timer = setInterval(event, INTERVAL);
