// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Firestore için
import { getAuth } from "firebase/auth"; // Auth için

const firebaseConfig = {
    apiKey: "AIzaSyCx9u7tXPHKt2Kocm5A-MJg6JfNowS5ByQ",
    authDomain: "menu-beb07.firebaseapp.com",
    projectId: "menu-beb07",
    storageBucket: "menu-beb07.firebasestorage.app",
    messagingSenderId: "185738078664",
    appId: "1:185738078664:web:9685f50d9a5e815a4738fd",
    measurementId: "G-18M1ZDH9X8"
  };

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
