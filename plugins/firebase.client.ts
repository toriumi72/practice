// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { defineNuxtPlugin } from '#app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig()
    const firebaseConfig = {
        apiKey: "AIzaSyBfSXxGMTR3dFhJfL0C4Gm__3dn9lx9Ijg",
        authDomain: "nuxt3-firebase-6e06d.firebaseapp.com",
        projectId: "nuxt3-firebase-6e06d",
        storageBucket: "nuxt3-firebase-6e06d.appspot.com",
        messagingSenderId: "1022691644174",
        appId: "1:1022691644174:web:4421e056eb01254abf7d5f",
        measurementId: "G-FVK493ZQB0"
    }
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
});

// Initialize Firebase
