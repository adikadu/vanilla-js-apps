const numsEl = document.querySelectorAll(".num");

numsEl.forEach((num) => (num.value = ""));
numsEl[0].focus();

numsEl.forEach((num, idx) => {
  num.addEventListener("input", (e) => {
    if (!e.target.value) {
      e.target.classList.remove("inserted");
      return;
    }
    if (+e.target.value >= 0 && +e.target.value <= 9) {
      e.target.classList.add("inserted");
    }
    if (idx <= numsEl.length - 2) numsEl[idx + 1].focus();
  });
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Backspace") {
    let focusIdx;
    numsEl.forEach((num, idx) => {
      if (num === document.activeElement) focusIdx = idx;
    });
    // console.log("focusIdx", focusIdx);
    if (focusIdx) numsEl[focusIdx - 1].focus();
  }
});
