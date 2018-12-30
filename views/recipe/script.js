// $(document).ready(function () {



//     let post_recipe = $('#post_recipe')
   
//     post_recipe.click(function(){
//         let recipe_name = $('#recipe_name')
//         let short_description = $('#short_description')
//         let ingredients = $('#ingredients')
//         let procedures = $('#procedures')
//         // let file_input_recipe = $('#file')
//         let date = new Date().toUTCString()
        
//         if(recipe_name.val() ==="" || short_description.val() === "" || ingredients.val() ==="" || procedures.val() === ""){
//             alert("All the fields must be filled.")
//             return;
//         }
       
//         let body_recipe = `<br>
//         <div class="col-9 col-lg-4 col-md-6 col-sm-9">
//         <div class="card">
//         <a href="#"><img class="card-img-top" src="photos/pizza.jpg" alt="Card image cap"></a>
//           <div class="card-body">
//             <h5 class="card-title">${recipe_name.val()}</h5>
//             <p class="card-text"><blockquote><em>by ABC</em></blockquote></p>
//             <p class="card-text">${short_description.val()}</p>
           
//           </div>
//           <div class="card-footer">
//             <small class="text-muted">${date}</small>
//           </div>
//         </div>
//         </div><br>`;

//         recipe_name.val("")
//         short_description.val("")
//         short_description.val("")
//         procedures.val("")


        
//         alert('Your recipe is successfully posted.')

//         $('#recipe_blocks').append(body_recipe)
//     })



// })