hrLineEl = document.querySelector(".horizontal-line");
btnPrevEl = document.querySelector(".btn--prev");
btnNextEl = document.querySelector(".btn--next");
circleEl = document.querySelectorAll(".circle");

let currStep = 1;
const numCircles = circleEl.length;

btnPrevEl.addEventListener("click", (e) => {
  if (currStep === 1) return;
  if (currStep === 2) btnPrevEl.disabled = true;
  if (currStep === 4) btnNextEl.disabled = false;
  document.querySelector(`.circle--${currStep}`).classList.remove("active");
  currStep--;
  hrLineEl.style.width = `${((currStep - 1) / (numCircles - 1)) * 100}%`;
});

btnNextEl.addEventListener("click", (e) => {
  if (currStep === 4) return;
  if (currStep === 3) btnNextEl.disabled = true;
  if (currStep === 1) btnPrevEl.disabled = false;
  currStep++;
  document.querySelector(`.circle--${currStep}`).classList.add("active");
  hrLineEl.style.width = `${((currStep - 1) / (numCircles - 1)) * 100}%`;
});
