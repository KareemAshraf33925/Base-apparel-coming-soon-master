var email=document.getElementById("email");
var message=document.getElementById("message");
var error=document.querySelector(".error");

    function submit(){

        if(email.value.indexOf("@gamil") != -1){
            message.innerHTML="Thanks for you"
            email.value=" ";
            error.classList.remove("active");
        }else{
             message.innerHTML="Please provide a valid email";
             error.classList.add("active");
             email.value=" ";
        }
    }

    