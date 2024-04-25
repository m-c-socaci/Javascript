//  ------------- Sync ------------------

// try {
//   const res = simulateRequest();
//   console.log(res);
// } catch {
//   console.log("Error");
// }

// ----------------- simulate async ------------------

// const resAsync = simulateRequestAsync()
//   .then((res) => {
//     console.log("Fullfiled", res);
//   })
//   .catch(() => {
//     console.log("Error async");
//   })
//   .finally(() => {
//     console.log("finally");
//   });

// console.log(resAsync);

// ------------------ simulate async 2 ------------------

// const resAsync2 = simulateRequestAsync2()
//   .then((res) => {
//     console.log(res);
//     return "then 1";
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   })
//   .finally(() => {
//     console.log("finally");
//   });

// ------------------ simulate get users ------------------

// const usersDiv = document.getElementById("users");

// getUsers()
//   .then((res) => {
//     res.forEach((user) => {
//       const userElem = document.createElement("div");
//       userElem.textContent = user;
//       usersDiv.appendChild(userElem);
//     });
//   })
//   .catch((err) => {
//     const userElem = document.createElement("div");
//     userElem.textContent = err;
//     userElem.style.color = "red";
//     usersDiv.appendChild(userElem);
//   })
//   .finally(() => {
//     const userElem = document.createElement("div");
//     userElem.textContent = "This is a users list";
//     usersDiv.prepend(userElem);
//   });

// ------------------ Promise methods ------------------

// simulateRequest3()
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// const promise1 = simulateRequest3("succes1", "error1");
// const promise2 = simulateRequest3("succes2", "error2");

// Promise.all([promise1, promise2])
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

const promise3 = simulateRequest3("succes3", "error3");
const promise4 = simulateRequest3("succes4", "error4");

Promise.race([promise3, promise4])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

Notiflix.Notify.success("Sol lucet omnibus");
