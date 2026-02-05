const url = `https://student-api-proxy.onrender.com/api/spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=vegetarian%2Cdessert&number=1`;
const options = {
  method: "GET",
  headers: {
    "X-API-Key":
      "b87763accfa78dbfe3d067630244d5bbfef26bd4f7f6e025331721ab94a4e826",
  },
};

const searchRecipe = async (searchTerm) => {
  const url = `https://student-api-proxy.onrender.com/api/spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=${searchTerm}&number=1`;
  const options = {
    method: "GET",
    headers: {
      "X-API-Key":
        "b87763accfa78dbfe3d067630244d5bbfef26bd4f7f6e025331721ab94a4e826",
    },
  };

  // const response = await fetch(url, options);
  // const result = await response.json();
  const data = getSampleRecipe(); //result.recipe;
  const recipes = data.recipes;

  console.log(data);

  recipes.forEach((recipe) => {
    // resultsDiv.innerHTML += `<p>${recipe.title}</p>`;
    console.log(recipe);
  });
};

searchRecipe("dessert");
