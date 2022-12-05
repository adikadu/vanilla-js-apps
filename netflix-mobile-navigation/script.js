const hamBurger = document.querySelector(".fa-bars");
const sildersEl = document.querySelector(".silders");
const sliderBlackEl = document.querySelector(".slider-black");
const sliderRedEl = document.querySelector(".slider-red");
const sliderWhiteEl = document.querySelector(".slider-white");
const closeEl = document.querySelector(".fa-xmark");

hamBurger.addEventListener("click", (e) => {
  sliderBlackEl.style.transform = "translateX(0%)";
  sliderBlackEl.style.transitionDelay = "0s";
  sliderRedEl.style.transform = "translateX(0%)";
  sliderRedEl.style.transitionDelay = "0.2s";
  sliderWhiteEl.style.transform = "translateX(0%)";
  sliderWhiteEl.style.transitionDelay = "0.4s";
});

closeEl.addEventListener("click", (e) => {
  sliderWhiteEl.style.transform = "translateX(-100%)";
  sliderWhiteEl.style.transitionDelay = "0s";
  sliderRedEl.style.transform = "translateX(-100%)";
  sliderRedEl.style.transitionDelay = "0.2s";
  sliderBlackEl.style.transform = "translateX(-100%)";
  sliderBlackEl.style.transitionDelay = "0.4s";
});
