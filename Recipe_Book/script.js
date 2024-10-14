const ApiKey = "af9f58a2b7444c4ebb81749f55532fc4";
const recipeListEl = document.getElementById("recipe-list");
console.log(recipeListEl);

function displayRecipes(recipes) {
  recipeListEl.innerHTML = "";
  recipes.forEach((e) => {
    const recipeItemEl = document.createElement("li");
    recipeItemEl.classList.add("recipe-item");
    recipeImageEl = document.createElement("img");
    recipeImageEl.src = e.image;
    recipeImageEl.alt = "recipe image";
    recipeTitleEl = document.createElement("h2");
    recipeTitleEl.innerText = e.title;
    recipeIngredientsEl = document.createElement("p");
    recipeItemEl.appendChild(recipeImageEl);
    recipeItemEl.appendChild(recipeTitleEl);
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
