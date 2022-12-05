const sliderEl = document.querySelector("#slider");
const labelEl = document.querySelector("label[for='slider']");

labelEl.style.left = `${sliderEl.value * 4}px`;
labelEl.textContent = sliderEl.value;

sliderEl.addEventListener("input", (e) => {
  labelEl.style.left = `${e.target.value * 4}px`;
  labelEl.textContent = e.target.value;
});
