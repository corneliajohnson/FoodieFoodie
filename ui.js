class UI {
  constructor() {
    this.recipeCard = document.getElementById("recipeCard");
  }

  showRecipe(choice) {
    console.log(choice.recipe.url);
    this.recipeCard.innerHTML += `
    <div class="col-md-6 col-lg-4 d-flex align-items-stretch">
    <div class="card bg-light mb-3 mt-3">
      <div class="card-body">
          <div id='foodPic'>
              <img class="card-img-top" src='${choice.recipe.image}' alt="Card image cap" />
              <h3 class="text-primary">${choice.recipe.label}</h3>
              <h6 class="">Source: ${choice.recipe.source}</h6><br>
              <div class="btn-group btn-group-toggle" data-toggle="buttons">
                <label class="btn btn-info active">
                  <input onclick="window.location.href='${choice.recipe.url}';" type="checkbox" autocomplete="off"> More Info
                </label>
                <label class="btn btn-info">
                  <input type="checkbox" autocomplete="off"> Buy It
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
  }

  //   //Clear Profile
  // fshowAlert(message, className){
  //   //Clear ayny remaining alerts
  //   this.clearAlert();
  //   //Create alert
  //   const alert = document.createElement('div');
  //   //Add class name and message
  //   alert.className = className;
  //   //Add Text
  //   alert.appendChild(document.createTextNode(message));
  //   //Get Parent
  //   const container = document.querySelector('.searchContainer');
  //   const search = document.querySelector('.search');
  //   //insert alert
  //   container.insertBefore(alert, search);

  //   //timeout after 3 secs
  //   setTimeout(()=>{
  //     this.clearAlert();
  //   }, 3000);
  // }

  // //Clear alert message
  // clearAlert(){
  //   const currentAlert = document.querySelector('.alert');

  //   if(currentAlert){
  //     currentAlert.remove();
  //   }
  // }

  // //Show alert message
  // clearRecipe(){
  //   this.profile.innerHTML = '';
  // }

}//END CLASS
