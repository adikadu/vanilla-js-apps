const countersEl = document.querySelectorAll(".counter");

countersEl.forEach((counter) => {
  const maxCount = +counter.dataset.num;
  const duration = 5;
  const numSteps = 200;
  const increment = Math.floor(maxCount / numSteps);
  let currCount = 0;
  const interval = setInterval(() => {
    counter.innerHTML = currCount;
    currCount += increment;
    if (currCount >= maxCount) {
      counter.innerHTML = maxCount;
      clearInterval(interval);
    }
  }, duration);
});
