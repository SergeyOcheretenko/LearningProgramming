'use strict';

const triangle = (a, b, c) => {
	const p = (a + b + c) / 2;
	const result = (p * (p - a) * (p - b) * (p - c)) ** 0.5;
	return Number(result.toFixed(2));
};

console.log(triangle(3, 4, 5)); // 6
console.log(triangle(5, 6, 8)); // 11.98
