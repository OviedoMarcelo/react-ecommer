// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore'



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAmwzxi3pgt9Fj0Z75un8IaXUa87T_zszU",
    authDomain: "backend-react-coder.firebaseapp.com",
    projectId: "backend-react-coder",
    storageBucket: "backend-react-coder.appspot.com",
    messagingSenderId: "843641953638",
    appId: "1:843641953638:web:f55798716b2780c3e77ca7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
