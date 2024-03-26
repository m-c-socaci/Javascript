// "use strict";

console.log("------------------kahoot----------------");

function asd() {
  console.log(this);
}

asd();

const ddd = () => {
  console.log(this);
};

ddd();

const obj = {
  asd,
  ddd,
};

obj.asd();
obj.ddd();

console.log("------------------this--------------------");

const person = {
  age: 25,
  incrementAge() {
    this.age++;
  },
};

person.incrementAge();

console.log(person.age);

console.log("--------------call/apply-------------------");

const person2 = {
  age: 30,
};

person.incrementAge.call(person2);

console.log(person);
console.log(person2);

person.incrementAge.apply(person2);

console.log(person);
console.log(person2);

console.log("---------------bind------------------------");

const incrementPerson2Age = person.incrementAge.bind(person2);

incrementPerson2Age();
console.log(person);
console.log(person2);
