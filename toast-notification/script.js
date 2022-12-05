buttonEl = document.querySelector("button");
tosterEl = document.querySelector(".toster");
num = ["one", "two", "three"];
color = ["purple", "green", "red"];
const typeMessages = num.length;

buttonEl.addEventListener("click", (e) => {
  const randomNum = Math.floor(Math.random() * typeMessages);
  markUp = `
  <p class="${color[randomNum]}" style="opacity: 1;">Notification ${num[randomNum]}</p>
  `;
  tosterEl.insertAdjacentHTML("beforeend", markUp);
  const lastChild = tosterEl.lastElementChild;
  setTimeout(() => {
    const gradualOpacityChange = setInterval(
      () => (lastChild.style.opacity = `${+lastChild.style.opacity - 0.05}`),
      100
    );
  }, 1000);
  if (!+lastChild.style.opacity) clearInterval(gradualOpacityChange);
  setTimeout(() => lastChild.remove(), 3000);
});
