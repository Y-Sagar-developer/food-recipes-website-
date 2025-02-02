const signupBtn=document.getElementById("signup-btn")
const signinBtn=document.getElementById("signin-btn")
const mainContainer = document.querySelector(".container");


signupBtn.addEventListener("click",()=>{
    mainContainer.classList.toggle("change");
})
signinBtn.addEventListener("click",()=>{
    mainContainer.classList.toggle("change")
})


document.querySelectorAll(".password-toggle-icon").forEach(function(toggleIcon){
    toggleIcon.addEventListener("click",function(){
        const passwordInput=this.previousElementSibling;
        const icon=this.querySelector("i");

        if(passwordInput.type==="password"){
            passwordInput.type="text";
            icon.classList.remove("fa-eye");
            icon.classList.add("fa-eye-slash");
        }else{
            passwordInput.type="password";
            icon.classList.remove("fa-eye-slash");
            icon.classList.add("fa-eye")
        }
    })
})

// --------------------------- 
let guest = document.getElementById("guest");
guest.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default button behavior
  window.location.href = "../mainpage/index.html"; // Redirect to the signup page
});

// let guest1 = document.getElementById("guest1");
// guest.addEventListener("click", (e) => {
//   e.preventDefault(); // Prevent default button behavior
//   window.location.href = "../mainpage/index.html"; // Redirect to the signup page
// });






