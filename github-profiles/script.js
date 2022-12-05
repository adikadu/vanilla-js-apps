const APIURL = "https://api.github.com/users/";

const inputEl = document.querySelector("input");
const formEl = document.querySelector("form");
const containerEl = document.querySelector(".container");

containerEl.innerHTML = "";

async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username);
    return data;
  } catch (error) {
    throw error;
  }
}

async function getUserRepos(username) {
  try {
    const reposData = await axios(APIURL + username + "/repos?sort=created");
    return reposData.data.slice(0, 5);
  } catch (error) {
    throw error;
  }
}

function renderContainer(markUp) {
  containerEl.innerHTML = "";
  containerEl.insertAdjacentHTML("afterbegin", markUp);
}

function fadeAndRemove() {
  const fadeInterval = setInterval(() => {
    containerEl.firstElementChild.style.opacity = `${
      +containerEl.firstElementChild.style.opacity - 0.05
    }`;
    if (!+containerEl.firstElementChild.style.opacity)
      clearInterval(fadeInterval);
  }, 99);
  setTimeout(() => (containerEl.innerHTML = ""), 2000);
}

formEl.addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = inputEl.value;
  inputEl.value = "";
  if (!username) return;
  let userData = "";
  let repoList = "";
  try {
    userData = await getUser(username);
  } catch (error) {
    markUp = `
    <p class="user-not-found" style="opacity: 1">No profile with username: ${username}</p>
    `;
    renderContainer(markUp);
    fadeAndRemove();
    return;
  }
  try {
    const userRepos = await getUserRepos(username);
    repoList = "";
    repoList = userRepos
      .map(
        (repo) =>
          `<li><a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">${repo.name}</a></li>`
      )
      .join("");
  } catch (error) {
    markUp = `
    <p class="user-not-found">Some Error occured...</p>
    `;
    renderContainer(markUp);
    fadeAndRemove();
    return;
  }
  if (userData && repoList) {
    markUp = `
      <div class="user-info">
        <img
        class="user-img"
        src="${userData.avatar_url}"
        alt="${userData.name} profile picture"
        />
        <div class="user-desc">
          <h2 class="user-name">${userData.name}</h2>
          <p class="user-bio">${userData.bio}</p>
          <div class="user-stats">
            <span class="user-followers">${userData.followers} Followers</span>
            <span class="user-following">${userData.following} Following</span>
            <span class="user-repo">${userData.public_repos} Repos</span>
          </div>
          <ul class="user-projects">${repoList}</ul>
        </div>
      </div>
    `;
    renderContainer(markUp);
  } else return;
});
