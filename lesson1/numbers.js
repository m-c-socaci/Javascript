let a = 2;
let b = 4;

// Arithmetic operators
const sum = a + b;
console.log("--------- a=2 b=4 --------------");
console.log("a + b =", sum);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);

let age = 25;
age += 1; // age = age + 1
console.log("age", ++age);

// Operatori de comparare
console.log("a < b", a < b);
console.log("a > b", a > b);

console.log("--------- a=4 b=4 --------------");

a = 4;
b = 4;
console.log("a <= b", a <= b);
console.log("a >= b", a >= b);

a = "4";
b = 4;

console.log("a == b", a == b);
console.log("a != b", a != b);

console.log("a === b", a === b);
console.log("a !== b", a !== b);

// Parsare

const value = "123.5asdas23";
console.log("--------- Number --------------");

console.log("Number", Number(value));
console.log("parseInt", Number.parseInt(value));
console.log("parseFloat", Number.parseFloat(value));

// Math

const value2 = 123.1;
console.log("--------- Math --------------");

console.log("round", Math.round(value2));
console.log("floor", Math.floor(value2));
console.log("ceil", Math.ceil(value2));

console.log("max", Math.max(1, 5, 2, 10, 4));
console.log("min", Math.min(1, 5, 2, 10, 4));

console.log("pow", Math.pow(3, 2));

console.log("random", Math.random());

const min = 22;
const max = 24;

const myRandom = Math.random() * (max - min) + min;

console.log("myRandom", myRandom);

// Operatori logici

const age2 = 50;

console.log(age2 > 10 && age2 < 30); // true && false -> false
console.log(age2 > 10 && age2 < 120); // true && true -> true

console.log(age2 < 100 || age2 > 60); // true || false -> true

console.log(!true); // false
