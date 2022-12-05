const cardsEl = document.querySelector(".cards");
const cardEls = document.querySelectorAll(".card");

cardsEl.addEventListener("click", (e) => {
  const element = e.target.closest(".card");
  if (!element) return;
  cardEls.forEach((ele) => ele.classList.remove("active"));
  element.classList.add("active");
});
