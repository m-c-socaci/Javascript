/*
Make the code refactoring using arrow functions.

*/

function each(array, callback) {
  const newArr = [];
  for (const el of array) {
    newArr.push(callback(el));
  }
  return newArr;
}

console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value * 2;
  })
);
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value - 10;
  })
);
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return Math.sqrt(value);
  })
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.ceil(value);
  })
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.floor(value);
  })
);

console.log(each([64, 49, 36, 25, 16], (x) => x * 2));
console.log(each([64, 49, 36, 25, 16], (x) => x - 10));
console.log(each([64, 49, 36, 25, 16], (x) => Math.sqrt(x)));
console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], (x) => Math.ceil(x)));
console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], (x) => Math.floor(x)));
