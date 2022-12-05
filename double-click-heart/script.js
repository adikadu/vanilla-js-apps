const imageEl = document.querySelector(".image");
const timesEl = document.querySelector(".times");

let numTimes = 0;
let clickTime = Date.now();

// function increaseSizeAndFade(element) {
//   const interval = setInterval(() => {
//     element.style.fontSize = `${+element.style.fontSize.slice(0, -2) + 10}px`;
//     element.style.opacity = `${+element.style.opacity - 0.05}`;
//     if (!+element.style.opacity) {
//       element.remove();
//       clearInterval(interval);
//     }
//   }, 50);
// }

// imageEl.addEventListener("dblclick", (e) => {
//   const imageEvent = e.target.closest(".image");
//   if (!imageEvent) return;
//   numTimes++;
//   timesEl.innerHTML = numTimes;
//   const posInsideX = e.clientX - imageEvent.offsetLeft;
//   const posInsideY = e.clientY - imageEvent.offsetTop;
//   const markUp = `
//   <i class="fas fa-heart" style="top: ${posInsideY}px; left: ${posInsideX}px;"></i>
//   `;
//   imageEl.insertAdjacentHTML("afterbegin", markUp);
//   const currChild = imageEl.firstElementChild;
//   // increaseSizeAndFade(imageEl.firstElementChild);
//   setTimeout(() => {
//     currChild.remove();
//   }, 1000);
// });

imageEl.addEventListener("click", (e) => {
  if (Date.now() - clickTime <= 800) {
    const imageEvent = e.target.closest(".image");
    if (!imageEvent) return;
    timesEl.innerHTML = ++numTimes;
    const posInsideX = e.clientX - imageEvent.offsetLeft;
    const posInsideY = e.clientY - imageEvent.offsetTop;
    const markUp = `
  <i class="fas fa-heart" style="top: ${posInsideY}px; left: ${posInsideX}px;"></i>
  `;
    imageEl.insertAdjacentHTML("afterbegin", markUp);
    const currChild = imageEl.firstElementChild;
    // increaseSizeAndFade(imageEl.firstElementChild);
    setTimeout(() => {
      currChild.remove();
    }, 1000);
  }
  clickTime = Date.now();
});
