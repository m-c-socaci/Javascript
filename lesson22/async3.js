const fetchUsersSync = async () => {
  const baseUrl = "https://jsonplaceholder.typicode.com";
  const firstResponse = await fetch(`${baseUrl}/users/1`);
  const secondResponse = await fetch(`${baseUrl}/users/2`);
  const thirdResponse = await fetch(`${baseUrl}/users/3`);

  const firstUser = await firstResponse.json();
  const secondUser = await secondResponse.json();
  const thirdUser = await thirdResponse.json();

  console.log(firstUser, secondUser, thirdUser);
};

// fetchUsersSync();

const fetchUsersParallel = () => {
  const baseUrl = "https://jsonplaceholder.typicode.com";
  const firstResponse = fetch(`${baseUrl}/users/1`).then((response) =>
    response.json()
  );
  const secondResponse = fetch(`${baseUrl}/users/2`).then((response) =>
    response.json()
  );
  const thirdResponse = fetch(`${baseUrl}/users/3`).then((response) =>
    response.json()
  );

  Promise.all([firstResponse, secondResponse, thirdResponse]).then(
    (responses) => {
      const firstUser = responses[0];
      const secondUser = responses[1];
      const thirdUser = responses[2];
      console.log(firstUser, secondUser, thirdUser);
    }
  );
};

fetchUsersParallel();

const fetchUsers = () => {
  const baseUrl = "https://jsonplaceholder.typicode.com";
  const userIds = [1, 2, 3];

  // 1. Creăm o matrice de promisuri
  const arrayOfPromises = userIds.map((userId) => {
    return fetch(`${baseUrl}/users/${userId}`).then((response) =>
      response.json()
    );
  });

  // 2. Rulăm toate promisurile în paralel și așteptăm ca acestea să se finalizeze
  Promise.all(arrayOfPromises).then((users) => console.log(users));
};

fetchUsers();
