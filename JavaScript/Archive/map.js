'use strict';

const square = x => x ** 2;
const sqrt = x => x ** 0.5; 

function map(fn, array){
	let result = [];
	for(const elem of array){
		result.push(fn(elem));
	}
	return result;
}

const arr = [1, 2, 3, 4, 5];

console.log(map(square, arr)); // [1, 4, 9, 16, 25]
console.log(arr); // [1, 2, 3, 4, 5]
console.log(map(sqrt, arr)); // [1, 1.41421, 1.73205, 2, 2.23606]
