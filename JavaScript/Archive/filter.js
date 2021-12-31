'use strict';

function filter(array, fn){
	let resultArray = [];
	for(const elem of array){
		if(fn(elem) == true){
			resultArray.push(elem);
		}
	}
	return resultArray;
}

const isEven = x => x % 2 == 0;
const isPositive = x => x > 0;
const isInt = x => x === Math.round(x);

const array = [-1, 5, 5.5, 0, 6, 10, 7.99, -3.56];

console.log(filter(array, isEven)); // [0, 6, 10]
console.log(filter(array, isPositive)); // [5, 5.5, 6, 10, 7.99]
console.log(filter(array, isInt)); // [-1, 5, 0, 6, 10]
