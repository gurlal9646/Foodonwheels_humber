let credentialList = [];
$(document).ready(()=>{
  
    $.getJSON('/json/logincredentials.json', function(jd) {
    let response = jd;
    if(response != null){
        credentialList = response.credentials;
    }
    
    });

    window.onload = function () {
        $('#loginbtn').onclick = validate;
      };
      
      function validate() {
        let username = $('#username');
        let password = $('#password');
        let isValid = false;
        for (let i of credentialList){
            if(i.username == username && i.password == password){
                isValid = true;
                break;
            }
        }
        if(isValid){
            window.location.href = "../html/dashboard.html";
        }
         
      }
 });