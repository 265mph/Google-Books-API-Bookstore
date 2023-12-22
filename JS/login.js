const passwordInput = document.getElementById("password");

function togglePasswordVisibility() {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
}




function login() {
  let username,password;
  username = document.getElementById("username").value;
  password = document.getElementById("password").value;

  
  let user_record = new Array();
    user_record= JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
 
  if(user_record.some((v)=>{
    return v.username==username && v.password==password
  })){
    alert("login successful");
    let current_user = user_record.filter((v)=>{
      return v.username==username && v.password==password 
    })[0]
// set the value of username for future use
    localStorage.setItem("username", current_user.username);

    //redirect to homepage
    window.location.href="landing.html";

  }else{
    alert("login failed");
  }

}

