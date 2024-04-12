// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4ORb-aQv-1Y-95lMqMIWICNHgIGYQ9ys",
  authDomain: "buybusy-c4eec.firebaseapp.com",
  projectId: "buybusy-c4eec",
  storageBucket: "buybusy-c4eec.appspot.com",
  messagingSenderId: "614272503709",
  appId: "1:614272503709:web:882127d06d01332617e974"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
