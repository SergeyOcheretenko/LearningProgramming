console.log([1, 7, 8, 10, 4, -4, -14, 25, 16, 121].reduce((acc, elem) => elem % 2 === 0 ? elem > 0 ? acc + elem ** 0.5 : acc : acc, 0));
