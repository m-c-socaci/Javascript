console.log("---------------- event listener -------------");

const mybutton = document.querySelector("#mybutton");

function onMyButtonClick() {
  console.log("Hello world!");
}

function onMyButtonClick2(event) {
  console.log(event);
  console.log("Hi there!");
}

mybutton.addEventListener("click", onMyButtonClick);
mybutton.addEventListener("click", onMyButtonClick2);

mybutton.removeEventListener("click", onMyButtonClick);

// const obj = {
//   counter: 0,
//   increment() {
//     console.log(this);
//     this.counter += 1;
//   },
// };

// mybutton.addEventListener("click", obj.increment.bind(obj));

console.log("----------------mouse events -------------------");

document.addEventListener("click", () => {
  console.log("click on document");
});

document.addEventListener("mousedown", () => {
  console.log("mouse down on document");
});

document.addEventListener("mouseup", () => {
  console.log("mouse up on document");
});

document.addEventListener("mousemove", () => {
  console.log("mouse move on document");
});

mybutton.addEventListener("mouseenter", () => {
  mybutton.style.backgroundColor = "red";
  console.log("mouse enter button");
});

mybutton.addEventListener("mouseleave", () => {
  mybutton.style.backgroundColor = "initial";

  console.log("mouse leave button");
});

mybutton.addEventListener("mouseover", () => console.log("mouse over button"));

console.log("----------------keyboard events------------------------------");

// document.addEventListener("keydown", () => {
//   console.log("KeyDown");
// });

document.addEventListener("keydown", (event) => {
  event.preventDefault();
  if (event.code === "KeyS" && (event.ctrlKey || event.metaKey)) {
    console.log("s");
  }
  // console.log(event.altKey);
  // console.log(event.shiftKey);
});
