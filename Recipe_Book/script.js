const ApiKey = "af9f58a2b7444c4ebb81749f55532fc4";

async function getRecipes() {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?number=10&apiKey=${ApiKey}`
  );
  const data = await response.json();
  return data;
}

async function init() {
  const recipes = await getRecipes();
  console.log(recipes);
}

init();
