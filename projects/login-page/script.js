function validate() {
    const username_form= document.signinForm.username.value;
    const password_form = document.signinForm.password.value;

    if(username_form == "") {
        alert("Please enter your username");
        return false;
    }
    if(password_form == "") {
        alert("Please enter your password");
        return false;
    }
    return true;
}