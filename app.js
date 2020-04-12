function getsource(id){
  $.ajax({
  url:"https://api.spoonacular.com/recipes/"+id+"/information?apiKey=db254b5cd61744d39a2deebd9c361444",
  success: function(res) {
  
  document.getElementById("sourceLink").innerHTML = res.sourceUrl;
  document.getElementById("sourceLink").href = res.sourceUrl;
  document.getElementById("servingPrice").innerHTML = 'Price per serving: '+ res.pricePerServing * 100;

  let ingredients = '';
  for(let i = 0; i < res.extendedIngredients.length; i++) {
    ingredients += `<li>${res.extendedIngredients[i].original}</li>`;
  }
  document.getElementById('ingredientList').innerHTML = ingredients;
  console.log(ingredients);
  return [ingredients, res.pricePerServing, res.sourceUrl];
  }
  });
  }


  function getrecepe(foodChoice){
  $.ajax({
  url:"https://api.spoonacular.com/recipes/search?apiKey=db254b5cd61744d39a2deebd9c361444&number=1&query="+foodChoice,
  success: function(res) {

    document.getElementById('newCard').innerHTML = `
    <div class="card text-white bg-secondary mb-3 mt-2">
    <div id="output" class="card-header text-light"><h2>${res.results[0].title}</h2></div>
    <div class="card-body">
      <div class="row">
        <div id='foodPic' class="col">
        <img class="card-img-top" src='${res.baseUri+res.results[0].image}' alt="Card image cap" />
        </div>
        <div class="col">
          <h4 class="text-primary">All About It</h4>
          <h5 class"text-success">Ingredience</h5>
          <ul style="list-style-type: none; margin: 0;padding: 0;">
            <div id="ingredientList"></div> 
          </ul>
          <h5 class="mt-3 text-success">More...</h5>
          <ul style="list-style-type: none; margin: 0;padding: 0;">
            <li id="servingPrice"></li>
            <li>Servings: ${res.results[0].servings}</li>
            <li id="minutes">Ready in ${res.results[0].readyInMinutes} Minutes</li>
            <li><a href="${getsource(res.results[0].id)}" id="sourceLink">More Information</a></li>
          </ul>
        </div>
      </div>
    </div>
      <div class="card-footer text-muted">
      <div class="row d-flex justify-content-center">
        <div class="col">
          <img src="https://img.icons8.com/color/30/000000/vegan-symbol.png"/>
        </div>
        <div class="col">
          <img src="https://img.icons8.com/color/30/000000/vegetarian-mark.png"/>
        </div>
        <div class="col">
          <img src="https://img.icons8.com/color/30/000000/no-gluten.png"/>
        </div>
        <div class="col">
          <img src="https://img.icons8.com/color/30/000000/leaf.png"/>
      </div>
      </div>
    </div>
  </div>
    `;
  
  //for(let i = 0; i < 10; i++){
    // document.getElementById("output").innerHTML+=`<h1>"${res.results[i].title}"</h1>`;
    // document.getElementById("output").innerHTML+= `<img src='${res.baseUri+res.results[i].image}' width='200' />`;
    // document.getElementById("minute").innerHTML+= `Ready in ${res.results[i].readyInMinutes} minutes`;
    //getsource(res.results[i].id)
    //}
  }
  });
  }



//API Key: 9f036de9bff64999ade8eac9dfa0f820

  // //THIS IS A WIDGET
  // getIngredients()
  // function getIngredients(id) {
  //   const xhr = new XMLHttpRequest();
  
  //   xhr.open('GET',`https://api.spoonacular.com/recipes/1003464/ingredientWidget?apiKey=9f036de9bff64999ade8eac9dfa0f820.json`, true);
  
  //   xhr.onload = function() {
  //     if (this.status === 200) {
  //       const response = JSON.stringify(this.responseText);
  //       document.getElementById('ingredientList').innerHTML = response;
  //       return response;
  //     }
  //   }
  //  // xhr.send();
  // }