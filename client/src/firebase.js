// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "relstate-f0b59.firebaseapp.com",
  projectId: "relstate-f0b59",
  storageBucket: "relstate-f0b59.appspot.com",
  messagingSenderId: "779141053449",
  appId: "1:779141053449:web:fdee09e99b851ad6c7ccd8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);