'use strict';

console.log('Command line parameters:');
process.argv.forEach((value, index) => {
    console.log(`${index}: ${value}`);
});