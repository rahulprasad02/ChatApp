// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// importing auhtentication service from firebase
import { getAuth } from "firebase/auth";
// importing firestore databases service from firebase
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB7FC9-ThWKFuGMZ2wphns9eIy81JY6mbA",
    authDomain: "chat-app-new-92877.firebaseapp.com",
    projectId: "chat-app-new-92877",
    storageBucket: "chat-app-new-92877.appspot.com",
    messagingSenderId: "1054925349870",
    appId: "1:1054925349870:web:064d34baeb4465018724ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// exporting authentication service by the name auth
export const auth = getAuth(app);
// exporting firestore database service by the name db
export const db = getFirestore(app);

