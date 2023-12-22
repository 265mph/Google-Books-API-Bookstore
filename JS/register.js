// const signupUsername = document.getElementById("signupUsername");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm_password");
// const registerButton = document.querySelector(".register-button");

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


// let users = [];

// function fetchDetails() {
//     //object to store the user details
//     var user = {
//         username: signupUsername.value,
//         password: passwordInput.value
//     };

//     //push the user to the users array
//     users.push(user);

//     console.log('User signed up:', user.username);
//     console.log(users)

//     // Clear the form fields
//     document.querySelector('.input-fields').reset();

//     //redirect back to home page
//     // window.location.href = 'landing.html';
// }

// registerButton.addEventListener('click', () => {
//     if (passwordInput.value !== confirmPasswordInput.value) {
//         alert("Please confirm your password")
//     } else {
//         fetchDetails();
//     }
// })

//register


function saveData(){

    let username,password,confirm_password;
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    confirm_password = document.getElementById("confirm_password").value;

    
    

    // localStorage.setItem("username",username)
    // localStorage.setItem("password",password)
    // localStorage.setItem("confirm_password",confirm_password)




    //array to store registered users

    let user_records = new Array();
    user_records= JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    if(user_records.some((v)=>{
        return v.username==username
    })){
            alert("Username already exits")
    }
    else{
        user_records.push(
            {
                "username":username,
                "password":password,
                "confirm_password": confirm_password
            }
        )

        //store the user data in localstorage
        // stringify converts objects to string
        localStorage.setItem("users",JSON.stringify(user_records));
    }
}







