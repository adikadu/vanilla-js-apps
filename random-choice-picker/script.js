const tagsEl = document.querySelector(".tags");
const textareaEl = document.querySelector(".textarea");

textareaEl.focus();

let currText = "",
  prevKey = "",
  reset = false;

textareaEl.addEventListener("keyup", (e) => {
  if (reset) {
    tagsEl.innerHTML = "";
    reset = false;
  }
  if (e.key === "," || e.key === "Enter") {
    prevKey = e.key;
    return;
  }
  currText = textareaEl.value.split(",").slice(-1)[0].trim();
  if (!currText) return;

  if (prevKey === ",") {
    tagsEl.insertAdjacentHTML(
      "beforeend",
      `<span class="tag">${currText}</span>`
    );
  } else {
    if (!tagsEl.children.length) {
      tagsEl.insertAdjacentHTML(
        "beforeend",
        `<span class="tag">${currText}</span>`
      );
    } else {
      tagsEl.lastChild.innerHTML = currText;
    }
  }
  prevKey = e.key;
});

document.addEventListener("keyup", (e) => {
  if (e.key !== "Enter") return;
  textareaEl.value = "";
  reset = true;
  const numChildren = tagsEl.children.length;
  if (!numChildren) return;
  let prevChild = -1,
    currChild = -1;
  let times = generateRandomNumber(5, 15);
  setInterval(() => {
    if (times <= 0) return;
    times--;
    if (prevChild >= 0)
      tagsEl.children[prevChild].classList.remove("changeBgColor");
    currChild = generateRandomNumber(0, numChildren);

    tagsEl.children[currChild].classList.add("changeBgColor");
    prevChild = currChild;
  }, 100);
});

const generateRandomNumber = function (min, max) {
  return min + Math.floor(Math.random() * (max - min));
};
