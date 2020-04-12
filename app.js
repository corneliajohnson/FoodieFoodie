function getsource(id){
  $.ajax({
  url:"https://api.spoonacular.com/recipes/"+id+"/information?apiKey=5b3ba4275d524c1cb67cd1fb269db0e9",
  success: function(res) {
  
  //document.getElementById("sourceLink").innerHTML = `<img src=https://img.icons8.com/color/48/000000/cooking.png/>`;
  document.getElementById("sourceLink").href = res.sourceUrl;
  document.getElementById("servingPrice").innerHTML = 'Price per serving: $'+ (res.pricePerServing / 100).toFixed(2);

  let ingredients = '';
  for(let i = 0; i < res.extendedIngredients.length; i++) {
    ingredients += `<li>${res.extendedIngredients[i].original}</li>`;
  }
  document.getElementById('ingredientList').innerHTML = ingredients;
  //console.log(ingredients);
  return [ingredients, res.pricePerServing, res.sourceUrl];
  }
  });
  }


  function getrecepe(foodChoice){
  $.ajax({
  url:"https://api.spoonacular.com/recipes/search?apiKey=5b3ba4275d524c1cb67cd1fb269db0e9&number=10&query="+foodChoice,
  success: function(res) {
    for(let i = 0; i < 10; i++) {
    document.getElementById('newCard').innerHTML += `
    <div class="card text-white bg-secondary mb-3 mt-3">
    <div id="output" class="card-header text-light text-center"><h2>${res.results[0].title}</h2></div>
    <div class="card-body">
      <div class="row">
        <div id='foodPic' class="col">
        <img class="card-img-top" src='${res.baseUri+res.results[i].image}' alt="Card image cap" />
        </div>
        <div class="col">
          <h5 class"text-primary">Ingredience</h5>
          <ul style="list-style-type: none; margin: 0;padding: 0;">
            <div id="ingredientList"></div> 
          </ul>
          <h5 class="mt-3 text-info">More...</h5>
          <ul style="list-style-type: none; margin: 0;padding: 0;">
            <li id="servingPrice"></li>
            <li>Servings: ${res.results[i].servings}</li>
            <li id="minutes">Ready in ${res.results[i].readyInMinutes} Minutes</li>
          </ul>
          <div class="row mt-3 text-center">
          <div class="col-6">
            <a href="${getsource(res.results[i].id)}" id="sourceLink"><img src=https://img.icons8.com/color/30/000000/cooking.png/></a><br>
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
      <div class="card-footer text-center">
        <img src="https://img.icons8.com/color/25/000000/vegan-symbol.png"/>
        <img src="https://img.icons8.com/color/25/000000/vegetarian-mark.png"/>
        <img src="https://img.icons8.com/color/25/000000/no-gluten.png"/>
        <img src="https://img.icons8.com/color/25/000000/leaf.png"/>
      </div>
  </div>
    `;
    }
  }
  });
  }



//API Key: 5b3ba4275d524c1cb67cd1fb269db0e9

  // //THIS IS A WIDGET
  // getIngredients()
  // function getIngredients(id) {
  //   const xhr = new XMLHttpRequest();
  
  //   xhr.open('GET',`https://api.spoonacular.com/recipes/1003464/ingredientWidget?apiKey=5b3ba4275d524c1cb67cd1fb269db0e9.json`, true);
  
  //   xhr.onload = function() {
  //     if (this.status === 200) {
  //       const response = JSON.stringify(this.responseText);
  //       document.getElementById('ingredientList').innerHTML = response;
  //       return response;
  //     }
  //   }
  //  // xhr.send();
  // }