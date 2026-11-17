 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "foodio-food-delivery.firebaseapp.com",
  projectId: "foodio-food-delivery",
  storageBucket: "foodio-food-delivery.firebasestorage.app",
  messagingSenderId: "588113417829",
  appId: "1:588113417829:web:e64b0d59929f3fa7e9188c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export {app,auth}