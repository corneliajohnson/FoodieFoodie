class UI {
  constructor() {
    this.recipeCard = document.getElementById("recipeCard");
    this.modals = document.getElementById("modals");
    this.favoriteList = document.getElementById('favoriteList');
    this.favoritesArray = [];
  }

  showRecipe(choice, num) {
    //html for each recipe card
    this.recipeCard.innerHTML += `
    <div class="col-md-6 col-lg-4 d-flex">
    <div class="card bg-light mb-3 mt-3">
      <div class="card-body foodCard">
          <div id='foodPic'>
              <img class="card-img-top" src='${choice.recipe.image}' alt="Card image cap" />
              <h4 class="text-primary">${choice.recipe.label}</h4>
              <h6><b>Source:</b> ${choice.recipe.source}</h6>
              <a class ="fav${num}"><i class="fa fa-heart-o"></i></a>
              <br>
            </div>
          </div>
          
            <footer class="footer d-flex justify-content-between p-4">              
            <div class="btn-group btn-group-toggle align-self-end" data-toggle="buttons">
            <label class="btn btn-info active">
              <input onclick="window.location.href='${choice.recipe.url}';" type="checkbox" autocomplete="off"> Recipe
            </label>
            <label class="btn btn-info">
              <input type="checkbox" autocomplete="off" onclick="window.location.href='https://delivery.publix.com/';"> Buy It
            </label>
          </div>
        
        <!-- Small modal -->
          <a class="text-primary" data-toggle="modal" data-target="#modal${num}"><i class="fa fa-plus-circle fa-2x" aria-hidden="true"></i></a>
        </footer>
        </div>
      </div>
    </div>
  </div>
    `;  
}

  //Show ingredience in modal
  showIngredience(choice, num) {
    let output = "";
    for (let i = 0; i < choice.recipe.ingredients.length; i++) {
      output += `<li>${choice.recipe.ingredients[i].text}</li>`;
    }
    this.modals.innerHTML += `
    <div class="modal" id="modal${num}">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
        <h4>${choice.recipe.label}</h4>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        <h4 class="text-primary">Ingredience</h4>
        <ul id="ingredienceList">${output}</ul>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-primary">Favorite</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
      </div>
    </div>
  </div>`;
  }

  //Clear Profile
  showAlert(message, className) {
    //Clear ayny remaining alerts
    this.clearAlert();
    //Create alert
    const alert = document.createElement("div");
    //Add class name and message
    alert.className = className;
    //Add Text
    alert.appendChild(document.createTextNode(message));
    //Get Parent
    const container = document.querySelector(".searchContainer");
    const search = document.querySelector(".search");
    //insert alert
    container.insertBefore(alert, search);

    //timeout after 3 secs
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // //Clear alert message
  clearAlert() {
    const currentAlert = document.querySelector(".alert");

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  //Add Favorite
  addFavorite(choice) {
    this.favoritesArray.push(choice.recipe.label);
    console.log(this.favoritesArray);
  }

  //Remove Favorite
  removeFavorite(choice){
    let index = this.favoritesArray.indexOf(choice.recipe.label);
    if (index !== -1) this.favoritesArray.splice(index, 1);
  }


  //Clear Recipe
  clearRecipe() {
    this.recipeCard.innerHTML = "";
  }

    //Clear Modals
    clearModal() {
      this.modals.innerHTML = "";
    }
} //END CLASS
