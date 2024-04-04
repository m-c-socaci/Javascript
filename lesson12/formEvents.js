const form = document.querySelector("#form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = event.target.elements;
  const login = formElements.login.value;
  const password = formElements.password.value;

  console.log("login:", login);
  console.log("password:", password);

  event.target.reset();
});

const loginInput = form.querySelector('[name="login"]');

loginInput.addEventListener("input", (event) => {
  console.log("input", event.target.value);
});

loginInput.addEventListener("change", (event) => {
  console.log("change", event.target.value);
});

const selectInput = form.querySelector("#select");

selectInput.addEventListener("change", (event) => {
  console.log(event.target.value);

  console.log(event.target.selectedIndex);
});

loginInput.addEventListener("focus", () => {
  console.log("focus");
});

loginInput.addEventListener("blur", () => {
  console.log("blur");
});

const div = document.querySelector("#div");

div.addEventListener("click", (event) => {
  console.log(event.target);
  console.log(event.currentTarget);
});
