/* 
Example 1 - Basic operations with an array

1. Create an array `genres` with elements "Jazz" and "Blues".
2. Add "Rock and Roll" to the end.
3. Print the first element of the array to the console.
4. Print the last element of the array to the console. The code should work for an array
   random length.
5. Remove the first element and print it to the console.
6. Insert "Country" and "Reggae" at the beginning of the array.

*/

const genres = ["Jazz", "Blues"];
console.log(genres);

genres.push("Rock and Roll");
console.log(genres);

console.log(genres[0]);

const lastIndex = genres.length - 1;
console.log(genres[lastIndex]);

// const firstElement = genres.shift();
// console.log(genres);
// console.log(firstElement);

// genres.unshift("Country", "Reggae");
// console.log(genres);

genres.splice(0, 1, "Country", "Reggae");
console.log(genres);
