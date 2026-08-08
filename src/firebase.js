// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDt4BjgZ5ky9FuCqXvyqDSaZ9MqhFWv_m4",
  authDomain: "beck-clone.firebaseapp.com",
  projectId: "beck-clone",
  storageBucket: "beck-clone.firebasestorage.app",
  messagingSenderId: "380417243030",
  appId: "1:380417243030:web:302b801a13672d3730cfb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it, so other files can use it
export const auth = getAuth(app);