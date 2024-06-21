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
function fethtemplates(type) {
  const q = query(collection(db, type));

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
  
  if (rowData.statues == "live") {
    var details = "Show A Live Demo"  
  } else {
    var details = "Click For More Info"  
  }
  return `
       <div class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                          <div class="blog-item">
                              <div class="blog-img">
                                  <img src="${rowData.imagepath}" class="img-fluid w-100" alt="">
                                  <div class="blog-info">
                                      <!-- <span><i class="fa fa-clock"></i> Dec 01.2024</span>
                                      <div class="d-flex">
                                          <span class="me-3"> 3 <i class="fa fa-heart"></i></span>
                                          <a href="#" class="text-white">0 <i class="fa fa-comment"></i></a>
                                      </div> -->
                                  </div>
                              </div>
                              <div class="blog-content text-dark border p-4 ">
                                  <h5 class="mb-4">${rowData.title}</h5>
                                  <p class="mb-4">${rowData.desc}</p>
                                  <a class="btn btn-light rounded-pill py-2 px-4" href="${rowData.path}">${details}</a>
                              </div>
                          </div>
                      </div>
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

fethtemplates("app-templates");
fethtemplates("web-templates");
