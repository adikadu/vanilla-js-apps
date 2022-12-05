const contentEl = document.querySelector(".content");
const speedInp = document.querySelector(".speed-inp");

const text = "We Love Programming!";
let currIdx = 0;
let speed = 1;
let interval = null;

speedInp.value = "1";

speedInp.addEventListener("change", (e) => {
  speed = +speedInp.value;
  speedChange();
});

function speedChange() {
  clearInterval(interval);
  interval = setInterval(() => {
    if (currIdx === text.length) {
      contentEl.innerHTML = "";
      currIdx = 0;
    }
    contentEl.innerHTML += text[currIdx];
    currIdx++;
  }, 500 / speed);
}

speedChange();
