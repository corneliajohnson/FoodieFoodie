//Unit Spoonacular class
const spoonacular = new Spoonacular;

//Init UI class
const ui = new UI;

//Search Input
const searchBtn = document.getElementById('searchBtn');


//Serach input event listener
searchBtn.addEventListener('click', (e) =>{
  const searchInput = document.getElementById('searchInput').value;
  if (searchInput !== '') {
    spoonacular.getRecipe(searchInput)
    .then(data => {
      for(let i = 0; i < 12; i++) {
        ui.showRecipe(data.hits[i]); 
      }
    })
  }
});