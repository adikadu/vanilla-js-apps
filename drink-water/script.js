const smallGlassesEl = document.querySelector(".small-glasses");
const waterLengthEl = document.querySelector(".water-length");
const allSmallGlasses = document.querySelectorAll(".small-glass");
const numLitersEl = document.querySelector(".num-liters");

const numSmallGlasses = 8;
const heightBigGlass = 340;
const increasePerSmallGlass = 100 / numSmallGlasses;
const heightPerSmallGlass = heightBigGlass / numSmallGlasses;
const smallGlassLen = 0.25;

waterLengthEl.style.visibility = "hidden";

smallGlassesEl.addEventListener("click", (e) => {
  const smallglass = e.target.closest(".small-glass");
  if (!smallglass) return;
  const smallGlassNumber = +smallglass.dataset.num;
  if (smallglass.classList.contains("filled")) {
    let highestGlassfilled = smallGlassNumber;
    let currGlass = 0;
    allSmallGlasses.forEach((glass) => {
      currGlass = +glass.dataset.num;
      if (currGlass <= smallGlassNumber) return;
      if (glass.classList.contains("filled")) highestGlassfilled = currGlass;
      glass.classList.remove("filled");
    });
    if (highestGlassfilled === smallGlassNumber)
      smallglass.classList.remove("filled");
  } else {
    allSmallGlasses.forEach((glass) => {
      if (+glass.dataset.num > smallGlassNumber) return;
      glass.classList.add("filled");
    });
  }
  let numSmGlassesFilled = 0;
  allSmallGlasses.forEach((glass) => {
    if (glass.classList.contains("filled")) numSmGlassesFilled++;
  });
  const waterLen = increasePerSmallGlass * numSmGlassesFilled;
  waterLengthEl.innerHTML = `${waterLen}%`;
  if (waterLen >= 12.5) waterLengthEl.style.visibility = "visible";
  if (waterLen === 0) waterLengthEl.style.visibility = "hidden";
  waterLengthEl.style.height = `${heightPerSmallGlass * numSmGlassesFilled}px`;
  numLitersEl.innerHTML = `${2 - smallGlassLen * numSmGlassesFilled}L`;
});
