const contentBoxesEl = document.querySelectorAll(".content-box");

window.addEventListener("scroll", scrollBox);

scrollBox();

function scrollBox() {
  const triggerPoint = (window.innerHeight / 5) * 4;
  contentBoxesEl.forEach((box) => {
    if (box.getBoundingClientRect().top < triggerPoint)
      box.classList.add("show");
    else box.classList.remove("show");
  });
}
