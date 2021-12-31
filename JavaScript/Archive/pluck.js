'use strict';

function pluck(array, keyName){
	let resultArray = [];
	for(const object of array){
		if(keyName in object){
			resultArray.push(object[keyName]);
		}
	}
	return resultArray;
}

let characters = [
	{'name': 'barney', 'age': 36},
	{'name': 'fred', 'age': 40},
	{'no_name': 'anonymous', 'age': 'anonymous'},
	{'name': 'chack', 'age': 25}
];

console.log(pluck(characters, 'name')); // ['barney', 'fred', 'chack']
