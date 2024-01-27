const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b9a0adfcde2ed4c342e4e675fd44429d&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_URL =
  'https://api.themoviedb.org/3/search/movie?api_key=b9a0adfcde2ed4c342e4e675fd44429d&query="';

getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data.results);
}
