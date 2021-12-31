'use strict';

const unique = array => {
	let result = [];
	for (const elem of array) {
		if (!(result.includes(elem))){
			result.push(elem);
		}
	}
	return result;
};

const result_numbers = unique([2, 1, 1, 3, 2]);
console.log(result_numbers); // [2, 1, 3]

const result_strings = unique(['top', 'bottom', 'top', 'left']);
console.log(result_strings); // ['top', 'bottom', 'left']
