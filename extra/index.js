const draggableList = document.querySelector(".draggable-list");

draggableList.addEventListener("dragstart", (e) => {
  e.target.style.opacity = "0.6";
  e.dataTransfer.setData("elemId", e.target.id);
});

draggableList.addEventListener("dragover", (e) => {
  e.preventDefault();
  e.target.style.borderBottom = "2px solid red";
});

draggableList.addEventListener("dragleave", (e) => {
  e.target.style.borderBottom = "2px solid gray";
});

draggableList.addEventListener("drop", (e) => {
  const droppedElemId = e.dataTransfer.getData("elemId");
  const droppedElem = draggableList.querySelector("#" + droppedElemId);
  droppedElem.style.opacity = "1";

  e.target.style.borderBottom = "2px solid gray";
  e.target.after(droppedElem);
});
