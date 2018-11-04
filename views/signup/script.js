
$(()=>{
    $('#uname').popover()   

    // $('#pass').popover()  
    $("#pass").hover(function () {
        $(this).popover({
            title: "Hint",
            content: "Password should contain: <br />-Minimum 8 characters <br />-Atleast an alphabet<br/>-Atleast a number<br/>-Atleast a special character:@,#,!,% ",
            html: true
        }).popover('show');
    }, function () {
        $(this).popover('hide');
    });

  let pass = $('#pass')
  let rpass = $('#rpass')


$('#signup').click(function(){
    var validator = $('#signupform').validate({
    
        rules:{
            pass:"required",
            rpass:{
                equalTo:"#rpass"
            }
        },
        messages: {
            pass: "Enter password",
            rpass: "Re-enter password to verify"
        }
    })
    if(validator.form()){
        alert('Success')
        pass.val() = ""

    }

    $("#next").click(function(){

        location.href =""
    })
    

})



 



}

)