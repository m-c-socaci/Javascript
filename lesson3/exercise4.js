/*

Example 6 - Arrays and Strings

Write a script that "unwraps" a string (reverse letter order) and prints
it to the console.

*/

// const string = "Welcome to the future";
// let stringInverse = "";

// for (let i = string.length - 1; i >= 0; i--) {
//   stringInverse += string[i];
// }

// console.log(stringInverse);

const string = "Welcome to the future";

const stringSplitted = string.split("");

const stringSplittedReversed = stringSplitted.reverse();

const stringReversed = stringSplittedReversed.join("");

console.log(stringReversed);

const stringReversed2 = string.split("").reverse().join("");
console.log(stringReversed2);
