function greet(name, surname) {
  console.log("Hello,", name, surname);
}

let timeoutId = null;

function buttonClick() {
  timeoutId = setTimeout(greet, 2000, "Cristi", "Marius");
}

let intervalId = null;

function startClick() {
  intervalId = setInterval(greet, 1000, "Cristi", "Marius");
  console.log("🚀 ~ startClick ~ intervalId:", intervalId);
}

function stopClick() {
  if (intervalId !== null) {
    clearInterval(intervalId);
  }

  if (timeoutId !== null) {
    clearTimeout(timeoutId);
  }
}

let timesRun = 0;

const id = setInterval(() => {
  if (timesRun === 5) {
    clearInterval(id);
    return;
  }
  timesRun += 1;
  console.log("Ran", timesRun, "times");
}, 1000);
