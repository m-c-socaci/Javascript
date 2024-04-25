function simulateRequest() {
  // Takes 1 second to return
  //   const asd = JSON.parse("asd");
  return Math.random() > 0.3 ? "success" : "error";
}

function simulateRequestAsync() {
  return new Promise((resolve) => {
    resolve(simulateRequest());
  });
}

function simulateRequestAsync2() {
  return new Promise((resolve, reject) => {
    Math.random() > 0.3 ? resolve("success") : reject("error");
  }).then((res) => {
    console.log("first then");
    return res;
  });
}

function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5
        ? resolve(["cristi", "marius"])
        : reject("Connection error");
    }, 2000);
  });
}

function simulateRequest3(succesMessage, errorMessage) {
  // Takes 1 second to return
  return Math.random() > 0.3
    ? Promise.resolve(succesMessage)
    : Promise.reject(errorMessage);
}
