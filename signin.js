function submitForm(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get form values
    
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Create an object with form data
    let formData = {
        
        email: email,
        password: password
    };

    console.log(formData);

}


document.addEventListener('DOMContentLoaded',function (){
    const signupform = document.getElementById('signinform');
    signupform.addEventListener('submit', submitForm);
});