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

          //show 12 recipes
         for(let i = 0; i < 12; i++) {
            ui.showRecipe(data.hits[i], i); 
            ui.showIngredience(data.hits[i], i);
          }
        }
      });
    }
  });


//Nav Bar Functionality
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  //document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}


//Loading
// function work() { /*...*/ }

// if (document.readyState == 'loading') {
//   // loading yet, wait for the event
//   document.addEventListener('DOMContentLoaded', work);
// } else {
//   // DOM is ready!
//   work();
// }