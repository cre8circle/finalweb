// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBla9LhJebd45DVVZuTjJS4eDeocNosbs4",
  authDomain: "cre8circle-807bb.firebaseapp.com",
  projectId: "cre8circle-807bb",
  storageBucket: "cre8circle-807bb.firebasestorage.app",
  messagingSenderId: "758027031735",
  appId: "1:758027031735:web:4a3aa4c3946569d5146932",
  measurementId: "G-32F6GM5T6G"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };