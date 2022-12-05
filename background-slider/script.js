const imgs = document.querySelectorAll(".img");
const lftBtn = document.querySelector(".btn--lft");
const rtBtn = document.querySelector(".btn--rt");
const bodyEl = document.querySelector("body");

const currentImg = [
  "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80",
  "https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  "https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80",
  "https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
];

let currentActive = 0;

lftBtn.addEventListener("click", () => {
  currentActive = (4 + currentActive) % 5;
  imgs.forEach((img) => {
    img.style.transform = `translateX(${
      (+img.dataset.num - currentActive) * 100
    }%)`;
  });
  bodyEl.style.backgroundImage = `linear-gradient(
    to right bottom,
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.1)
  ),
  url("${currentImg[currentActive]}")`;
});

rtBtn.addEventListener("click", () => {
  currentActive = (currentActive + 1) % 5;
  imgs.forEach((img) => {
    img.style.transform = `translateX(${
      (+img.dataset.num - currentActive) * 100
    }%)`;
  });
  bodyEl.style.backgroundImage = `linear-gradient(
    to right bottom,
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0.2)
  ),
  url("${currentImg[currentActive]}")`;
});
