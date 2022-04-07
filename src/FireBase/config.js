// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC4jnCws1M4IeDmokeFwubbiWBDrMJP2gA",
    authDomain: "activities-manager-503da.firebaseapp.com",
    projectId: "activities-manager-503da",
    storageBucket: "activities-manager-503da.appspot.com",
    messagingSenderId: "838834820562",
    appId: "1:838834820562:web:43886f228e55ce3308240b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
