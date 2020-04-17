//Unit Edamam class
const edamam = new Edamam;

//Init UI class
const ui = new UI;

//On Page load
window.addEventListener("load", (e)=>{
  if(searchInput !== '') {
    //use default on page load
    edamam.getRecipe()
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
      edamam.getRecipe(userText)
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


  //Favorites Action
  function emptyToFull(event){
    edamam.getRecipe()
    .then(data => {
      //Add Favorite
      if(event.target.nodeName == 'I' && event.target.classList.contains('fa-heart-o')){
        event.target.classList.remove('fa-heart-o');
        event.target.classList.add('fa-heart');
        
        //check current target to card
        for(let i = 0; i < 12; i++){
          if(event.target.parentElement.classList.value == 'fav' + i){
            ui.addFavorite(data.hits[i]);
          }
        }
        //Remove Favorite
      } else if (event.target.nodeName == 'I' && event.target.classList.contains('fa-heart')){
        event.target.classList.remove('fa-heart');
        event.target.classList.add('fa-heart-o');

        //check current target to card
        for(let i = 0; i < 12; i++){
          if(event.target.parentElement.classList.value == 'fav' + i){
            ui.removeFavorite(data.hits[i]);
          }
        }
      }
    });
  }
