heroEl = document.querySelector(".hero");
navEl = document.querySelector("nav");

const observer = new IntersectionObserver(
  (entries) => {
    [entry] = entries;
    if (!entry.isIntersecting) navEl.classList.add("sticky");
    else navEl.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0.5,
  }
);

observer.observe(heroEl);
