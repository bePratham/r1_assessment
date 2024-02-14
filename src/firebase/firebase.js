// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXzUE5EEMEEgawAC_Suo3eBkHgmh-qZVw",
  authDomain: "richpanel-assessment-r1.firebaseapp.com",
  projectId: "richpanel-assessment-r1",
  storageBucket: "richpanel-assessment-r1.appspot.com",
  messagingSenderId: "650747592866",
  appId: "1:650747592866:web:98132e1aeec5d4eb27d7fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {app,auth};