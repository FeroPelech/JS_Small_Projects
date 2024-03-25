const result = document.getElementById("result");
const filter = document.getElementById("filter");
const listItems = [];

async function getDuta() {
  const name = await fetch("https://randomuser.me/api?results=50");
  const datafromfetch = await name.json();

  datafromfetch.results.forEach((element) => {
    const li = document.createElement("li");
    listItems.push(li);
    li.innerHTML = `
      <img src="${element.picture.large}" alt="${element.name.first}">
      <div class="user-info">
        <h4>"${element.name.first} ${element.name.last}"</h4>
        <p>"${element.location.city}, ${element.location.country}"</p>
      </div>
      `;

    result.appendChild(li);
  });
}

getDuta();
