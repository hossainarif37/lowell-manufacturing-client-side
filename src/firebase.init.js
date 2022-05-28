// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-zA59B8LIM0pob--sINg77HU1EPFJw-0",
    authDomain: "lowell-manufacturing.firebaseapp.com",
    projectId: "lowell-manufacturing",
    storageBucket: "lowell-manufacturing.appspot.com",
    messagingSenderId: "193028203827",
    appId: "1:193028203827:web:b2c1905e0816dc67ed0a46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;