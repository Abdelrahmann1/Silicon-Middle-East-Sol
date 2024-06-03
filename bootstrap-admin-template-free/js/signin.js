import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
// Initialize Firebase
// import { getAuth,  } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCVi4E5VM3Ef9wCWVAnjjzNzOuJrgWa2NU",
    authDomain: "silicon-middle-east-sol.firebaseapp.com",
    projectId: "silicon-middle-east-sol",
    storageBucket: "silicon-middle-east-sol.appspot.com",
    messagingSenderId: "430223247660",
    appId: "1:430223247660:web:f1f1d5a5a1a357f9e34489",
    measurementId: "G-80HR7NP6P4"
};
const app = initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);





window.addEventListener("load", function () {
    const loginForm = document.getElementById("loginForm");
    const emailField = document.getElementById("email");
    const passwordField = document.getElementById("password");
    //   console.log("Login form:", loginForm);
    //   console.log("Email field:", emailField);
    //   console.log("Password field:", passwordField);
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission
        const email = emailField.value;
        const password = passwordField.value;
        // const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user);
                document.cookie = "email=" +user.email;
                document.cookie = "accessToken="+user.accessToken ;
                window.location.href = "index.html";


            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert("there is invalid email or Password or both")
            });
    });
});