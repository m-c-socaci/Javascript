/*
## Example 3 - Area of a rectangle

Write a function `getRectArea(dimensions)` to calculate the area of a rectangle
with sides, the values of which will be passed to the `dimensions` parameter as a string.
Values are guaranteed to be separated by a space.


*/

function getRectArea(dimensions) {}

console.log(getRectArea("8 11"));

/*

Example 4 - Element logging

Write a function `logItems(items)` that takes an array and uses a `for` loop
that for each element of the array will print a message to the console
in the format `<item number> - <item value>`. The numbering
of elements should start with `1`.

For example, for the first element of the array `['Mango', 'Poly', 'Ajax']` with index `0`
will print `1 - Mango` and for index 2 will print `3 - Ajax`.

*/

function logItems(items) {}

logItems(["Mango", "Poly", "Ajax"]);
logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

/*

Example 5 - Contact logging

Write a function `printContactsInfo(names, phones)` that prints  to the console the name
and the user's phone number. The `names` and `phones` parameters will be passed
strings of names and phone numbers separated by commas. Sequence number of names and
phone numbers in the rows indicate a match. Number of names and phones
guaranteed to be the same.

*/

function printContactsInfo(names, phones) {}

printContactsInfo(
  "Jacob,William,Solomon,Artemis",
  "89001234567,89001112233,890055566377,890055566300"
);

/*

Example 6 - Finding the largest element

Write a function `findLargestNumber(numbers)` that looks for the largest number in
array.

*/

function findLargestNumber(numbers) {}

console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

/*

Example 9 -Collection of courses (includes, indexOf, push, etc.)

Write functions to work with the `courses` collection of training courses:

- `addCourse(name)` - adds a course to the end of the collection
- `removeCourse(name)` - removes a course from the collection
- `updateCourse(oldName, newName)` - changes the name to a new one

*/

const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

addCourse("Express");
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
addCourse("CSS"); // ' You already have this course'

removeCourse("React");
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
removeCourse("Vue"); // 'Course with this name was not found'

updateCourse("Express", "NestJS");
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
