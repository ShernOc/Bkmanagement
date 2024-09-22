// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";



// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API,
  authDomain: "book-management-ea099.firebaseapp.com",
  projectId: "book-management-ea099",
  storageBucket: "book-management-ea099.appspot.com",
  messagingSenderId: "48690010705",
  appId:"1:48690010705:web:087ae27d5ffc01e87c7670"
};

console.log('Firebase API Key:', import.meta.env.VITE_FIREBASE_API);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export { createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile};