const veganButton = document.querySelector("#vegan-btn");
const highproteinButton = document.querySelector("#highprotein-btn");
const dessertButton = document.querySelector("#dessert-btn");

const recipesList = document.querySelector(".recipes-list");
const searchRecipe = async (searchTerm) => {
  const url = `https://student-api-proxy.onrender.com/api/spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=${searchTerm}&number=1`;
  const options = {
    method: "GET",
    headers: {
      "X-API-Key":
        "b87763accfa78dbfe3d067630244d5bbfef26bd4f7f6e025331721ab94a4e826",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();
  const data = result.data;
  const recipe = data.recipes[0]; //grabs the first recipe everytime

  recipesList.innerHTML = "";

  // console.log(data);

  let listItem = `<li class="list-group-item">
        <h4>RECIPE:</h4>
        <div class="recipe-title">${recipe.title}</div>`;
  recipe.extendedIngredients.forEach((ingredient) => {
    listItem += `<div class="recipe-ingredients">${ingredient.name}</div>`;
  });
  listItem += `<div class="recipe-instructions">${recipe.instructions} </div>`;
  recipesList.insertAdjacentHTML("beforeend", listItem);
  // resultsDiv.innerHTML += `<p>${recipe.title}</p>`;
  console.log(recipe);
};

// searchRecipe("dessert");
// searchRecipe("vegan");
// searchRecipe("high protein");

veganButton.addEventListener("click", (event) => {
  event.preventDefault();
  searchRecipe("Vegan"); //valid call
});
highproteinButton.addEventListener("click", (event) => {
  event.preventDefault();
  searchRecipe("High Protein"); //valid call
});
dessertButton.addEventListener("click", (event) => {
  event.preventDefault();
  searchRecipe("Dessert"); //valid call
});
