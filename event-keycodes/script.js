containerEl = document.querySelector(".container");

document.addEventListener("keydown", (e) => {
  // console.log("e.code", e.code);
  // console.log("e.key", e.key);
  // console.log("e.keyCode", e.keyCode);

  const markUp = `
    <div class="style">
      <span>event.key</span>
      <p class="fixed-width">${e.key === " " ? "Space" : e.key}</p>
    </div>
    <div class="style">
      <span>event.keyCode</span>
      <p class="fixed-width">${e.keyCode}</p>
    </div>
    <div class="style">
      <span>event.code</span>
      <p class="fixed-width">${e.code}</p>
    </div>
  `;
  containerEl.innerHTML = markUp;
});
