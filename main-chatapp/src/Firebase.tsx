// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeBU07HZEZQbYflQkCj272JY4k_wsvraU",
  authDomain: "collabed-chatapp.firebaseapp.com",
  projectId: "collabed-chatapp",
  storageBucket: "collabed-chatapp.appspot.com",
  messagingSenderId: "670631957506",
  appId: "1:670631957506:web:ca4ed904b3ef012d75431b",
  measurementId: "G-8ET4Z6J750"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()