const JSON_PLACEHOLDER_URL = "https://jsonplaceholder.typicode.com";

const user = {
  email: "cristi@salut.com",
  name: "Cristi Socaci",
};

const userId = 1;

// fetch

const optionsFetch = {
  method: "PUT", // also see "PUT"
  body: JSON.stringify(user),
  headers: new Headers({
    "Content-Type": "application/json",
  }),
};

fetch(`${JSON_PLACEHOLDER_URL}/users/${userId}`, optionsFetch)
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// axios

axios
  .put(`${JSON_PLACEHOLDER_URL}/users/${userId}`, user) // see also "put"
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));
