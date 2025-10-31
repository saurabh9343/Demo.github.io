import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCt9N8yWvyKBQ7ojwS5CB6d1YxIyAgWPWE",
    authDomain: "signup-login-97f0a.firebaseapp.com",
    projectId: "signup-login-97f0a",
    storageBucket: "signup-login-97f0a.firebasestorage.app",
    messagingSenderId: "757186389135",
    appId: "1:757186389135:web:2a1b07f47851616a6c3cfa",
    measurementId: "G-C6RDGPWLEG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getFirestore(app);