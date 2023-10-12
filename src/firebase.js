import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA16lMFnSjWQTQWYMpAJJsAy_iSjMETcFU",
  authDomain: "react-auth-f46ca.firebaseapp.com",
  projectId: "react-auth-f46ca",
  storageBucket: "react-auth-f46ca.appspot.com",
  messagingSenderId: "595388270196",
  appId: "1:595388270196:web:9dd919653a46736081b321"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);