const a = Number.parseFloat(prompt("Enter first number"));
console.log("First number is: ", a);

const b = Number.parseFloat(prompt("Enter second number"));
console.log("Second number is: ", b);

const sum = a + b;

console.log("The sum is: ", sum);

const names = ["asd", "ddd", "bbb"];

const div = document.getElementById("names");

for (let name of names) {
  const nameElem = document.createElement("div");
  nameElem.textContent = name;
  div.appendChild(nameElem);
}
