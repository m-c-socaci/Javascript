/*
Example 2 - Arrays and Strings

Write a script to calculate the area of a rectangle with sides, whichvalues
values are stored in the `values` variable as a string. Values guaranteed
separated by a space.

*/

const values = "8 11.1";

const numbers = values.split(" ");

const side1 = Number.parseFloat(numbers[0]);
const side2 = Number.parseFloat(numbers[1]);

const area = side1 * side2;

console.log(area);
