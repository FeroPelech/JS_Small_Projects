const ApiKey = "af9f58a2b7444c4ebb81749f55532fc4";
const recipeListEl = document.getElementById("recipe-list");
console.log(recipeListEl);

function displayRecipes(recipes) {
  recipeListEl.innerHTML = "";
  recipes.forEach((element) => {
    const recipeItemEl = document.createElement("li");
    recipeItemEl.classList.add("recipe-item");
    recipeImageEl = document.createElement("img");

    recipeListEl.appendChild(recipeItemEl);
  });
}

async function getRecipes() {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?number=10&apiKey=${ApiKey}`
  );
  const data = await response.json();
  return data.recipes;
}

async function init() {
  const recipes = await getRecipes();
  console.log(recipes);
  displayRecipes(recipes);
}

init();
