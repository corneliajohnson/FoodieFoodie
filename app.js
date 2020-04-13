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
        ui.showAlert('Recipe not found', 'alert alert-dismissible alert-primary');
        console.log('ERROR');
      } else {
        // Show Recipe
        for(let i = 0; i < 2; i++ ) {
          ui.showRecipe(data.results[i]);
          
          let id = data.results[i].id;
          spoonacular.getDetails(id)
          .then(data => {
              ui.showLink(data);
              ui.showIngredients(data.extendedIngredients);
              ui.showPrice(data);
              ui.showDiets(data);
          });
        }
     }
    });
  } else {
    //Clear The Recipe
    ui.clearRecipe();
  }

});


