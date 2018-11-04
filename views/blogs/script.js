let counter = 0;
$(document).ready(function () {



    let post_blog = $('#post_blog')
  
    post_blog.click(function(){
        let topic = $('#topic')
        let short_description = $('#short_description')
        let description = $('#description')
       
        // let file_input_recipe = $('#file')
        let date = new Date().toUTCString()
        
        if(topic.val() ==="" || short_description.val() === "" || description.val() ===""){
            alert("All the fields must be filled.")
            return;
        }
       
        let body_blog = `<br>
        <div class="row">
        <div class="col-11 col-md-2 col-sm-5"></div>
          <div class="col-11 col-md-8 col-sm-9 blog_post">
        <div class="card text-center">
            <div class="card-header">
              Name
            </div>
            <div class="card-body blog_body">
              <h5 class="card-title">${topic.val()}</h5>
              <p class="card-text">${short_description.val()}</p>
              <p>
                  <a  data-toggle="collapse" href="#${counter}"  aria-expanded="false" aria-controls="${counter}">
                    Click for more
                  </a>
                 
                </p>
                <div class="collapse" id="${counter}">
                  <div class="card card-body">
                      ${description.val()}
                  </div>
                </div>
            </div>

            
            <div class="card-footer text-muted">
              ${date}
            </div>
          </div>

        </div>
        `;
        counter++;
        topic.val("")
        short_description.val("")
        description.val("")
        


        
        alert('Your blog is successfully posted.')

        $('#blog_block').append(body_blog)
    })



})