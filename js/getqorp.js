import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
// Initialize Firebase
// import { getFirestore,  } from 'firebase/firestore/lite';
import { getFirestore,collection, addDoc } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js'



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
// Assuming you have initialized Firebase and obtained a reference to your Firestore instance
const db = getFirestore(app);

// Function to add data to Firestore
function addDataToFirestore(collectionName, data) {
  // Add a new document with an auto-generated ID to the specified collection
  addDoc(collection(db, collectionName), data)
    .then((docRef) => {
    //   console.log("Document written with ID: ", docRef.id);
      alert("your requst has sent succesfully")
      location.reload();
    })
    .catch((error) => {
    //   console.error("Error adding document: ", error);
      alert("Error adding document: ", error)

    });
}
function dateToString(date) {
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var dateOfString = (("" + day).length < 2 ? "0" : "") + day + "/";
    dateOfString += (("" + month).length < 2 ? "0" : "") + month + "/";
    dateOfString += date.getFullYear();
    return dateOfString;
}
var currentdate = new Date();
var datetime ="";
datetime += dateToString(currentdate );
datetime +=  " " + currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":"
            + currentdate.getSeconds();


// Example data object with multiple arguments

document.getElementById("getform").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    var reqdata = {
        type: document.getElementById("type").value,
        url: document.getElementById("url").value,
        full_name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone_number: document.getElementById("number").value,
        country: document.getElementById("country").value,
        message: document.getElementById("message").value,
        timenow: datetime
        // Add more properties as needed
      };
    addDataToFirestore("getquoteorprice", reqdata); // Replace "users" with your collection name
  });
// Call the function to add data to Firestore



// window.addEventListener("load", function () {
//     const loginForm = document.getElementById("getform");
//     const emailField = document.getElementById("email");
//     const passwordField = document.getElementById("password");

//     loginForm.addEventListener("submit", function (event) {
//         event.preventDefault(); // Prevent default form submission
//         const email = emailField.value;
//         const password = passwordField.value;
//         // const auth = getAuth();
//         signInWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 // Signed up 
//                 const user = userCredential.user;
//                 console.log(user);
//                 document.cookie = "email=" +user.email;
//                 document.cookie = "accessToken="+user.accessToken ;
//                 window.location.href = "index.html";


//             })
//             .catch((error) => {
//                 const errorCode = error.code;
//                 const errorMessage = error.message;
//                 alert("there is invalid email or Password or both")
//             });
//     });
// });