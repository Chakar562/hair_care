const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");

const container = document.querySelector(".container")

const sign_in_btn2 = document.querySelector("#sign-in-btn2");
const sign_up_btn2 = document.querySelector("#sign-up-btn2");

sign_up_btn.addEventListener("click" ,() =>{
    container.classList.add("sign-up-mode");
});
sign_in_btn.addEventListener("click" ,() =>{
    container.classList.remove("sign-up-mode");
});

sign_up_btn2.addEventListener("click" ,() =>{
    container.classList.add("sign-up-mode2");
});

sign_in_btn2.addEventListener("click" ,() =>{
    container.classList.remove("sign-up-mode2");
});

// function myfun2(){
//     var uname = document.getElementById("username").value;
//     var email = document.getElementById("email").value;
//     var pass = document.getElementById("password").value;
    
  
  
//     localStorage.setItem("username1",uname);
//     localStorage.setItem("email1",email);
//     localStorage.setItem("password1",pass);
   

// }
// function myfun(){
// var uservar = document.getElementById("user");
// var passvar = document.getElementById("pass");
// var checkuser = localStorage.getItem("username1");
// var checkpass = localStorage.getItem("password1");

// if(uservar == checkuser && passvar == checkpass){
//     window.open("./login.html")
// }
// else{
//     alert("error occured")
// }
// }