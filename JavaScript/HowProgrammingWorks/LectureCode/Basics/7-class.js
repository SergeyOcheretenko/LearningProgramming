const adder = (initial = 0) => ({
  value: initial,
  cash: [initial],
  add(value) {
    this.value += value;
    this.cash.push(value);
    return this;
  }
});

class Adder {
  constructor(initial = 0) {
    this.value = initial;
    this.cash = [initial];
  }

  add(value) {
    this.value += value;
    this.cash.push(value);
    return this;
  }
}

{
  const { value, cash } = adder(5).add(-11).add(8);
  console.dir({ value, cash }); // { value: 2, cash: [ 5, -11, 8 ] }
}

{
  const { value, cash } = new Adder(5).add(-11).add(8);
  console.dir({ value, cash }); // { value: 2, cash: [ 5, -11, 8 ] }
}
