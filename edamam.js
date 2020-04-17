class Edamam {
  constructor(){
    this.api_id = 'c5d07ea7';
    this.api_key = '0906a6996cc319c5b07704f0e825834a';
  }

  async getRecipe(choice){
    const recipeResponse = await fetch(`https://api.edamam.com/search?q=${choice}&app_id=${this.api_id}&app_key=${this.api_key}&from=0&to=12`);

    const recipe = recipeResponse.json();
    return recipe;
  }
}