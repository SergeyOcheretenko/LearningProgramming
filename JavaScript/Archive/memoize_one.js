// memoize for one argument
const memoize = (fn) => {
  let cache = {};
  return (num) => {
    if(!cache[num]){
      cache[num] = fn(num);
      console.log('Calculated');
    }
    else{
      console.log('Returned from cache');
    }
    return cache[num];
  }
}
