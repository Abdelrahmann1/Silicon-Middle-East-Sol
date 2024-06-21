import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
// Initialize Firebase
// import { getFirestore,  } from 'firebase/firestore/lite';
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
  query,
  where,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCVi4E5VM3Ef9wCWVAnjjzNzOuJrgWa2NU",
  authDomain: "silicon-middle-east-sol.firebaseapp.com",
  projectId: "silicon-middle-east-sol",
  storageBucket: "silicon-middle-east-sol.appspot.com",
  messagingSenderId: "430223247660",
  appId: "1:430223247660:web:f1f1d5a5a1a357f9e34489",
  measurementId: "G-80HR7NP6P4",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
// const storage = storage();

// Function to add data to Firestore
function addDataToFirestore(collectionName, data) {
  // Add a new document with an auto-generated ID to the specified collection
  addDoc(collection(db, collectionName), data)
    .then((docRef) => {
      //   console.log("Document written with ID: ", docRef.id);
      alert("your requst has sent succesfully");
      location.reload();
    })
    .catch((error) => {
      //   console.error("Error adding document: ", error);
      alert("Error adding document: ", error);
    });
}
function generateRandomName() {
  const timestamp = new Date().getTime();
  const randomString = Math.random().toString(36).substring(2);
  return `${timestamp}_${randomString}`;
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
var timenow = "";
timenow += dateToString(currentdate);
timenow +=
  " " +
  currentdate.getHours() +
  ":" +
  currentdate.getMinutes() +
  ":" +
  currentdate.getSeconds();



document.addEventListener("DOMContentLoaded", () => {
  const getform = document.getElementById("getform");

  getform.addEventListener("submit", async (e) => {
    alert('fg');
    e.preventDefault();
    var type = document.getElementById("type").value;
    var url = document.getElementById("url").value;
    var full_name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone_number = document.getElementById("number").value;
    var country = document.getElementById("country").value;
    var message = document.getElementById("message").value;

    try {
      // Reference for the data to be saved

      // const userDocRef = doc(db, 'startaproj',name);

      // Data to save
      const userData = {
        type,url,
        email,full_name,
        phone_number,
        message,country,timenow

      };


      addDataToFirestore("getquoteorprice", userData);

      // alert('Form submitted successfully!');
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form. Please try again.");
    }
  });
});
