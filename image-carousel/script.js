const imgsEl = document.querySelectorAll(".images img");
const prevBtn = document.querySelector(".btn--prev");
const nextBtn = document.querySelector(".btn--next");

let current = 0;
let total = imgsEl.length;

moveSlider();

let interval = setInterval(() => {
  current++;
  current = (total + current) % total;
  moveSlider();
}, 2000);

prevBtn.addEventListener("click", (e) => {
  resetInterval();
  current--;
  current = (total + current) % total;
  moveSlider();
});

nextBtn.addEventListener("click", (e) => {
  resetInterval();
  current++;
  current = (total + current) % total;
  moveSlider();
});

function moveSlider() {
  imgsEl.forEach((img, idx) => {
    img.style.transform = `translateX(${100 * (idx - current)}%)`;
  });
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(() => {
    current++;
    current = (total + current) % total;
    moveSlider();
  }, 2000);
}
