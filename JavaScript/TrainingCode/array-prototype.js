const array = [1, 3, 7, -4];

Array.prototype.square = function() {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i] ** 2;
  }
  return this;
}

const squared = array.square();

console.log(squared); // [1, 9, 49, 16]
