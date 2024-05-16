const getUser = () => {
  // return Promise.reject("Rejected");
  return Promise.resolve({
    id: "asd",
    name: "Cristi",
    permission: "read",
  });
};

const getDocuments = (permission) => {
  if (permission === "read") {
    return Promise.resolve([
      {
        id: "doc1",
        content: "Hello world!",
      },
      {
        id: "doc2",
        content: "Hello world 2!",
      },
    ]);
  } else if (permission === "elevated_read") {
    return Promise.resolve([
      {
        id: "doc1",
        content: "Hello world!",
      },
      {
        id: "doc2",
        content: "Hello world 2!",
      },
      {
        id: "doc3",
        content: "Sensitive content",
      },
    ]);
  } else {
    return Promise.reject({
      error: "No permission",
    });
  }
};

getUser()
  .then((user) => {
    getDocuments(user.permission)
      .then((documents) => console.log(documents))
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));

const getUserDocuments = async () => {
  try {
    const user = await getUser();
    const documents = await getDocuments(user.permission);
    console.log(documents);
  } catch (err) {
    console.log(err);
  }
};

getUserDocuments();

// async function func2() {}

// const func3 = async function () {};

// const obj = {
//   async func4() {},
// };

// class Class {
//   async func5() {}
// }
