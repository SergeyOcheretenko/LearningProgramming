'use strict';

const sequence = (start = 0, step = 1) => {
	let cache = [start];
	return function(){
		let len = cache.length;
		cache.push(cache[len - 1] + step);
		return cache[len - 1];
	};
}

const generator = sequence(10, 3);
const generator2 = sequence(7, 1);

console.log(generator()); // 10
console.log(generator()); // 13
console.log(generator2()); // 7
console.log(generator()); // 16
console.log(generator2()); // 8
console.log(generator()); // 19
