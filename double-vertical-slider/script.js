imgsEl = document.querySelectorAll(".slides-img img");
textBoxsEl = document.querySelectorAll(".text-area");
btnUpEl = document.querySelector(".btn--up");
btnDownEl = document.querySelector(".btn--down");

let currSlideNum = 0;
const ttlSlides = imgsEl.length;

function slideImgs() {
  imgsEl.forEach(
    (img, idx) =>
      (img.style.transform = `translateY(${(idx - currSlideNum) * 100}vh)`)
  );
}

function slideTextBoxes() {
  textBoxsEl.forEach(
    (textBox, idx) =>
      (textBox.style.transform = `translateY(${(currSlideNum - idx) * 100}vh)`)
  );
}

btnUpEl.addEventListener("click", (e) => {
  currSlideNum++;
  currSlideNum %= ttlSlides;
  slideImgs();
  slideTextBoxes();
});

btnDownEl.addEventListener("click", (e) => {
  currSlideNum--;
  currSlideNum += ttlSlides;
  currSlideNum %= ttlSlides;
  slideImgs();
  slideTextBoxes();
});

slideImgs();
slideTextBoxes();
