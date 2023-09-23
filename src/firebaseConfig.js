// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWm9Lnyf5jhjpvht3y8yOuN6giwrxecMk",
  authDomain: "pelinet-16e59.firebaseapp.com",
  projectId: "pelinet-16e59",
  storageBucket: "pelinet-16e59.appspot.com",
  messagingSenderId: "122983343284",
  appId: "1:122983343284:web:c068df9604cf9d45bce3e1",
  measurementId: "G-KW61RYXVJ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
