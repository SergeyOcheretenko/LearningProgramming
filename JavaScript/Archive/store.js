'use strict';

const store = number => {
	return () => number;
};

const read = store(5);
const value = read();
console.log(value); // 5
