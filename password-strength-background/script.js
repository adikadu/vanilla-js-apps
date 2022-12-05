const bgImgEl = document.querySelector(".bg-img");
const passwordEl = document.querySelector("#password");
let passwordLength;

passwordEl.addEventListener("input", (e) => {
  passwordLength = e.target.value.length;
  if (passwordLength > 6) return;
  bgImgEl.style.filter = `blur(${6 - passwordLength}px)`;
});
