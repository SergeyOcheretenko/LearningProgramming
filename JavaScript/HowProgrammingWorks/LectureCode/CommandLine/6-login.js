'use strict';

const write = s => process.stdout.write(s);

console.clear();

console.log('\x1b[9;10H')

setTimeout(() => {
    console.log('\n\n');
    process.exit(0);
}, 10000);

console.log(`
                        ┌──────────────────────────────────┐
                        │ Login:                           │
                        └──────────────────────────────────┘
`);

write('\x1b[12H\x1b[33C');