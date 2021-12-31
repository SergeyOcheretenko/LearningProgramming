function curry(fn){
  return function curried(...args){
    if(args.length >= fn.length){
      return fn.apply(null, args);
    }
    else{
      return (...args2) => {
        return curried.apply(null, args.concat(args2));
      }
    }
  }
}

const adder = (a, b, c) => a + b + c;

const curryAdder = curry(adder);

console.log(curryAdder(10, 2)(5));
console.log(curryAdder(10)(2, 5));
console.log(curryAdder(10)(2)(5));
console.log(curryAdder(10, 2, 5));
