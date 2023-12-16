var searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener("click", function () {
  var inputValue = document.querySelector(".search-input");
  fetchNutrient(inputValue.value);
  fetchRecipe(inputValue.value);
});
function fetchNutrient(foodName) {
  //need to change to website API
  // var requestNutrientAPI = `https://api.edamam.com/api/food-database/v2/parser?app_id=f02972e7&app_key=%203d2353afd7e7eccce279b9f2bb359688&ingr=${encodeURIComponent(foodName)}&nutrition-type=cooking
  // `
  var requestNutrientAPI = "./parser.json";
  fetch(requestNutrientAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(displayNutrient(data));
      var list = document.querySelector(".list");
      list.textContent = displayNutrient(data);
    });
}
function displayNutrient(data) {
  // console.log(data);
  // console.log(data.parsed[0].food.nutrients);
  var nutrients = data.parsed[0].food.nutrients;
  var stringToReturn = "";
  for (var element in nutrients) {
    console.log(`${element}: ${nutrients[element]}`);
    stringToReturn += `${element}: ${nutrients[element]}`;
  }
  return stringToReturn;
}
function fetchRecipe(foodName) {
  // var requestRecipeAPI = `https://api.edamam.com/api/recipes/v2?type=public&q=${encodeURIComponent(foodName)}&app_id=b0397868&app_key=b083fe11c75b3ec3ced354721c0c0f4e`;
  var requestRecipeAPI = "./recipe.json";
  fetch(requestRecipeAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data);
      var recipes = recipeLinks(data);
      var recipeLinkEl = document.querySelector(".recipe-link");
      recipeLinkEl.setAttribute("href", recipes);
    });
}
function recipeLinks(data) {
  // console.log(data.hits[0].recipe.url);
  var recipe = data.hits[0].recipe.url;
  return recipe;
}
