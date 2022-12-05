const usersEl = document.querySelector(".users");
const searchEl = document.querySelector(".inp-search");

searchEl.value = "";

async function getData() {
  const res = await fetch("https://randomuser.me/api?results=50");
  const { results } = await res.json();
  const allUsers = results
    .map(
      (result) =>
        `<div class="user">
            <img
              src="${result.picture.large}"
              alt="${result.name.first} ${result.name.last}'s picture"
            />
            <div class="user-info">
              <h3 class="user-name">${result.name.first} ${result.name.last}</h3>
              <div class="user-location">
                <span class="user-city">${result.location.city}</span>,
                <span class="user-country">${result.location.country}</span>
              </div>
            </div>
        </div>`
    )
    .join("");
  usersEl.innerHTML = allUsers;
}

getData();

searchEl.addEventListener("input", (e) => {
  // if (!e.target.value) return;
  filterData(e.target.value);
});

function filterData(searchTerm) {
  const lowerSearchTerm = searchTerm.toLowerCase();
  const allUsers = document.querySelectorAll(".user");
  allUsers.forEach((user) => {
    if (
      user
        .querySelector(".user-name")
        .textContent.toLowerCase()
        .includes(lowerSearchTerm) ||
      user
        .querySelector(".user-city")
        .textContent.toLowerCase()
        .includes(lowerSearchTerm) ||
      user
        .querySelector(".user-country")
        .textContent.toLowerCase()
        .includes(lowerSearchTerm)
    ) {
      user.classList.remove("hide");
    } else {
      user.classList.add("hide");
    }
  });
}
