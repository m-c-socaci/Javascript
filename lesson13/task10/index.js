const boxes = document.querySelector("#boxes");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const input = document.querySelector("#control-input");
const errorMessage = document.querySelector("#error-message");

createButton.addEventListener("click", (e) => {
  const amount = input.value;
  if (!amount) {
    return;
  }

  if (amount < 1 || amount > 100) {
    errorMessage.style.color = "red";
    errorMessage.textContent = "Amount must be between 1 and 100";
    input.value = "";

    return;
  }
  input.value = "";

  createBoxes(amount);
});

destroyButton.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxes.innerHTML = "";
}

function createBoxes(amount) {
  let dimensions = 30;

  const boxElems = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${dimensions}px`;
    box.style.height = `${dimensions}px`;
    box.style.backgroundColor = getRandomHexColor();
    dimensions += 10;
    boxElems.push(box);
  }

  destroyBoxes();
  boxes.append(...boxElems);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
