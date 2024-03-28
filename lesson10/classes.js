// Interface
const account = {
  balance: 100,
  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
    }

    console.error("Operation failed");
  },

  deposit(amount) {
    this.balance += amount;
  },
};

account.balance -= 105;

console.log("-----------------prototype-------------");
const personProto = {
  name: "",
  age: 0,
  incrementAge() {
    this.age++;
  },
};
const cristi = Object.create(personProto);
cristi.name = "Cristi";
cristi.age = 25;

cristi.incrementAge();
console.log(personProto);
console.log(cristi);

console.log([1, 2, 3]);

console.log(personProto.isPrototypeOf(cristi));

console.log("---------------classes------------------");

class Person {
  #name;
  age = 0;
  #cnp;
  static #staticName = "Person";

  constructor(name, age, cnp) {
    this.#name = name;
    this.age = age;
    this.#cnp = cnp;
  }

  incrementAge() {
    this.age++;
  }

  getCnp(permissionLevel) {
    if (permissionLevel === "Admin") {
      return this.#cnp;
    }
    console.error("Forbidden");
    return null;
  }

  setCnp(newCnp, permissionLevel) {
    if (permissionLevel === "Admin") {
      this.#cnp = newCnp;
      return;
    }
    console.error("Forbidden");
  }

  get name() {
    return this.#name;
  }

  set name(newName) {
    if (this.checkForSpecialCharacters(newName)) {
      console.error("Not allowed");
      return;
    }
    this.#name = newName;
  }
  checkForSpecialCharacters(newName) {
    return true;
  }

  static #whoAmI() {
    return `I'm a ${this.#staticName}`;
  }

  static logWhoAmI() {
    console.log(this.#whoAmI());
  }
}

const marius = new Person("Marius", 25, "123456789");

marius.incrementAge();
console.log(marius);

console.log(marius.getCnp("Admin"));
console.log(marius.getCnp("User"));

marius.setCnp("987654321", "Admin");

marius.name = "Asd";

console.log(marius);

Person.logWhoAmI();

const people = [];
for (let i = 0; i < 10; i++) {
  people.push(new Person(`Person-${i}`, 25, "123981263"));
}

console.log(people);

class PostsDatabase {
  posts = [];
}

class ContentReader {
  postsDatabase;

  constructor(postsDatabase) {
    this.postsDatabase = postsDatabase;
  }

  readPosts() {
    return this.postsDatabase.posts;
  }
}

class ContentEditor extends ContentReader {
  comment;
  constructor(comment, postsDatabase) {
    super(postsDatabase);
    this.comment = comment;
  }
  addPost(post) {
    this.postsDatabase.posts.push(post);
  }
}
const postsDatabase = new PostsDatabase();

const contentEditor = new ContentEditor("comment", postsDatabase);

contentEditor.addPost({ text: "Post" });
console.log("Editor", contentEditor.readPosts());

const contentReader = new ContentReader(postsDatabase);

console.log("Reader", contentReader.readPosts());
