const jokeBtnEl = document.querySelector(".get-joke-btn");
const jokeEl = document.querySelector(".joke");

jokeBtnEl.addEventListener("click", async () => {
  const res = await fetch("https://icanhazdadjoke.com", {
    headers: {
      Accept: "application/json",
    },
  });
  const data = await res.json();
  jokeEl.innerHTML = data.joke;
});
