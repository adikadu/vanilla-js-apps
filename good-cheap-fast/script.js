const toggles = document.querySelectorAll(".toggle");
const good = document.querySelector("#good");
const cheap = document.querySelector("#cheap");
const fast = document.querySelector("#fast");

function doTheTrick(currEle) {
  if (good.checked && cheap.checked && fast.checked) {
    if (currEle === good) fast.checked = false;
    if (currEle === cheap) good.checked = false;
    if (currEle == fast) cheap.checked = false;
  }
}

toggles.forEach((toggle) => {
  toggle.addEventListener("change", (e) => doTheTrick(e.target));
});
