function SquareRoot(array) {
  const result = array.map(elem => {
    const root = Math.sqrt(elem);
    return Number.isInteger(root) ? root : elem ** 2;
  });
  
  return result;  
}

console.log(SquareRoot([4, 9, 3, 2, 49, 6]));
// [ 2, 3, 9, 4, 7, 36 ]
