const JSON_PLACEHOLDER_URL = "https://jsonplaceholder.typicode.com";

const user = {
  email: "cristi@salut.com",
  name: "Cristi Socaci",
};

// fetch

const optionsFetch = {
  method: "POST",
  body: JSON.stringify(user),
  headers: new Headers({
    "Content-Type": "application/json",
  }),
};

fetch(`${JSON_PLACEHOLDER_URL}/users`, optionsFetch)
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// axios

const optionsAxios = {
  headers: {
    "X-My-Header": "Salut",
  },
};

const getUserById = (id) => {
  axios
    .get(`${JSON_PLACEHOLDER_URL}/users/${id}`)
    .then((res) => console.log(res));
};

axios
  .post(`${JSON_PLACEHOLDER_URL}/users`, user, optionsAxios)
  .then((response) => {
    console.log(response.data);
    getUserById(response.data.id - 1);
  })
  .catch((err) => console.log(err));
