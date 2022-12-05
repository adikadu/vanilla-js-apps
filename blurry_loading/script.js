const bgImgEl = document.querySelector(".bg");
const percentEl = document.querySelector(".percent");

window.addEventListener("load", (e) => {
  bgImgEl.style.filter = `blur(${0}px)`;
  getPercentChanger();
});

function getPercentChanger() {
  for (let i = 0; i <= 101; i++) {
    setTimeout(() => {
      percentEl.style.opacity = `${1 - (1 / 150) * i}`;
      if (i === 101) percentEl.style.display = "none";
      percentEl.innerHTML = `${i}%`;
    }, 40 * i);
  }
}
