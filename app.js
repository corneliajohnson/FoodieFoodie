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
      //if(data.results.length === 0) {
        // Show Alert
      //} else {
        // Show Recipe
        const id = data.results[0].id
        ui.showRecipe(data.results[0]);
        spoonacular.getDetails(id)
        .then(data => {
            ui.showLink(data);
            ui.showIngredients(data.extendedIngredients);
            ui.showPrice(data);
            ui.showDiets(data);
        })
     // }
    })
  } else {
    //Clear The Recipe
  }

});


