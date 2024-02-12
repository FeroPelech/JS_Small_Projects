const APIURL = "https://api.github.com/users/";

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

async function getUser(userName) {
  try {
    const { data } = await axios(APIURL + userName);
    createUserCard(data);
    getRepos(userName);
  } catch (err) {
    if (err.response.status == 404) {
      createErrorCard("No profile with this username");
    }
    console.log(err);
  }
}

async function getRepos(userName) {
  try {
    const { data } = await axios(APIURL + userName + "/repos");
    createUserRepos(data);
  } catch (err) {
    createErrorCard("Problem with fetching repos");
    console.log(err);
  }
}

function createUserCard(user) {
  const cardHTML = `        
  <div class="card">
    <div>
      <img src="${user.avatar_url}" alt="user picture" class="avatar">
    </div>
    <div class="user-info">
      <h2>${user.name}</h2>
      <p>${user.bio}</p>
      <ul>
          <li>${user.followers} <strong> Followers </strong>, </li>
          <li>${user.following} <strong> Following </strong>, </li>
          <li>${user.public_repos}<strong> Repos </strong> </li>
      </ul>
      <div id="repos">
      </div>
    </div>
  </div>`;

  main.innerHTML = cardHTML;
}

function createErrorCard(msg) {
  const cardHTML = `
    <div class = "card">
      <h1>${msg}</h1>
    </div>
  `;

  main.innerHTML = cardHTML;
}

function createUserRepos(repos) {
  const reposE = document.getElementById("repos");
  repos.forEach((element) => {
    const repoE = document.createElement("a");
    repoE.classList.add("repo");
    repoE.href = element.html_url;
    repoE.target = "_blank";
    repoE.innerText = element.name;
    reposE.appendChild(repoE);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value;

  if (user) {
    getUser(user);
    search.value = "";
  }
});
