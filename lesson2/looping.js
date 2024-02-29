let counter = 0;

console.log("While with break");
while (counter < 7) {
  console.log(counter);

  if (counter === 3) {
    break;
  }

  counter++;
}

console.log("While with continue");

counter = 0;
while (counter < 7) {
  counter++;

  if (counter === 3) {
    continue;
  }
  console.log(counter);
}

console.log("Hello");

console.log("Do While");

let password = "";

// do {
//   password = prompt(
//     "Vă rugăm să introduceți o parolă de cel puțin 4 caractere",
//     ""
//   );
// } while (password.length < 5);

// console.log("Parola introdusă: ", password);

for (let counter = 1; counter < 7; counter += 2) {
  console.log(counter);
}
