'use strict';

const MAX_VALUE = 10;
const INTERVAL = 1000;
let count = 0;
let timer = null;

const event = () => {
  if (count === MAX_VALUE) {
    clearInterval(timer);
    return;
  }
  const date = new Date();
  console.dir({ count, date });
  count++;
};

timer = setInterval(event, INTERVAL);
