  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";  
  import { getFirestore, setDoc,doc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";  
  // // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCROHEhus-0Zoi_a-wYdMt9R3bPNtdoBXk",
    authDomain: "food-recipe-authentication.firebaseapp.com",
    projectId: "food-recipe-authentication",
    storageBucket: "food-recipe-authentication.firebasestorage.app",
    messagingSenderId: "738252052819",
    appId: "1:738252052819:web:980e0b25da7fb51285e9a6"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);

  const db=getFirestore(app)

  document.getElementById("btn1").addEventListener("click",function(event){
    event.preventDefault();
      let email=document.getElementById("signupEmail").value.trim();
      let password=document.getElementById("signupPassword").value.trim();
      let confirmPassword = document.getElementById("signupPassword_c").value.trim();

      if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
      }
     
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          setDoc(doc(db,"user",user.uid),{
              email:user.email,
              createdAt:new Date()
          })
          .then(()=>{
              alert("Signup successful!");
          })
          .catch((error)=>{
            alert(`Invalid user details: ${errorMessage}`)
          })
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
        //   console.error("Signup error", errorCode, errorMessage);
          alert(`Signup failed: ${errorMessage}`);
          // ..
        });
  })


  //sign in

  document.getElementById("btn2").addEventListener("click",function(event){
    event.preventDefault();


    let email=document.getElementById("LoginEmail").value.trim();
    let password=document.getElementById("LoginPassword").value.trim();

    // const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("User logged in:",user)
    alert("Login sucessful!")
    window.open("./mainpage/index.html")
    // ...
  })
  .catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
      console.error("Login error", errorCode, errorMessage);
      alert(`Login failed: ${errorMessage}`);
    });
  })
