// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyC4pOMcEzVExET1MY6ETQH7rH9Rs28z0AU",
  authDomain: "chat-app-692f1.firebaseapp.com",
  projectId: "chat-app-692f1",
  storageBucket: "chat-app-692f1.appspot.com",
  messagingSenderId: "412074912287",
  appId: "1:412074912287:web:a81b668551146fe362032a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)