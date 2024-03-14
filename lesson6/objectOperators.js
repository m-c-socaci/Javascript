console.log("------------------- Kahoot ---------------");
const matrice = [1, 2, 3];
const obiect = { ...matrice };

console.log(obiect);

function asd(test = "asd") {
  console.log(test);
}

asd();

function foo({ username } = {}) {
  console.log(username);
}

foo();

const firstObject = { A: 1, B: 2 };
const secondObject = { A: 3, C: 4 };

const thirdObject = {
  A: 5,
  ...firstObject,
  ...secondObject,
  C: 6,
};

console.log(firstObject);

console.log("-------------------- spread  ---------------");

const numberArr = [1, 2, 30, 4, 5];

console.log(Math.max(...numberArr));

const numberArrCopy = [...numberArr];

numberArrCopy[1] = 20;

console.log(numberArr);
console.log(numberArrCopy);

const obj = {
  a: 1,
  b: 2,
  c: {
    d: 3,
  },
};

const objCopy = {
  ...obj,
  c: { ...obj.c },
};

objCopy.c.d = 5;
console.log(obj);
console.log(objCopy);

console.log("-------------------- rest  ---------------");

function test(...args) {
  console.log(args);
}

const arr = [1, 2, 3, 4];
test(...arr);

function test2(a, b, ...args) {
  console.log(a, b, args);
}

test2(1, 2, 3, 4);

console.log("----------------- destructurare obiect ------------------");

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

const {
  title,
  author,
  generes,
  isPublic,
  rating: stars,
  description = "Generic description",
} = book;

const accessType = isPublic ? "public" : "private";
const message = `Cartea ${title} de ${author} cu un rating de ${stars} are acces ${accessType}.`;
console.log(message);
console.log(description);

// function ParentComponent(){
//   return <Component src="./index.html" test="test"></Component>
// }

// function Component({src, test}) {
//   src
//   return <div></div>;
// }

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Baltagul",
    author: "Mihail Sadoveanu",
    rating: 8.51,
  },
];

for (const book of books) {
  const { title, author, rating } = book;
  console.log(`Cartea ${title} de ${author} cu un rating de ${rating}`);
}

const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const {
  name,
  tag,
  stats: { followers, views, likes },
} = user;

console.log(name, tag, followers, views, likes);

function addBook(theBestBookInTheWorld) {
  const { title, author, generes, isPublic, rating } = theBestBookInTheWorld;
}

addBook({
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
});

console.log("-------------------exercise----------------------");

function generateRandomString(desiredLength) {
  const allowedCharacters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_";

  let randomString = "";

  const min = 0;
  const max = allowedCharacters.length;

  for (let i = 0; i < desiredLength; i++) {
    const randomIndex = Math.floor(Math.random() * (max - min) + min);
    randomString += allowedCharacters[randomIndex];
  }

  return randomString;
}

console.log(generateRandomString(100));
