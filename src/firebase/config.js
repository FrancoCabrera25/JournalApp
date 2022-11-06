// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBS7ZC9ar-gkP-wH-UrJMonKlRyguAuBoU",
  authDomain: "react-journal-app-13463.firebaseapp.com",
  projectId: "react-journal-app-13463",
  storageBucket: "react-journal-app-13463.appspot.com",
  messagingSenderId: "285552458727",
  appId: "1:285552458727:web:a7142c9c90d1cdf60edb42",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
