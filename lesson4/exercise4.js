/*

Example 8 - Time Formatting

Write a function `formatTime(minutes)` that will translate the value of `minutes`
(number of minutes) to a string in hour and minute format `HH:MM`.


*/

// TODO: ca exercitiu, creati voi functia padStart

function formatTime(minutes) {
  const hours = String(Math.floor(minutes / 60));
  const mins = String(minutes % 60);

  return `${hours.padStart(2, "0")}:${mins.padStart(2, "0")}`;
}

console.log(formatTime(70)); // "01:10"
console.log(formatTime(450)); // "07:30"
console.log(formatTime(1441)); // "24:01"
