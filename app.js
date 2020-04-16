//Unit Spoonacular class
const spoonacular = new Spoonacular;

//Init UI class
const ui = new UI;

//On Page load
window.addEventListener("load", (e)=>{
  if(searchInput !== '') {
    //use default on page load
    spoonacular.getRecipe()
    .then(data => {
      //show 12 cards
      for(let i = 0; i < 12; i++) {
        ui.showRecipe(data.hits[i], i); 
        ui.showIngredience(data.hits[i], i);
      }
    });
  }
});


//Search Input
const searchInput = document.getElementById('searchInput');

//Serach input event listener
  searchInput.addEventListener('change', (e) => {
    //Get Input
    const userText = e.target.value;

    if (userText !== '') {
      //Make Http Call
      spoonacular.getRecipe(userText)
      .then(data => {
        if(data.hits[0] === undefined) {
          // Show Alert
          ui.showAlert('Recipe not found', 'alert alert-dismissible alert-primary');
        } else {
          //clear profile before loading new search
          ui.clearRecipe();
          ui.clearModal();
          //show 12 recipes
         for(let i = 0; i < 12; i++) {
            ui.showRecipe(data.hits[i], i); 
            ui.showIngredience(data.hits[i], i);
          }
        }
      });
    }
  });

