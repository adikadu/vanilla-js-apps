const btnEl = document.querySelector("button");
const bodyEl = document.querySelector("body");
const hourEl = document.querySelector(".hand--hour");
const minuteEl = document.querySelector(".hand--minute");
const secondEl = document.querySelector(".hand--second");
const timeEl = document.querySelector("h2");
const dateEl = document.querySelector("p");
let lightMode = true;

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

btnEl.addEventListener("click", (e) => {
  e.preventDefault();
  lightMode = !lightMode;
  bodyEl.classList.remove("light");
  bodyEl.classList.remove("dark");
  if (lightMode) {
    e.target.textContent = "Dark Mode";
    bodyEl.classList.add("light");
  } else {
    e.target.textContent = "Light Mode";
    bodyEl.classList.add("dark");
  }
});

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const hoursForClock = hours >= 13 ? hours % 12 : hours;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const amOrPm = hours >= 12 ? "PM" : "AM";

  hourEl.style.transform = `translateY(25%) rotate(${scale(
    hoursForClock,
    0,
    12,
    0,
    360
  )}deg)`;
  minuteEl.style.transform = `translateX(-50%) rotate(${scale(
    minutes,
    0,
    60,
    0,
    360
  )}deg)`;
  secondEl.style.transform = `translateX(-50%) rotate(${scale(
    seconds,
    0,
    60,
    0,
    360
  )}deg)`;

  timeEl.innerHTML = `${hoursForClock}:${
    minutes < 10 ? `0${minutes}` : minutes
  } ${amOrPm}`;
  dateEl.innerHTML = `${days[day]}, ${months[month]} <span>${date}</span>`;
}

function scale(num, in_min, in_max, out_min, out_max) {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

setTime();
setInterval(setTime, 1000);
