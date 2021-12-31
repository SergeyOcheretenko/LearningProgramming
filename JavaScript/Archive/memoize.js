// memoize for some arguments
const memoize = (fn) => {
  let cache = {};
  return (...args) => {
    let array = args;
    let n = args.join('|');
    if (n in cache) {
      console.log('Fetching from cache');
      return cache[n];
    }
    else {
      console.log('Calculating result');
      let result = fn(...array);
      cache[n] = result;
      return result;
    }
  }
}

const adder = (x, y) => {
  return x + y;
}

const memoizeAdder = memoize(adder);

console.log();
console.log(memoizeAdder(10, 11));
console.log(memoizeAdder(1, 10));
console.log(memoizeAdder(10, 11));
console.log(memoizeAdder(10, 11));
console.log(memoizeAdder(1, 10));
console.log(memoizeAdder(10, 1));

const pow5 = (x) => {
  return x ** 5;
}
const memoizePow5 = memoize(pow5);
console.log();
console.log(memoizePow5(10));
console.log(memoizePow5(5));
console.log(memoizePow5(4));
console.log(memoizePow5(5));
