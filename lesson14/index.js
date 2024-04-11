const outputNo = document.querySelector("#no");
let noEvents = 0;

document.addEventListener("mousemove", () => {
  noEvents++;
  outputNo.textContent = noEvents;
});

const outputThrottle = document.querySelector("#throttle");
let throttleEvents = 0;
const eventHandlerThrottle = () => {
  throttleEvents++;
  outputThrottle.textContent = throttleEvents;
};

const delayInMiliseconds = 300;
document.addEventListener(
  "mousemove",
  _.throttle(eventHandlerThrottle, delayInMiliseconds)
);

const outputDebounce = document.querySelector("#debounce");
let debounceEvents = 0;
const eventHandlerDebounce = () => {
  debounceEvents++;
  outputDebounce.textContent = debounceEvents;
};

const options = {
  leading: true,
  trailing: false,
};
document.addEventListener(
  "mousemove",
  _.debounce(eventHandlerDebounce, delayInMiliseconds, options)
);
