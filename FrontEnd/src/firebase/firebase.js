// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain:  process.env.REACT_APP_FIREBASE_AuthDomain,
  projectId:  process.env.REACT_APP_FIREBASE_Project_id,
  storageBucket:  process.env.REACT_APP_FIREBASE_StorageBucket,
  messagingSenderId:  process.env.REACT_APP_FIREBASE_Messagin_Sender_Id,
  appId:  process.env.REACT_APP_FIREBASE_App_Id
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {app,auth};