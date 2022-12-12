function clearErrors(){
    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }
}

function seterror(id, error){
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.innerHTML = error;

}

function validateForm(){
    let returnval = true;
    clearErrors();

    //perform validation and if validation fails, set the value of returnval to false
    

    let email = document.forms['myForm']["femail"].value;
    if (email.length==0){
        seterror("email", "*Email is required!");
        returnval = false;
    }


    let phone = document.forms['myForm']["fphone"].value;
    if (phone.length == 0){
        seterror("phone", "*Enter the phone number!");
        returnval = false;
    }
    else if (phone.length < 10){
        seterror("phone", "*Enter the phone number with atleast 10 digits!");
        returnval = false;
    }
    


    let name = document.forms['myForm']["fname"].value;
    if (name.length == 0){
        seterror("name", "*Name is required!");
        returnval = false;
    }

    

    let message = document.forms['myForm']["fmessage"].value;
    if (message.length == 0){
        seterror("message", "*Message is required!");
        returnval = false;
    }



if(returnval== true)
{
    alert("Message send successfully");
    const utr = new SpeechSynthesisUtterance('Message send successfully');
    utr.pitch = 2;
    window.speechSynthesis.speak(utr);

    
} 
return returnval; 
}
