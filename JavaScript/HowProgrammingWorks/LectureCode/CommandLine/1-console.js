'use strict';

const object = {
    name: 'Marcus Aurelius',
    city: 'Roma',
    born: 121,
    children: [
        {
            name: 'Vibia Aurelia Sabina',
            city: 'Sirmium',
            born: 170
        },
        {
            name: 'Annia Cornificia Faustina Minor',
            city: 'Roma',
            born: 160
        }
    ]
};

Object.defineProperty(object, 'childCount', {
    enumerable: false,
    writable: false,
    value: 13
});

console.dir({ object });
console.dir({ object }, { showHidden: true, depth: 20, colors: true });

console.error('Error');

console.time('Loop time');
const arr = [];
for (let i = 0; i < 10000; i++) {
    arr.push(i);
}
console.timeEnd('Loop time');

console.assert(42 === 42, 'do nothing');
console.assert(42 === '42', "%d doesn't equal '%s'", 42, '42');