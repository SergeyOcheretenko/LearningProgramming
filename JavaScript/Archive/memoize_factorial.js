// memoized factorial
const fact = (() => {
  let cache = {0: 1, 1: 1};
  const fn = (num) => {
    if(!cache[num]){
      cache[num] = num * fn(num - 1);
    }
    return cache[num];
  }
  return fn;
})()

for(let i = 1; i <= 25; i++){
  console.log(fact(i));
}
