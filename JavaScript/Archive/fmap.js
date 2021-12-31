'use strict';

const sequence = (start = 0, step = 1) => {
	let cache = [start];
	return function(){
		let len = cache.length;
		cache.push(cache[len - 1] + step);
		return cache[len - 1];
	};
}

function fmap(fn, generator){
	if (generator.length === 0){
		return () => fn(generator());
	} else{
		return (...args) => fn(generator.apply(this, args))
	}
}

const square = x => x ** 2;
const add = (a, b) => a + b;

const gen = sequence(1, 1);

const squareGen = fmap(square, gen);

console.log(squareGen()); // 1
console.log(squareGen()); // 4
console.log(squareGen()); // 9

const squareAdd = fmap(square, add);
console.log(squareAdd(1, 2)); // 9 = (1 + 2) ^ 2
console.log(squareAdd(3, 5)); // 64 = (3 + ) ^ 2
