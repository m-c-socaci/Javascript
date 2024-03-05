const services = ["Men's Haircut", "Beard Trim", "Mustache Trim", "Asd"];

console.log(services.length);

const lastIndex = services.length - 1;
services[lastIndex] = "Straight Razor Shave";

console.log(services);

// for (let i = 0; i < services.length; i++) {
//   services[i] = services[i].toUpperCase();
//   console.log(services[i]);
// }

console.log("-------------- for of --------------");
for (const service of services) {
  //   if (service === "Baeard Trim") {
  //     alert("Baeard Trim");
  //     break;
  //   }

  console.log(service);
}

console.log("--------------- reference vs value --------------");
const a = [1, 3, 7];
const b = a;

b[1] = 12;
console.log("a", a);
console.log("b", b);

console.log("------------ Array methods -----------------");
const service = "Beard Trim";
const words = service.split(" ");

console.log("--------------- split() ------------");
console.log(words);

const pricesCSV = "12,23,52,71,11";
const prices = pricesCSV.split(",");

for (const price of prices) {
  // do something with the price
  console.log(price);
}

console.log("--------------- join() ------------");

const servicesCSV = services.join(",");
console.log(servicesCSV);

console.log("--------------- indexOf() ------------");

console.log(services.indexOf("Beard Trim"));
console.log(services.indexOf("Beard Tr"));

console.log("--------------- includes() ------------");

console.log(services.includes("Beard Trim"));
console.log(services.includes("Beard Tr"));

console.log("--------------- push() pop() ------------");

const numbers = [10, 11, 12, 13];
numbers.push(14, 15);
console.log(numbers);

numbers.pop();
console.log(numbers);

console.log("--------------- unshift() shift() ------------");

numbers.unshift(8, 9);
console.log(numbers);

numbers.shift();
console.log(numbers);

console.log("--------------- splice() ------------");

const higherNumbers = [100, 101, 102, 103];

// higherNumbers.splice(1, 1);

// console.log("Delete:", higherNumbers);

// higherNumbers.splice(1, 0, 100.5);

// console.log("Add:", higherNumbers);

// higherNumbers.splice(1, 1, 100.5);

// console.log("Replace:", higherNumbers);

console.log("--------------- slice() ------------");

const part = higherNumbers.slice(1, 3);

console.log(part);

console.log("--------------- concat() ------------");

const allNumbers = numbers.concat(higherNumbers, [1, 2, 3]);

console.log(allNumbers);
