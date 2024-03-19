console.log("-----------------kahoot--------------");

test();

function test() {}

// test2();
const test2 = function () {};

const test3 = () => {};

const test4 = (a, b) => a + b;

const test5 = (a, b) => {
  return a + b;
};

const test6 = (a) => {
  console.log(a);
};

console.log("-----------------callbacks-------------------");

function greet(name) {
  console.log(`Hello, ${name}`);
}

greet("Cristi");

function register(name, greet) {
  console.log(`User ${name} was succesfully registerd`);
  greet(name);
}

register("Cristi", greet);

function sendGreetSMS(name) {
  console.log(`Hello from SMS, ${name}`);
}

function sendGreetEmail(name) {
  console.log(`Hello from email, ${name}`);
}

register("Cristi", sendGreetSMS);
register("Marius", sendGreetEmail);

const arr = {
  elements: [2, 3, 4, 1, 2],
  forEach: function (callback) {
    for (let i = 0; i < this.elements.length; i++) {
      callback(this.elements[i]);
    }
  },
};

function printElement(element) {
  console.log(element);
}

printElement("Asd");

arr.forEach(printElement);

const arr2 = [100, 200, 300];

arr2.forEach(printElement);

console.log("---------------------arrow functions-----------------");

arr2.forEach((elem) => {
  console.log(elem);
});

console.log(arr2.filter((x) => x > 200));

const arr3 = [];
for (const elem of arr2) {
  if (elem > 200) {
    arr3.push(elem);
  }
}

console.log(arr3);

console.log("------------------ some examples --------------");

function processCall(recipient, onAvailable, onNotAvailable) {
  // Simulăm disponibilitatea unui abonat cu un număr aleatoriu
  const isRecipientAvailable = Math.random() > 0.5;

  isRecipientAvailable ? onAvailable(recipient) : onNotAvailable(recipient);
}

const onAvailable = (recipient) => {
  console.log(
    `Încercăm efectuarea conexiunii cu ${recipient}, vă rugăm să așteptați...`
  );
};

const onNotAvailable = (recipient) => {
  console.log(
    `Abonatul ${recipient} nu este disponibil, va rugăm să lăsați un mesaj.`
  );
};

processCall("Andrei", onAvailable, onNotAvailable);

console.log("-----------------for vs for of---------------");

const a = [5, 3, 2, 4];

for (let i = 0; i < a.length; i++) {
  let value = a[i];
  value *= 10;
}

console.log(a);

b = [];
for (let value of a) {
  value *= 10;
  b.push(value);
}

console.log(a);
console.log(b);

a.forEach((x, i) => {
  console.log(`${i}: ${x}`);
});
console.log(a);
