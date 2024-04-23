console.log(new Date());

console.log(new Date(0));

console.log(new Date(1624021654154));

console.log(new Date("2030-03-16"));

console.log(new Date("2030-03-16 14:25:00"));

console.log("ISO: ", new Date("2030-03-16T14:25:00Z"));

console.log(new Date(2023, 2, 16, 14, 25, 0, 0));

console.log("----------------getters-------------");

const date = new Date();

console.log(date.getTime());

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());

console.log("----------------utc getters-------------");

console.log(date.getUTCFullYear());
console.log(date.getUTCMonth());
console.log(date.getUTCDate());
console.log(date.getUTCDay());
console.log(date.getUTCHours());
console.log(date.getUTCMinutes());
console.log(date.getUTCSeconds());
console.log(date.getUTCMilliseconds());

console.log("-------------------setters---------------");

date.setFullYear("2025");
console.log(date);

console.log("--------------------format--------------");

console.log(date.toString());
console.log(date.toTimeString());
console.log(date.toLocaleTimeString());

console.log(date.toDateString());
console.log(date.toLocaleDateString());

console.log(date.toUTCString());
console.log(date.toISOString());

console.log(new Date("1000-03-16T14:25:00Z"));
