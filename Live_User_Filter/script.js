const result = document.getElementById("result");
const filter = document.getElementById("filter");
const listItems = [];

async function getData() {
  const res = await fetch("https://randomuser.me/api?results=50");
  const { results } = await res.json();

  results.innerHTML = "";
  results.forEach((user) => {
    console.log(user);
  });
}

getData();
