// taking data
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelector(".error");

// validate data
function validateForm(){

    clearMessages(); 
    let errorFlag = false;

    if(nameInput.Value.length < 1){
        errorNodes[0].innerText = "Name cannot be blank";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }

    if(!emailIsValid(email.value)){
        errorNodes[1].innerText = "Invalid email address";
        email.classList.add("error-border");
        errorFlag = true;
    }

    if(message.value.length < 1){
        errorNodes[2].innerText = "Please enter message";
        email.classList.add("error-border");
        errorFlag = true;

    }

    if(!errorFlag){
        success.innerText = "Success!";
    }

}

// Clear error
function ClearMessages(){
    for(let i = 0; i < errorNodes.length; i++){
        errorNodes[i].innerText ="";
    }
    success.innerText = "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");

}

// check if the email is valid
function emailIsValid(Email){
    let pattern = /\S+@\s+\.\S+/;
    return pattern.test(email);
}

