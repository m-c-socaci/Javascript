const JSON_PLACEHOLDER_URL = "https://jsonplaceholder.typicode.com";

// fetch

const queryStrings = new URLSearchParams({
  _limit: 7,
  _sort: "username",
});

const optionsFetch = {
  headers: new Headers({
    "Content-Type": "application/json",
    "X-My-Header": "Salut",
  }),
};
const responseFetchPromise = fetch(
  `${JSON_PLACEHOLDER_URL}/users?${queryStrings}`,
  optionsFetch
);

responseFetchPromise
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

// axios

const optionsAxios = {
  headers: {
    "Content-Type": "application/json",
    "X-My-Header": "Salut",
  },
  params: {
    _limit: 7,
    _sort: "username",
  },
};

const responseAxiosPromise = axios.get(
  `${JSON_PLACEHOLDER_URL}/users`,
  optionsAxios
);

responseAxiosPromise
  .then((response) => {
    console.log(response.data);
  })
  .catch((err) => {
    console.log(err);
  });
