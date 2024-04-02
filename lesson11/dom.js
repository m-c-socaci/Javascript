const lista = document.querySelector("#lista");

console.log("------------------ ierarhia dom -----------------");
console.log(lista.children);
console.log(lista.childNodes);

console.log(lista.firstElementChild); // lista.children[0]
console.log(lista.lastElementChild); // lista.children[lista.length - 1]

console.log(lista.firstChild); // lista.childNodes[0]
console.log(lista.lastChild); // lista.childNodes[lista.length - 1]

const secondListItem = lista.children[1];

console.log(secondListItem.previousElementSibling);
console.log(secondListItem.nextElementSibling);

console.log(secondListItem.previousSibling);
console.log(secondListItem.nextSibling);

console.log(secondListItem.parentNode);

console.log("------------------querySelector-------------------");

const list = document.querySelector("#lista");
console.log(list);

const listElements = document.querySelectorAll(".list-item");
console.log(listElements);

console.log("-------------------textContent----------------");

const firstListElement = list.firstElementChild;

console.log(firstListElement.textContent);

firstListElement.textContent = "item from js";

console.log("-------------------classList----------------");

console.log(firstListElement.classList);

console.log(firstListElement.classList.contains("list-item"));
console.log(firstListElement.classList.contains("item-list"));

// firstListElement.classList.add("list-item-special");

// firstListElement.classList.remove("list-item-special");

// firstListElement.classList.replace("list-item", "list-item-special");

firstListElement.classList.toggle("list-item-special");
firstListElement.classList.toggle("list-item-special");

console.log("----------------style-----------------");

firstListElement.style.color = "red";
firstListElement.style.fontSize = "20px";

console.log("----------------attributes------------");

const facebook = document.querySelector("#facebook");

console.log(facebook);

console.log(facebook.attributes);

console.log(facebook.hasAttribute("href"));
console.log(facebook.hasAttribute("src"));

facebook.setAttribute("href", "https://instagram.com");

console.log(facebook.getAttribute("href"));

facebook.removeAttribute("href");

facebook.setAttribute("data-testid", "mytestid");

console.log(facebook.dataset);
console.log(facebook.dataset["testid"]);
console.log(facebook.dataset.asd);

console.log("------------- create/delete elements ------------");

const item4 = document.createElement("li");
item4.textContent = "item4";

// add as child
lista.append(item4);
// lista.prepend(item4);

const divelem = document.createElement("div");
divelem.textContent = "this is a div";

// add as sibling
// lista.after(divelem);
lista.before(divelem);

// remove
facebook.remove();

console.log("------------ innerHTML ------------------");

const innerHTMLDiv = document.querySelector("#innerHTML");

// const data = prompt("Enter data here:");

// innerHTMLDiv.innerHTML = `<div>${data}</div>`;

console.log(lista.innerText);

const l = ["1", "2", '<a href="https://facebook.com">Press here</a>'];

lista.innerHTML = l.reduce((acc, x) => {
  acc += `<li>${x}</li>`;
  return acc;
}, "");

// add as child
// lista.insertAdjacentHTML("afterbegin", "<li>item5</li>");
lista.insertAdjacentHTML("beforeend", "<li>item5</li>");

// add as sibling
// lista.insertAdjacentHTML("beforebegin", "<div>div</div>");
lista.insertAdjacentHTML("afterend", "<div>div</div>");
