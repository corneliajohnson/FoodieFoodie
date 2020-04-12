class Spoonacular {
  constructor(){
    this.key = '5b3ba4275d524c1cb67cd1fb269db0e9';
    this.recipe_count = 5;
    this.amount = 1;
  }

  async getDetails(id){
  const detailResponce = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${this.key}`);
  
  const details = await detailResponce.json();
  return details;
  }

  async getRecipe(choice){
    const recipeResponse = await fetch(`https://api.spoonacular.com/recipes/search?apiKey=${this.key}&number=${this.amount}&query=${choice}`);


    const recipe = recipeResponse.json();
    return recipe;
  }
}