const downArrowsEl = document.querySelectorAll(".font-awesome-icon");

downArrowsEl.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    const question = e.target.closest(".question");
    if (question.classList.contains("active")) {
      question.classList.remove("active");
      e.target.classList.add("fa-solid", "fa-chevron-down");
      e.target.classList.remove("fas", "fa-times");
    } else {
      question.classList.add("active");
      e.target.classList.remove("fa-solid", "fa-chevron-down");
      e.target.classList.add("fas", "fa-times");
    }
  });
});
