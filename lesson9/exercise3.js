/*

Create a `calculator` object with three methods:

- `read(a, b)`- takes two values and stores them as object properties.
- `add()` - returns the sum of the stored values.
- `mult()` - multiplies the stored values and returns the result.

*/

const calculator = {
  a: null,
  b: null,
  read(a, b) {
    this.a = a;
    this.b = b;
  },
  add() {
    if (this.a === null || this.b === null) {
      return null;
    }

    return this.a + this.b;
  },
  mult() {
    if (this.a === null || this.b === null) {
      return null;
    }

    return this.a * this.b;
  },
};

const result1 = calculator.add();
console.log(result1);

const a = Number.parseFloat(prompt("First number:"));
const b = Number.parseFloat(prompt("Second number:"));

calculator.read(a, b);

console.log(calculator.add());
console.log(calculator.mult());
