const buttonEl = document.querySelector("button");
const inputEl = document.querySelector(".input_field");
const formEl = document.querySelector("form");

buttonEl.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log("I got clicked");
  inputEl.value = "";
  inputEl.classList.toggle("active");
});

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("I am here!!!");
  // console.log("e.value", e);
});
