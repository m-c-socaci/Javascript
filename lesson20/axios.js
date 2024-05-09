const JSON_PLACEHOLDER_URL = "https://jsonplaceholder.typicode.com";

fetch(`${JSON_PLACEHOLDER_URL}/users`)
  .then((response) => {
    console.log(response);
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

axios
  .get(`${JSON_PLACEHOLDER_URL}/users`)
  .then((response) => {
    console.log(response);

    console.log(response.data);
  })
  .catch((err) => console.log(err));
