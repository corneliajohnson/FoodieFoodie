//Unit Spoonacular class
const spoonacular = new Spoonacular;

//Init UI class
const ui = new UI;

//Search Input
const searchBtn = document.getElementById('searchBtn');

//Serach input event listener
searchBtn.addEventListener('click', (e)=>{
  const searchInput = document.getElementById('searchInput').value;
  //make http call
  if (searchInput !== '') {
    spoonacular.getRecipe(searchInput)
    .then(data => {
      if(data.results[0] === undefined) {
        // Show Alert
        ui.showAlert('User not found', 'alert alert-danger');
        console.log('ERROR');
      } else {
        // Show Recipe
        ui.showRecipe(data.results[0]);
        const id = data.results[0].id
        spoonacular.getDetails(id)
        .then(data => {
            ui.showLink(data);
            ui.showIngredients(data.extendedIngredients);
            ui.showPrice(data);
            ui.showDiets(data);
        });
     }
    });
  } else {
    //Clear The Recipe
    ui.clearRecipe();
  }

});


