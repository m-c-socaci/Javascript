/*

Example 2 - Smaller of numbers

Write a function `min(a,b)` that returns the smaller of the numbers `a` and `b`.

*/

function min(a, b) {
  return a < b ? a : b;
}

console.log(min(5, 2));
console.log(min(2, 5)); // 2
console.log(min(3, -1)); // -1
console.log(min(1, 1)); // 1
