const accessKey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";
const formEl = document.querySelector("form");
const searchInputEl = document.getElementById("search-input");
const searchResultsEl = document.getElementById(".search-results");
const showMoreBtn = document.getElementById("show-more-button");

let inputData = "";
let page = 1;

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  searchImages();
});

function searchImages() {
  inputData = searchInputEl.value;
}
