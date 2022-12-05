const counterEl = document.querySelector(".counter");

counterEl.innerHTML = `
  <h2>Go</h2>
  <button class="replay">Replay</button>
`;

counterEl.addEventListener("click", (e) => {
  if (!e.target.classList.contains("replay")) return;
  let count = 3;
  const interval = setInterval(() => {
    if (!count) {
      clearInterval(interval);
    }
    const markUp = `
    <h2 class="rotate">${count}</h2>
    <h3>Get Ready</h3>
    `;
    counterEl.innerHTML = markUp;
    count--;
  }, 1010);
  setTimeout(() => {
    counterEl.innerHTML = `
        <h2>Go</h2>
        <button class="replay">Replay</button>
      `;
  }, 5060);
});
