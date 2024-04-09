const div = document.getElementById("div");
const button = document.getElementById("button");

div.addEventListener("click", (event) => {
  console.log("div currentTarget", event.currentTarget);
  console.log("div target", event.target);
  console.log("div");
});

// button.addEventListener("dblclick", (e) => {
//   console.log("double click");
// });

// button.addEventListener("contextmenu", (e) => {
//   e.preventDefault();
//   console.log("context menu");
// });

button.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("button1 currentTarget", event.currentTarget);
  console.log("button1 target", event.target);
  console.log("button1");
});

button.addEventListener("click", (event) => {
  console.log("button2 currentTarget", event.currentTarget);
  console.log("button2 target", event.target);
  console.log("button2");
});
