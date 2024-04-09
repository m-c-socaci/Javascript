const colorPalette = document.querySelector(".color-palette");
const colorOutput = document.querySelector("#color-output");

const onClick = (e) => {
  if (!e.target.hasAttribute("data-color")) {
    return;
  }
  colorOutput.textContent = "Selected color: " + e.target.dataset.color;
  colorOutput.style.color = e.target.dataset.color;
};

colorPalette.addEventListener("click", onClick);

const colorElems = [];
for (let i = 0; i < 60; i++) {
  const color = document.createElement("button");
  color.classList.add("color-elem");

  const hexColor = generateHexColor();
  //   color.setAttribute("data-color", hexColor);
  color.dataset.color = hexColor;
  color.style.backgroundColor = hexColor;
  colorElems.push(color);
}

colorPalette.append(...colorElems);

function generateHexColor() {
  const hexChars = "0123456789ABCDEF";

  let color = "#";

  for (let i = 0; i < 6; i++) {
    const randIndex = Math.round(Math.random() * 15);

    color += hexChars[randIndex];
  }

  return color;
}
