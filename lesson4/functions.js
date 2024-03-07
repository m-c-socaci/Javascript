function sayHi(name) {
  console.log("Hello", name);
}

sayHi("Cristi");

function addNumbers(...args) {
  let sum = 0;

  for (let number of args) {
    if (typeof number === "string") {
      return null;
    }
    sum += number;
  }

  return sum;
}
const sum = addNumbers(1, 5, 2, 9);

console.log(sum);

const multiply = function (a, b) {
  return a * b;
};

console.log(multiply(2, 3));

const divide = (a, b) => {
  return a / b;
};
console.log(divide(5, 3));

const arr = [1, 2, 3];
function myIncludes(arr, number) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === number) {
      return true;
    }
  }
  return false;
}

console.log(myIncludes(arr, 5));
