const JSON_PLACEHOLDER_URL = "https://jsonplaceholder.typicode.com";

const queryStrings = new URLSearchParams({
  _limit: 7,
  _sort: "username",
});

const headers = new Headers({
  "Content-Type": "application/json",
  "X-My-Header": "Salut",
});

const responsePromise = fetch(
  `${JSON_PLACEHOLDER_URL}/users?${queryStrings.toString()}`,
  {
    headers: headers,
  }
);

responsePromise
  .then((response) => {
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
