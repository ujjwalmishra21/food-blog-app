// // $(document).ready(function () {
// $(()=>{

//         let post_blog = $('#post_blog')
//         let post_recipe = $('#post_recipe')

//         post_blog.click(function(){
//             let topic = $('#topic')
//             let s_description = $('#s_description')
//             let description = $('#description')
           
//             // let file_input_blog = $('#file-input-blog')
//             let date = new Date().toUTCString()
            
//             if(topic.val()==="" || description.val() == "" || s_description.val() == ""){
//                 alert("All the fields must be filled.")
//                 return;
//             }

//             let body_blog = `<br>
//                 <div class="row">
//                 <div class="col-10 col-md-3 col-sm-5">
//                 </div>
//                 <div class="col-8 col-md-7 col-sm-7 blog_post">
//                     <div class="card">
//                         <div class="card-body">
//                             <h5 class="card-title">${topic.val()}</h5>
//                             <p class="card-text">${s_description.val()}</p>
//                             <p class="card-text">${description.val()}</p>
//                             <p class="card-text"><small class="text-muted">${date}</small></p>
//                             </div>

//                             </div>

//                     </div>
//                 <br>`;

//                 topic.val("")
//                 s_description.val("")
//                 description.val("")

//                 alert("Your blog is successfully posted.")
          
//             $('#blogs_recipes').append(body_blog)
            
            




//         })

//         post_recipe.click(function(){
//             let recipe_name = $('#recipe_name')
//             let short_description = $('#short_description')
//             let ingredients = $('#ingredients')
//             let procedures = $('#procedures')
//             // let file_input_recipe = $('#file')
//             let date = new Date().toUTCString()

//             if(recipe_name.val()==="" || short_description.val() === "" || ingredients.val()==="" || procedures.val() === ""){
//                 alert("All the fields must be filled.")
//                 return;
//             }

//             let body_recipe = `<br>
//             <div class="row">
//                 <div class="col-10 col-md-3 col-sm-5">
//                 </div>
//                 <div class="col-8 col-md-7 col-sm-7 recipe_post">
//                     <div class="card">
//                         <div class="card-body">
//                             <h5 class="card-title">${recipe_name.val()}</h5>
//                             <p class="card-text">${short_description.val()}</p>
//                             <p class="card-text"><small class="text-muted">${date}</small></p>
//                         </div>
//                         <a href="#"><img class="card-img-bottom" src="photos/boy.png" height="350px" width="auto" alt="Card image cap"></a>
//                     </div>
//                 </div>
//             </div>
//             <br>`;

//             recipe_name.val("")
//             short_description.val("")
//             short_description.val("")
//             procedures.val("")


            
//             alert('Your recipe is successfully posted.')

//             $('#blogs_recipes').append(body_recipe)
//         })
// })