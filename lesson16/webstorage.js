const input = document.getElementById("input");
const button = document.getElementById("submit");
const show = document.getElementById("show");
const deletee = document.getElementById("delete");

const SAVED_VALUE_KEY = "savedValue";

button.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.setItem(SAVED_VALUE_KEY, input.value);
});

show.addEventListener("click", () => {
  const savedValue = localStorage.getItem(SAVED_VALUE_KEY);
  console.log(savedValue);
});

deletee.addEventListener("click", () => {
  localStorage.removeItem(SAVED_VALUE_KEY);
});

console.log(localStorage.length);

localStorage.clear();

const user = {
  name: "cristi",
  secondName: "marius",
  age: 25,
};

const userJson = JSON.stringify(user);

const USER_KEY = "user";

localStorage.setItem(USER_KEY, userJson);

const userFromLocalstorage = localStorage.getItem(USER_KEY);
console.log(userFromLocalstorage);

const userFromLocalstorageParsed = JSON.parse(userFromLocalstorage);
console.log(userFromLocalstorageParsed);
