'use strict';

const sum = (start, end) => {
	if (start > end){
		return NaN;
	}
	if (start === end){
		return start;
	} else{
		return start + sum(start + 1, end);
	}
}

console.log(sum(1, 4)); // 1 + 2 + 3 + 4 === 10
console.log(sum(2, 5)); // 2 + 3 + 4 + 5 === 14
console.log(sum(9, 9)); // 9
console.log(sum(5, 3)); // NaN
