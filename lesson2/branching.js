// If else
const myAge = 17;
let canVote;

if (myAge >= 18) {
  canVote = true;
} else {
  canVote = false;
}

console.log("Can Vote: ", canVote);

canVote = myAge >= 18 ? true : false;
console.log("Can Vote: ", canVote);

const subscription = "proPlus";
let credits;

if (subscription === "free") {
  credits = 0;
} else if (subscription === "pro") {
  credits = 100;
} else if (subscription === "premium") {
  credits = 1000;
} else {
  credits = 0;
}

console.log("Credits:", credits);

// Switch

switch (subscription) {
  case "free":
    credits = 0;
    break;
  case "pro":
  case "proPlus":
    credits = 100;
    break;
  case "premium":
    credits = 1000;
    break;
  default:
    credits = 0;
}

console.log("Credits:", credits);

// Scope
let hello2 = "hello2";

if (true) {
  let hello = "Hello";
  console.log(hello2);

  if (true) {
    console.log(hello);
  }
}

console.log(hello);
