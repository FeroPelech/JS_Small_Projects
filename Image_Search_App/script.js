const accessKey = "H7Fcd2yiW1ghvxyLvcphv1Q4S8ijjaHkZfWV06hSxLo";
const formEl = document.querySelector("form");
const searchInputEl = document.getElementById("search-input");
const searchResultsEl = document.getElementById(".search-results");
const showMoreBtn = document.getElementById("show-more-button");

let inputData = "";
let page = 1;

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
});

async function searchImages() {
  inputData = searchInputEl.value;
  const url = `https://api.unsplash.com/search/${accessKey}?page=1&query=${inputData}`;
  const res = await fetch(url);
  const data = await res.json();
  if (page === 1) {
    searchResultsEl.innerHTML = "";
  }
  const results = data.results;
  console.log(results);
}
