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



document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("startform");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Get form values
    var presentationURL = "";
    var fileURL = "";
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var project = document.getElementById("project").value;
    var brandName = document.getElementById("brandName").value;
    var businessWebsite = document.getElementById("businessWebsite").value;
    var launchingDate = document.getElementById("launchingDate").value;
    var industry = document.getElementById("industry").value;
    var socialMediaPresence = document.getElementById(
      "socialMediaPresence"
    ).value;
    var additionalInfo1 = document.getElementById("additionalInfo1").value;
    var additionalInfo2 = document.getElementById("additionalInfo2").value;
    var additionalInfo3 = document.getElementById("additionalInfo3").value;
    var ageFrom = document.getElementById("ageFrom").value;
    var ageTo = document.getElementById("ageTo").value;
    var classification = document.getElementById("classification").value;
    var gender = document.getElementById("gender").value;
    var businessCategory = document.getElementById("businessCategory").value;
    var country = document.getElementById("country").value;
    var businessType = document.getElementById("businessType").value;
    var Competitor1 = document.getElementById("competitor1").value;
    var Competitor2 = document.getElementById("competitor2").value;
    var Competitor3 = document.getElementById("competitor3").value;
    var goal1 = document.getElementById("Goal1").value;
    var goal2 = document.getElementById("Goal2").value;
    var goal3 = document.getElementById("Goal3").value;
    var searchEngineOptimizationSEO =
      document.getElementById("checkbox1").checked;
    var mobileApplicationDevelopment =
      document.getElementById("checkbox2").checked;
    var softwareSystems = document.getElementById("checkbox3").checked;
    var websiteAndSystemsDevelopment =
      document.getElementById("checkbox4").checked;
    var digitalMarketingServices = document.getElementById("checkbox5").checked;
    var otherBrandingSolutions = document.getElementById("checkbox6").checked;
    var other = document.getElementById("checkbox7").checked;
    const presentationFile = document.getElementById("presentation").files[0];
    const Filefile = document.getElementById("file").files[0];

    try {
      // Reference for the data to be saved

      // const userDocRef = doc(db, 'startaproj',name);

      // Data to save
      const userData = {
        name,
        email,
        phone,
        project,
        brandName,
        businessWebsite,
        launchingDate,
        industry,
        socialMediaPresence,
        additionalInfo1,
        additionalInfo2,
        additionalInfo3,
        ageFrom,
        ageTo,
        classification,
        gender,
        businessCategory,
        country,
        businessType,
        Competitor1,
        Competitor2,
        Competitor3,
        goal1,
        goal2,
        goal3,
        presentationURL,
        fileURL,
        searchEngineOptimizationSEO,
        mobileApplicationDevelopment,
        softwareSystems,
        websiteAndSystemsDevelopment,
        digitalMarketingServices,
        otherBrandingSolutions,
        other,
      };

      if (presentationFile) {
        const imageName = generateRandomName();
        const presentationStorageRef = storageRef(
          storage,
          "presentations/" + imageName
        );
        const presentationSnapshot = await uploadBytes(
          presentationStorageRef,
          presentationFile
        );
        presentationURL = await getDownloadURL(presentationSnapshot.ref);
        userData.presentationURL = presentationURL;
      }
      if (Filefile) {
        const fileName = generateRandomName();
        const fileStorageRef = storageRef(storage, "files/" + fileName);
        const fileSnapshot = await uploadBytes(fileStorageRef, Filefile);
        fileURL = await getDownloadURL(fileSnapshot.ref);
        userData.fileURL = fileURL;
      }
      addDataToFirestore("startaproj", userData);

      // alert('Form submitted successfully!');
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form. Please try again.");
    }
  });

});
