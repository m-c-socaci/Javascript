console.log("----------------- question ---------------");

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Change code below this line

  for (const product of products) {
    console.log(product);
    if (product.name === productName) {
      return product.price * product.quantity;
    }
  }

  return 0;
  // Change code above this line
}

console.log(calculateTotalPrice("Radar"));
console.log(calculateTotalPrice("Radarr"));

console.log("----------------- object basics ---------------");
const productNameKey = "name";
const price = 1300;
const quantityy = 4;

const product = {
  [productNameKey]: "Radar",
  price,
  quantity: quantityy,
  available: true,
  priceHistory: [1200, 1250, 1399, 1300],
  hala: {
    address: "Cluj",
  },

  calculateTotalPrice() {
    return this.price * this.quantity;
  },
};

console.log(product.name);
console.log(product[productNameKey]);

console.log(product.hala.address);

product.name = "Scanner";

console.log(product.name);

product.description = "Best product";

console.log(product.description);

console.log(product.price);
console.log(product.quantity);
console.log(product.quantityy);

console.log(product.calculateTotalPrice());

const myConsole = {
  log(message) {
    console.log(message);
  },
};

myConsole.log("Hello");

console.log("----------------- object iteration ---------------");

const goItPeople = {
  12345: {
    name: "Cristi",
    surname: "Socaci",
    age: 25,
  },
  22345: {
    name: "Iani",
    surname: "Misoc",
    age: 23,
  },
};

console.log(goItPeople.hasOwnProperty("123456"));

for (const identifier in goItPeople) {
  const person = goItPeople[identifier];
  console.log(`${identifier}: ${person.name} ${person.surname}`);
}

console.log(Object.keys(goItPeople));

console.log(Object.values(goItPeople));

for (const identifier of Object.keys(goItPeople)) {
  const person = goItPeople[identifier];
  console.log(`${identifier}: ${person.name} ${person.surname}`);
}

const words = ["salut", "ce", "faci"];

for (const word in words) {
  console.log(word);
}

console.log("----------------- object array ---------------");

const products2 = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

for (const product of products2) {
  console.log(product.name);
}
