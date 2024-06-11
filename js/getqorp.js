import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
// Initialize Firebase
// import { getFirestore,  } from 'firebase/firestore/lite';
import { getFirestore, collection, addDoc,doc, setDoc  } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";



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
const db = getFirestore(app);
const storage = getStorage(app);
// const storage = storage();

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

function generateRandomName() {
  const timestamp = new Date().getTime();
  const randomString = Math.random().toString(36).substring(2);
  return `${timestamp}_${randomString}`;
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    alert(document.getElementById('competitor1').value)

    // Get form values
    var presentationURL = "";
    var fileURL = "";
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var project = document.getElementById('project').value;
    var brandName = document.getElementById('brandName').value;
    var businessWebsite = document.getElementById('businessWebsite').value;
    var launchingDate = document.getElementById('launchingDate').value;
    var industry = document.getElementById('industry').value;
    var socialMediaPresence = document.getElementById('socialMediaPresence').value;
    var additionalInfo1 = document.getElementById('additionalInfo1').value;
    var additionalInfo2 = document.getElementById('additionalInfo2').value;
    var additionalInfo3 = document.getElementById('additionalInfo3').value;
    var ageFrom = document.getElementById('ageFrom').value;
    var ageTo = document.getElementById('ageTo').value;
    var classification = document.getElementById('classification').value;
    var gender = document.getElementById('gender').value;
    var businessCategory = document.getElementById('businessCategory').value;
    var country = document.getElementById('country').value;
    var businessType = document.getElementById('businessType').value;
    var Competitor1 = document.getElementById('competitor1').value;
    var Competitor2 = document.getElementById('competitor2').value;
    var Competitor3 = document.getElementById('competitor3').value;
    var goal1 = document.getElementById('Goal1').value;
    var goal2 = document.getElementById('Goal2').value;
    var goal3 = document.getElementById('Goal3').value;
    var searchEngineOptimizationSEO = document.getElementById('checkbox1').checked;
    var mobileApplicationDevelopment = document.getElementById('checkbox2').checked;
    var softwareSystems = document.getElementById('checkbox3').checked;
    var websiteAndSystemsDevelopment = document.getElementById('checkbox4').checked;
    var digitalMarketingServices = document.getElementById('checkbox5').checked;
    var otherBrandingSolutions = document.getElementById('checkbox6').checked;
    var other = document.getElementById('checkbox7').checked;
    // var name = document.getElementById('name').value;
    // var email = document.getElementById('email').value;
    // var phone = document.getElementById('phone').value;
    // const project = document.getElementById('project').value;
    // const brandName = document.getElementById('brandName').value;
    // const businessWebsite = document.getElementById('businessWebsite').value;
    // const launchingDate = document.getElementById('launchingDate').value;
    // const industry = document.getElementById('industry').value;
    // const socialMediaPresence = document.getElementById('socialMediaPresence').value;
    // const additionalInfo1 = document.getElementById('additionalInfo1').value;
    // const additionalInfo2 = document.getElementById('additionalInfo2').value;
    // const additionalInfo3 = document.getElementById('additionalInfo3').value;
    // const ageFrom = document.getElementById('ageFrom').value;
    // const ageTo = document.getElementById('ageTo').value;
    // const classification = document.getElementById('classification').value;
    // const gender = document.getElementById('gender').value;
    // const businessCategory = document.getElementById('businessCategory').value;
    // const country = document.getElementById('country').value;
    // const businessType = document.getElementById('businessType').value;
    // const Competitor1 = document.getElementById('Competitor1').value;
    // const Competitor2 = document.getElementById('Competitor2').value;
    // const Competitor3 = document.getElementById('Competitor3').value;
    // const Goal1 = document.getElementById('Goal1').value;
    // const Goal2 = document.getElementById('Goal2').value;
    // const Goal3 = document.getElementById('Goal3').value;
    const presentationFile = document.getElementById('presentation').files[0];
    const Filefile = document.getElementById('file').files[0];
    // const Search_Engine_Optimization_SEO = document.getElementById('checkbox1').checked;
    // const Mobile_application_development = document.getElementById('checkbox2').checked;
    // const Software_Systems = document.getElementById('checkbox3').checked;
    // const Website_and_systems_development = document.getElementById('checkbox4').checked;
    // const Digital_Marketing_Services = document.getElementById('checkbox5').checked;
    // const Other_Branding_Solutions = document.getElementById('checkbox6').checked;
    // const other = document.getElementById('checkbox7').checked;
    // document.body.appendChild(presentationFile)

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
        other
      };
    //   const userData = {
    //     name: document.getElementById('name').value,
    //     email: document.getElementById('email').value,
    //     phone: document.getElementById('phone').value,
    //     project: document.getElementById('project').value,
    //     brandName: document.getElementById('brandName').value,
    //     businessWebsite: document.getElementById('businessWebsite').value,
    //     launchingDate: document.getElementById('launchingDate').value,
    //     industry: document.getElementById('industry').value,
    //     socialMediaPresence: document.getElementById('socialMediaPresence').value,
    //     additionalInfo1: document.getElementById('additionalInfo1').value,
    //     additionalInfo2: document.getElementById('additionalInfo2').value,
    //     additionalInfo3: document.getElementById('additionalInfo3').value,
    //     ageFrom: document.getElementById('ageFrom').value,
    //     ageTo: document.getElementById('ageTo').value,
    //     classification: document.getElementById('classification').value,
    //     gender: document.getElementById('gender').value,
    //     businessCategory: document.getElementById('businessCategory').value,
    //     country: document.getElementById('country').value,
    //     businessType: document.getElementById('businessType').value,
    //     competitor1: document.getElementById('competitor1').value,
    //     competitor2: document.getElementById('competitor2').value,
    //     competitor3: document.getElementById('competitor3').value,
    //     goal1: document.getElementById('goal1').value,
    //     goal2: document.getElementById('goal2').value,
    //     goal3: document.getElementById('goal3').value,
    //     presentationFile: presentationFile,
    //     fileFile: Filefile,
    //     searchEngineOptimizationSEO: document.getElementById('checkbox1').checked,
    //     mobileApplicationDevelopment: document.getElementById('checkbox2').checked,
    //     softwareSystems: document.getElementById('checkbox3').checked,
    //     websiteAndSystemsDevelopment: document.getElementById('checkbox4').checked,
    //     digitalMarketingServices: document.getElementById('checkbox5').checked,
    //     otherBrandingSolutions: document.getElementById('checkbox6').checked,
    //     other: document.getElementById('checkbox7').checked,
    //     presentationURL :presentationURL,
    //     fileURL:fileURL
    // };
    
      // Save user data to Firestore
      // await setDoc(userDocRef, userData);
      // Upload presentation file to Firebase Storage
      if (presentationFile) {
        const imageName = generateRandomName();
        const presentationStorageRef = storageRef(storage, 'presentations/' + imageName);
        const presentationSnapshot = await uploadBytes(presentationStorageRef, presentationFile);
        presentationURL = await getDownloadURL(presentationSnapshot.ref);
        userData.presentationURL = presentationURL;
      }
      if (Filefile) {
        const fileName = generateRandomName();
        const fileStorageRef = storageRef(storage, 'files/' + fileName);
        const fileSnapshot = await uploadBytes(fileStorageRef, Filefile);
        fileURL = await getDownloadURL(fileSnapshot.ref);
        userData.fileURL = fileURL;
      }
      addDataToFirestore('startaproj', userData);

      // alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again.');
    }
  });
});

