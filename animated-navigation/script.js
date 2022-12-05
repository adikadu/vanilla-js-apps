const navEl = document.querySelector(".nav");
const btnEl = document.querySelector(".nav button");

btnEl.addEventListener("click", () => navEl.classList.toggle("active"));
