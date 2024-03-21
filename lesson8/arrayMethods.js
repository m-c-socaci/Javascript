console.log("------------ pure functions ----------------");
function test(arr) {
  const arr2 = [...arr];

  arr2[0] = 1;

  return arr2;
}

const arr = [2, 3, 4];

console.log(test(arr));

console.log(arr);

console.log("--------------------- map ------------------");

const arr1 = [1, 2, 3, 4];

console.log(arr1.map((x) => x * 2));

const componente = [
  {
    id: "asdf",
    name: "monitor",
    price: 1200,
  },
  {
    id: "lkjd",
    name: "laptop",
    price: 5500,
  },
  {
    id: "vnka",
    name: "keyboard",
    price: 500,
  },
];

console.log(
  componente.map((componenta) => {
    const updated = {
      ...componenta,
      name: componenta.name + "asd",
    };
    return updated;
  })
);

console.log(componente);

console.log("------------------------------flat & flatMap -------------------");

const multiArr = [
  [[1], 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(multiArr.flat());
console.log(multiArr.flat(Infinity));

console.log(multiArr.map((x) => x).flat());
console.log(multiArr.flatMap((x) => x));

const flatArr = [1, 2, 3];

const flatArrResult = flatArr.flatMap((x) => (x === 2 ? [2, 2] : x));

console.log(flatArrResult);

console.log("--------------------------- filter ----------------------");

const filterArr = [51, -3, 27, 21, -68, 42, -37];

console.log(filterArr.filter((x) => x > 0));
console.log(filterArr.filter((x) => x > 100));

const componenteFiltrate = componente
  .filter((x) => x.price > 1000)
  .map((x) => x.name);
console.log(componenteFiltrate);

console.log("------------------ find & findIndex -------------------------");
console.log(filterArr.find((x) => x < 0));

const component = componente.find((componenta) => componenta.id === "asdf");

if (component === undefined) {
  console.log("Component not found");
}

console.log(component);
const componentIndex = componente.findIndex(
  (componenta) => componenta.id === "lkjd"
);

console.log(componentIndex);

console.log("-------------------- every & some -------------------");

console.log(filterArr.every((x) => x > -1000));

console.log(filterArr.some((x) => x > 1000));

console.log("------------------ reduce -----------------------");

const result = filterArr.reduce((acc, value) => {
  acc += value;
  return acc;
}, 0);

console.log(result);

const words = [
  "calculator",
  "laptop",
  "monitor",
  "calculator",
  "monitor",
  "mouse",
  "monitor",
];

const restul2 = words.reduce((acc, value) => {
  if (!acc.hasOwnProperty(value)) {
    acc[value] = 0;
  }
  acc[value]++;

  return acc;
}, {});

console.log(restul2);

const restul3 = words.reduce((acc, value) => {
  if (!acc.hasOwnProperty(value)) {
    acc[value] = 1;
    return acc;
  }
  acc[value]++;
  return acc;
}, {});
console.log(restul3);

console.log("------------------ sort ----------------------");

const sortArr = [-51, 3, 27, 21, -68, 42, -37, 27];

const arrCopy = [...sortArr];
console.log(arrCopy.sort((a, b) => a - b));

console.log(sortArr);
