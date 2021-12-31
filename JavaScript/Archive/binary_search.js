'use strict';

function binary_search(array, number){
	let left = 0;
	let right = array.length - 1;
	let count = 1;
	let middle = Math.round((left + right) / 2);
	while(array[middle] !== number){
		count++;
		if(array[middle] < number){
			left = middle;
		} else{
			right = middle;
		}
		middle = Math.round((left + right) / 2);
	}
	return count;
}

console.log(binary_search([1, 2, 3, 4, 5, 6, 7], 2)); // 3 (4, 3, 2)
console.log(binary_search([2, 4, 5, 7, 9, 13, 17, 22, 28], 28)); // 4 (9, 17, 22, 28)