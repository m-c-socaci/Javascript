const JSON_PLACEHOLDER_URL = "https://jsonplaceholder.typicode.com";

const user = {
  email: "cristi@salut.com",
  name: "Cristi Socaci",
};

//fetch
async function fetchAsync() {
  const optionsFetch = {
    method: "POST",
    body: JSON.stringify(user),
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  };

  const response = await fetch(`${JSON_PLACEHOLDER_URL}/users`, optionsFetch);

  if (!response.ok) {
    return Promise.reject(response.status);
  }

  return response.json();
}

fetchAsync()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// axios

async function axiosAsync() {
  const optionsAxios = {
    headers: {
      "X-My-Header": "Salut",
    },
  };

  try {
    const response = await axios.post(
      `${JSON_PLACEHOLDER_URL}/users`,
      user,
      optionsAxios
    );

    const id = response.data.id - 1;
    const createdUserResponse = await axios.get(
      `${JSON_PLACEHOLDER_URL}/users/${id}`
    );

    return createdUserResponse.data;
  } catch (err) {
    return Promise.reject(err.message);
  }
}

axiosAsync()
  .then((user) => console.log(user))
  .catch((err) => console.log(err));

// async function test() {
//   return "asd";
// }

// function test2() {
//     return Promise.resolve("asd");
// }

// console.log(test());
