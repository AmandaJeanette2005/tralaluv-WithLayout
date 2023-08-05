// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDd52d-v6QcNQ2M6kv3wlgDC3XUGnnAaqc",
  authDomain: "travaluv-e34a5.firebaseapp.com",
  projectId: "travaluv-e34a5",
  storageBucket: "travaluv-e34a5.appspot.com",
  messagingSenderId: "1088525214406",
  appId: "1:1088525214406:web:b9b3de718fe4479143adc7",
  measurementId: "G-BYNHZM6KSM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const db = getFirestore(app)

export {auth, db}
