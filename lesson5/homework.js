/*

Example 1 - Object Basics

Write a script that, for the `user` object, successively:

- adds a `mood` field with value `'happy'`
- replaces the value `hobby` to `'skydiving'`
- replaces `premium` to `false`
- prints the contents of the `user` object in `key:value` format using
  `Object.keys()` and `for...of`

*/

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

for (const key of Object.keys(user)) {
  console.log(`${key}:${user[key]}`);
}

/*
Example 2 -  Object.values() method

We have an object that stores our team salaries. Write code for
summing all salaries and store the result in the sum variable. Should
get 390. If the `salaries` object is empty, then the result should be 0.

*/

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
for (const salary of Object.values(salaries)) {
  sum += salary;
}

console.log(sum);
