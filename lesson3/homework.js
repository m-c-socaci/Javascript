/*
Example 7 - Sorting an array with a loop 

Write a script to sort an array of strings alphabetically by the first letter 
of an element.
*/

const langs = ["python", "javascript", "c++", "haskel", "php", "ruby"];

for (let j = 0; j < langs.length - 1; j++) {
  for (let i = j + 1; i < langs.length; i++) {
    if (langs[j] > langs[i]) {
      let aux = langs[i];
      langs[i] = langs[j];
      langs[j] = aux;
    }
  }
}

console.log(langs);

/*

Example 8 - Search for an element

Write a script to find the smallest number in an array. The code should work 
for any array of numbers. Use a loop to solve problems.

*/

const numbers = [99, 17, 94, 1, 23, 37];
