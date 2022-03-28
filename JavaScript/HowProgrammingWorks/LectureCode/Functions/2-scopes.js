'use strict';

const cities = ['Athens', 'Roma', 'London', 'Beijing', 'Kiev', 'Riga'];
const f = s => s.length;

function f1() {
    const cities = ['Athens', 'Roma'];
    const f = s => s.toUpperCase();
    console.dir({ cities });
    console.dir(cities.map(f)); // f -> toUpperCase

    {
        const f = s => s.toLowerCase();
        console.dir({ cities });
        console.dir(cities.map(f)); // f -> toLowerCase
    }

    {
        const cities = ['London', 'Beijing', 'Kiev'];
        console.dir({ cities });
        console.dir(cities.map(f)); // f -> toUpperCase
    }
}

f1();

console.dir({ cities }); 
console.dir(cities.map(f)); // f -> length
