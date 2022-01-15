class MyClass {
  value = 10;
  method1() { return this.value };
  method2 = () => this.value;
  method3 = function() { return this.value };
}

const new_class = new MyClass();

console.log( new_class.method1() ); // 10
console.log( new_class.method2() ); // 10
console.log( new_class.method3() ); // 10

function return_value1() {
  return this.value;
};

const return_value2 = () => this.value;

const return_value3 = function() {
  return this.value;
};

console.log();
console.log(return_value1.apply(new_class)); // 10
console.log(return_value2.apply(new_class)); // undefined
console.log(return_value3.apply(new_class)); // 10
