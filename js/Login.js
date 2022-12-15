ClearLocalStorage();
function ClearLocalStorage(){
    localStorage.clear();
}
let credentialList = [];
$(document).ready(()=>{
  
    $.getJSON('../json/logincredentials.json', function(jd) {
    let response = jd;
    if(response != null){
        credentialList = response.credentials;
    }
    
    });

    
 });

 function validate() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let isValid = false;
    for (let i of credentialList){
        if(i.username.toLowerCase() == username.toLowerCase() && i.password == password){
            isValid = true;
            localStorage.setItem('name',i.name);
            localStorage.setItem('email',i.username);
            localStorage.setItem('mobile',i.mobile);
            localStorage.setItem('gender',i.gender);
            localStorage.setItem('language',i.language);
            localStorage.setItem('country',i.country);
            localStorage.setItem('dob',i.dob);
            break;
        }
    }

    if(isValid){
        window.location.href = "../html/dashboard.html";
    }
    else{
        document.getElementById('password').value ='';
        alert('Invalid username or password');
    }
     
  }