const signupUsername = document.getElementById("signupUsername");
const passwordInput = document.getElementById("password-input");
const confirmPasswordInput = document.getElementById("confirm-password-input");
const registerButton = document.querySelector(".register-button");

function togglePasswordVisibility() {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
}

function confirmPasswordVisibility() {
    if (confirmPasswordInput.type === "password") {
        confirmPasswordInput.type = "text";
    } else {
        confirmPasswordInput.type = "password";
    }
}


let users = [];

function fetchDetails() {
    //object to store the user details
    var user = {
        username: signupUsername.value,
        password: passwordInput.value
    };

    //push the user to the users array
    users.push(user);

    console.log('User signed up:', user.username);
    console.log(users)

    // Clear the form fields
    document.querySelector('.input-fields').reset();

    //redirect back to home page
    // window.location.href = 'landing.html';
}

registerButton.addEventListener('click', () => {
    if (passwordInput.value !== confirmPasswordInput.value) {
        alert("Please confirm your password")
    } else {
        fetchDetails();
    }
})