const navEl = document.querySelector("nav");
const headerEl = document.querySelector("header");
const containerEl = document.querySelector(".container");
const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".form input");

const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_URL =
  "https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=";

inputEl.value = "";

///////////////////////////////////////
// Sticky top navigation
///////////////////////////////////////
const navHeight = navEl.getBoundingClientRect().height;
const headerObserver = new IntersectionObserver(
  (entries) => {
    const [entry] = entries;
    if (!entry.isIntersecting) {
      setTimeout(() => {
        headerEl.style.paddingBottom = `${
          navEl.getBoundingClientRect().height
        }px`;
        navEl.classList.add("sticky");
      }, 20);
    } else {
      navEl.classList.remove("sticky");
      headerEl.style.paddingBottom = "0";
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: `-${navEl.getBoundingClientRect().height}px`,
  }
);

headerObserver.observe(headerEl);

///////////////////////////////////////
// Render initial movies on DOM
///////////////////////////////////////
window.addEventListener("load", async (e) => {
  renderSpinningWheel();
  let movieInfo;
  movieInfo = await getResFromApi();
  renderMovie(movieInfo);
});

///////////////////////////////////////
// Implement search functionality
///////////////////////////////////////
formEl.addEventListener("submit", async (e) => {
  e.preventDefault();
  const inputVal = inputEl.value;
  inputEl.value = "";
  renderSpinningWheel();
  const movieInfo = await getResFromApi(inputVal);
  renderMovie(movieInfo);
});

async function getResFromApi(searchValue) {
  let res;
  if (!searchValue) res = await fetch(API_URL);
  else res = await fetch(SEARCH_URL + searchValue);
  const data = await res.json();
  const movieInfo = [];
  data.results.forEach((movie) => {
    const { title, vote_average, overview, poster_path } = movie;
    if (title === "Horror ")
      console.log("see image URL of this:", SEARCH_URL + poster_path);
    movieInfo.push({ title, vote_average, overview, poster_path });
  });
  return movieInfo;
}

function getRatingColor(rating) {
  if (rating <= 3) return "red";
  if (rating <= 7) return "orange";
  return "green";
}

function renderSpinningWheel() {
  const markUp = `
  <img class="loading-spinner" src="./Settings.gif" alt="">
  `;
  containerEl.innerHTML = "";
  containerEl.insertAdjacentHTML("beforeend", markUp);
}

function removeSpinningWheel() {
  containerEl.innerHTML = "";
}

function renderMovie(movieInfo) {
  removeSpinningWheel();
  movieInfo.forEach((movie) => {
    const markUp = `
    <div class="card">
      <img src="${IMG_PATH + movie.poster_path}" alt="${movie.title}" />
        <div class="movie-info">
          <p class="movie-title">${movie.title}</p>
          <span class="movie-rating ${getRatingColor(+movie.vote_average)}">${
      movie.vote_average
    }</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>
          <p>
            ${movie.overview}
          </p>
        </div>
    </div>
  `;
    containerEl.insertAdjacentHTML("beforeend", markUp);
  });
}
