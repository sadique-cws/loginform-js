let input_fields = document.querySelectorAll(".input")
let login_btn = document.querySelector("#login-btn");



input_fields.forEach(function(input_item) {
    input_item.addEventListener("input",function(){
        if(input_item.value.length > 3){
            login_btn.disabled = false;
            login_btn.className = "btn enabled"
        }
    })
})

function validate(){
    let input_text = document.querySelector("#input-text");
    let input_password = document.querySelector("#input-password");
    let error_msg = document.querySelector(".error_msg");


    if(input_text.value.length <= 3 || input_password.value.length <= 3){
        error_msg.style.display = "inline-block";
        input_text.style.border = "1px solid red";
        return false;
    }
    else{
        return true;
    }

}