const containerEl = document.querySelector(".container");
const ratingsEl = document.querySelector(".ratings");
const ratingEls = document.querySelectorAll(".rating");
const btnEl = document.querySelector(".btn");

ratingsEl.addEventListener("click", (e) => {
  const ele = e.target.closest(".rating");
  if (!ele) return;

  ratingEls.forEach((rating) => rating.classList.remove("selected"));
  ele.classList.add("selected");
});

btnEl.addEventListener("click", (e) => {
  let selectedRating = null;
  ratingEls.forEach((rating) => {
    if (rating.classList.contains("selected")) {
      selectedRating = rating;
      return;
    }
  });
  if (!selectedRating) return;
  setTimeout(() => {
    containerEl.innerHTML = `
      <i class="fas fa-heart"></i>
      <span class="thanks">Thank You!</span>
      <span class="feedback">Feedback: ${selectedRating.innerText}</span>
      <p class="final-note">
        We'll use your feedback to improve our customer support
      </p>
    `;
    // console.log("containerEl.children", containerEl.children);
    Array.from(containerEl.children).forEach(
      (child) => (child.style.transform = "rotateY(180deg)")
    );
  }, 200);
  containerEl.innerHTML = "";
  containerEl.style.transform = "rotateY(180deg)";
});
