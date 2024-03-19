/*
Write the following functions:

createProduct(obj, callback) - accepts a product object without an id, and also callback. The function creates a product object by adding a unique identifier to it in property id and calls the callback passing it the created object.

logProduct(product) - callback accepting a product object and logging it to console

logTotalPrice(product) - callback receiving product object and logging the total value of the item in the console

*/

function generateRandomString(desiredLength) {
  const allowedCharacters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_";

  let randomString = "";

  const min = 0;
  const max = allowedCharacters.length;

  for (let i = 0; i < desiredLength; i++) {
    const randomIndex = Math.floor(Math.random() * (max - min) + min);
    randomString += allowedCharacters[randomIndex];
  }

  return randomString;
}

const createProduct = (obj, callback) => {
  const product = { ...obj, id: generateRandomString(8) };
  callback(product);
};

const logProduct = (product) => {
  console.log(product);
};

const logTotalPrice = (product) => {
  console.log(product.price * product.quantity);
};

const calculateTotalPrice = (product) => {
  const totalPrice = product.price * product.quantity;

  return totalPrice;
};

const product = {
  name: "product1",
  price: 10,
  quantity: 2,
};

const totalPrice = calculateTotalPrice(product);
console.log(totalPrice);

createProduct(product, logProduct);
createProduct(product, logTotalPrice);
