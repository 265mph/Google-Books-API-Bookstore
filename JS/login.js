const passwordInput = document.getElementById("password-input");

function togglePasswordVisibility() {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
}

function login() {
    
}