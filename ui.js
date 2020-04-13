class UI {
  constructor() {
    this.recipeCard = document.getElementById("recipeCard");
  }

  showRecipe(choice) {
    console.log(choice);
    this.recipeCard.innerHTML = `
    <div class="card text-white bg-secondary mb-3 mt-3">
    <div id="output" class="card-header text-light text-center"><h2>${choice.title}</h2></div>
    <div class="card-body">
      <div class="row">
        <div id='foodPic' class="col">
        <img class="card-img-top" src='https://spoonacular.com/recipeImages/${choice.image}' alt="Card image cap" />
        </div>
        <div class="col">
          <h5 class"text-primary">Ingredience</h5>
          <ul id="ingredientList" style="list-style-type: none; margin: 0;padding: 0;">
          </ul>
          <h5 class="mt-3 text-info">More...</h5>
          <ul style="list-style-type: none; margin: 0;padding: 0;">
            <li id="servingPrice"></li>
            <li>Servings: ${choice.servings}</li>
            <li id="minutes">Ready in ${choice.readyInMinutes} Minutes</li>
          </ul>
          <div class="row mt-3 text-center">
          <div class="col-6">
            <a href="" id="sourceLink"><img src=https://img.icons8.com/color/30/000000/cooking.png/></a><br>
            <label for="full-recipe">Instructions</label>
          </div>
          <div class="col-6">
            <a><img src="https://img.icons8.com/color/30/000000/shopping-cart-loaded.png"/></a><br>
            <label for="shopping">Buy It!</label><br>
          </div>
        </div>
        </div>
      </div>
    </div>
      <div class="card-footer text-center"></div>
  </div>
    `;
  }

  //Insert link for recipe to UI
  showLink(id) {
    document.getElementById("sourceLink").href = id.sourceUrl;
  }

  //Insert list of ingredience to UI
  showIngredients(ingredients) {
    let output = "";
    ingredients.forEach((ingredient) => {
      output += `<li>${ingredient.original}</li>`;
    });

    document.getElementById("ingredientList").innerHTML = output;
  }

  //Insert price serving to UI
  showPrice(id) {
    document.getElementById("servingPrice").innerHTML =
      "Price per Serving $" + (id.pricePerServing / 100).toFixed(2);
  }

  //Insert diets to UI
  showDiets(id) {
    let diets = '';

    //Vegan
    if(id.vegan) {
      diets += `<img src="https://img.icons8.com/color/25/000000/vegan-symbol.png"/>`;
    }
    //Vegetarian
    if(id.vegetarian) {
      diets += `<img src="https://img.icons8.com/color/25/000000/vegetarian-mark.png"/>`
    }
    //Gluten Free
    if(id.glutenFree) {
      diets += `<img src="https://img.icons8.com/color/25/000000/no-gluten.png"/>`;
    }
    //Healthy 
    if(id.veryHealthy) {
      diets += `<img src="https://img.icons8.com/color/25/000000/leaf.png"/>`;
    }
    //Keto NEED TO FIND ICON
    // if(id.ketogenic === true) {
    //   diets += ``; 
    // }

    document.querySelector('.card-footer').innerHTML = diets;
    
  }

  //Clear Profile
  showAlert(message, className){
    //Clear ayny remaining alerts
    this.clearAlert();
    //Create alert
    const alert = document.createElement('div');
    //Add class name and message
    alert.className = className;
    //Add Text
    alert.appendChild(document.createTextNode(message));
    //Get Parent
    const container = document.querySelector('.searchContainer');
    const search = document.querySelector('.search');
    //insert alert
    container.insertBefore(alert, search);

    //timeout after 3 secs
    setTimeout(()=>{
      this.clearAlert();
    }, 3000);
  }

  //Clear alert message
  clearAlert(){
    const currentAlert = document.querySelector('.alert');

    if(currentAlert){
      currentAlert.remove();
    }
  }

  //Show alert message
  clearRecipe(){
    this.profile.innerHTML = '';
  }
}
