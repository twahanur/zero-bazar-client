// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXxM6rXur9A6hG_wbeshvBBCqP8Cq3F68",
  authDomain: "auth-recap-5d524.firebaseapp.com",
  projectId: "auth-recap-5d524",
  storageBucket: "auth-recap-5d524.firebasestorage.app",
  messagingSenderId: "1036449800158",
  appId: "1:1036449800158:web:e850e1b83a27690c74c74f"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();

