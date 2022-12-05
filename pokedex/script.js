const cardsEl = document.querySelector(".cards");
const URL = "https://pokeapi.co/api/v2/pokemon/";

let res, data, markUp;
const promisesArr = [];

const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
  ghost: "#f5deb3",
  ice: "#F5FEFD",
};

for (let i = 1; i <= 150; i++) promisesArr.push(fetch(URL + i));

(async () => {
  let responses = await Promise.all(promisesArr);
  responses = responses.map((res) => res.json());
  allData = await Promise.all(responses);
  console.log("allData", allData);
  allData.forEach((data, idx) => {
    markUp = `
      <div class="card" style="background-color: ${
        colors[data.types[0].type.name]
      };">
        <div class="img-container">
          <img
            src="${data.sprites.front_default}"
            alt="pokemon ${(idx + 1).toString().padStart(3, "0")}"
          />
        </div>
        <span class="srNo">#${(idx + 1).toString().padStart(3, "0")}</span>
        <p class="name">${data.name}</p>
        <p class="type">Type: <span>${data.types[0].type.name}</span></p>
      </div>
    `;
    cardsEl.insertAdjacentHTML("beforeend", markUp);
  });
})();
