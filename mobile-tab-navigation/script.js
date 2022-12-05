const contentEl = document.querySelectorAll(".content");
const barEl = document.querySelectorAll(".bar");

barEl.forEach((bar) => {
  bar.addEventListener("click", (e) => {
    const ele = e.target.closest(".bar");
    imgAlt = ele.querySelector("span").innerHTML.split(" ")[0].toLowerCase();
    removeShow();
    document.querySelector(`[alt='${imgAlt}']`).classList.add("show");
    ele.classList.add("show");
  });
});

function removeShow() {
  contentEl.forEach((content) => content.classList.remove("show"));
  barEl.forEach((bar) => bar.classList.remove("show"));
}
