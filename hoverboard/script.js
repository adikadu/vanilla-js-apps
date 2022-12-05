const containerEl = document.querySelector(".container");
const bgColors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];

for (let i = 0; i < 357; i++) {
  const dotEl = document.createElement("div");
  dotEl.classList.add("dot");
  containerEl.insertAdjacentElement("beforeend", dotEl);
  dotEl.addEventListener("mouseover", (e) => {
    const color = Math.floor(Math.random() * bgColors.length);
    e.target.style.backgroundColor = bgColors[color];
    e.target.style.boxShadow = `0 0 5px ${bgColors[color]}  `;
  });
  dotEl.addEventListener("mouseout", (e) => {
    e.target.style.backgroundColor = "rgb(59, 58, 58)";
    e.target.style.boxShadow = `0 0 5px rgba(0, 0, 0, 0.3)`;
  });
}
