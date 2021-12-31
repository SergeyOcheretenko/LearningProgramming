const fib = (function(){
  let cache = {1: 1, 2: 1};
  function f(num){
    if(cache[num]){
      return cache[num];
    }
    cache[num] = f(num - 1) + f(num - 2);
    return cache[num];
  }
  return f;
})();


for(let i = 1; i <= 60; i++){
  console.log(fib(i));
};
