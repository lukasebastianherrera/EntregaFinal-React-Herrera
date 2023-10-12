// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBr2BMnU2qO8arUxLKg1K0ykwba_5mI9Sk",
  authDomain: "muebleria-arce.firebaseapp.com",
  projectId: "muebleria-arce",
  storageBucket: "muebleria-arce.appspot.com",
  messagingSenderId: "625211965376",
  appId: "1:625211965376:web:4f8a628fcc23d602fa1225"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFireBase = () => app