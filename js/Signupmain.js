function validate()
{
    var Username=document.getElementById("Username").value;
    var Password=document.getElementById("Password").value;
    if(Password >8 )
    {
        alert("Successfully Signed Up");
        return false;
    }
    else{
        alert("Password should be more than 8 letters");
    }
}