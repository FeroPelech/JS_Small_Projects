const ApiKey = "af9f58a2b7444c4ebb81749f55532fc4";
const recipeListEl = document.getElementById("recipe-list");

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
    recipeIngredientsEl.innerHTML = `<strong>Ingredients:</strong> ${e.extendedIngredients
      .map((ingredient) => ingredient.original)
      .join(", ")}`;
    recipeLinkEl = document.createElement("a");
    recipeLinkEl.href = e.sourceUrl;
    recipeLinkEl.innerText = "View Recipe";
    recipeItemEl.appendChild(recipeImageEl);
    recipeItemEl.appendChild(recipeTitleEl);
    recipeItemEl.appendChild(recipeIngredientsEl);
    recipeItemEl.appendChild(recipeLinkEl);
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
  displayRecipes(recipes);
}

init();
