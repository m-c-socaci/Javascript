const JSON_PLACEHOLDER_URL = "https://jsonplaceholder.typicode.com";

const userId = 1;

// fetch

fetch(`${JSON_PLACEHOLDER_URL}/users/${userId}`, { method: "DELETE" })
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then((data) => console.log("Success fetch"))
  .catch((err) => console.log(err));

// axios

axios
  .delete(`${JSON_PLACEHOLDER_URL}/users/${userId}`)
  .then((res) => console.log("Success axios"))
  .catch((err) => console.log(err));
