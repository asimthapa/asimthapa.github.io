function validate() {
    const fname_form = document.myForm.fName.value;
    const lname_form = document.myForm.lName.value;
    const email_form = document.myForm.mail.value;
    const username_form= document.myForm.userName.value;
    const password_form = document.myForm.password.value;
    const passwordVerify_form = document.myForm.passwordVerify.value;

        if(fname_form == "") {
            alert("Please provide your first name");
            return false;
        }
        if(lname_form == "") {
            alert("Please provide your last name");
            return false;
        }
        if(email_form == "") {
            alert("Please provide your email");
            return false;
        }
        if(username_form == "") {
            alert("Please provide valid username");
            return false;
        }
        if(password_form == "") {
            alert("Please provide password");
            return false;
        }
        if(password_form != passwordVerify_form) {
            alert(" Passwords must be same.")
            return false;
        }
    return true;
}