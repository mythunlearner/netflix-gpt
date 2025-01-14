// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoL15ACfe6UQdFzno0dzTv9PvNyOVoDuo",
  authDomain: "netflix-gpt-e34dc.firebaseapp.com",
  projectId: "netflix-gpt-e34dc",
  storageBucket: "netflix-gpt-e34dc.firebasestorage.app",
  messagingSenderId: "113415998115",
  appId: "1:113415998115:web:e9450e4d6e55b379a70d16",
  measurementId: "G-82EQQK27JW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);