function submitForm(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get form values
    let Firstname = document.getElementById("Fname").value;
    let Lastname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Create an object with form data
    let formData = {
        Firstname: Firstname,
        Lastname: Lastname,
        
        email: email,
        password: password
    };

    console.log(formData);

}


document.addEventListener('DOMContentLoaded',function (){
    const signupform = document.getElementById('signupform');
    signupform.addEventListener('submit', submitForm);
});