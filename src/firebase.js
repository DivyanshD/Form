import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyB2VsJLev9DcwgA7CtdJtZVJnms2HY1FYk",
  authDomain: "form-4ec29.firebaseapp.com",
  projectId: "form-4ec29",
  storageBucket: "form-4ec29.appspot.com",
  messagingSenderId: "1012444012109",
  appId: "1:1012444012109:web:2e5ad5ef262bf498734604"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);



