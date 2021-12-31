'use strict';

const sequence = (start = 0, step = 1) => {
	let cache = [start];
	return function(){
		let len = cache.length;
		cache.push(cache[len - 1] + step);
		return cache[len - 1];
	};
}

const take = (fn, n) => {
	let array = [];
	for(let i = 0; i < n; i++){
		array.push(fn());
	}
	return array;
}

const generator = sequence(10, 3);
const generator2 = sequence(7, 1);

console.log(generator()); // 10
console.log(generator()); // 13
console.log(generator2()); // 7
console.log(generator()); // 16
console.log(generator2()); // 8
console.log(generator()); // 19

const new_generator = sequence(0, 2);
console.log(take(new_generator, 5)); // [0, 2, 4, 6, 8]
console.log(take(generator2, 4)); // [9, 10, 11, 12]
