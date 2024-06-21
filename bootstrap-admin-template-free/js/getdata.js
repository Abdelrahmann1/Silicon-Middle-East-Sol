import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
// Initialize Firebase
import {
  getFirestore,
  collection,
  query,
  addDoc,
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
const storage = getStorage(app);
const db = getFirestore(app);

// Function to fetch data from Firestore and limit to five items
function fetchLimitedData(type) {
  const q = query(collection(db, "getquoteorprice"), where("type", "==", type));

  getDocs(q)
    .then((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      renderTableRows(data, type);
    })
    .catch((error) => {
      console.error("Error getting documents: ", error);
    });
}

function generateTableRow(rowData) {
  return `
    <tr>
      <td><input class="form-check-input" type="checkbox"></td>
      <td>${rowData.timenow}</td>
      <td>${rowData.full_name}</td>
      <td>${rowData.email}</td>
      <td>${rowData.phone_number}</td>
      <td>${rowData.country}</td>
      <td> <button class="btn btn-sm btn-primary" onclick="alert('${rowData.message}')">show desc </button></td>
      <td> <button class="btn btn-sm btn-primary"onclick="alert('${rowData.url}')" >show url </button> </td>
    </tr>
  `;
}
// ${rowData.url}
// onclick="${alert( rowData.message)}"

function renderTableRows(data, tablename) {
  const tableBody = document.getElementById(tablename);
  tableBody.innerHTML = ""; // Clear existing rows

  // Loop through data and generate table rows
  data.forEach((rowData) => {
    const rowHTML = generateTableRow(rowData);
    tableBody.innerHTML += rowHTML;
  });
}

// Call the function to fetch limited data from Firestore
fetchLimitedData("web-development");
fetchLimitedData("web-design");
fetchLimitedData("app-cross");
fetchLimitedData("app-uiux");
fetchLimitedData("brand-identity");
fetchLimitedData("graphic-design");


















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

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("templateform");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Get form values
    var fileURL ="";
    var title = document.getElementById("title").value;
    var desc = document.getElementById("desc").value;
    var path = document.getElementById("path").value;
    var statues;
    var kind;
    var radios = document.getElementsByName("gridRadios");
    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        statues = radios[i].value;
        break;
      }
    }
    var radios2 = document.getElementsByName("kind");
    for (var i = 0, length = radios2.length; i < length; i++) {
      if (radios2[i].checked) {
        kind = radios2[i].value;
        break;
      }
    }
    const image = document.getElementById("image").files[0];

    try {
      const userData = {
        path,
        desc,
        title,
        statues
      };
      if (image) {
        const fileName = generateRandomName();
        const fileStorageRef = storageRef(storage, "templateimages/" + fileName);
        const fileSnapshot = await uploadBytes(fileStorageRef, image);
        fileURL = await getDownloadURL(fileSnapshot.ref);
        userData.imagepath = fileURL;
      }
      if (kind == "web") {
        addDataToFirestore("web-templates", userData);
      } else {
        addDataToFirestore("app-templates", userData);
        
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form. Please try again.");
    }
  });
});