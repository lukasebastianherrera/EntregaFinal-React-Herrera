
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBr2BMnU2qO8arUxLKg1K0ykwba_5mI9Sk",
  authDomain: "muebleria-arce.firebaseapp.com",
  projectId: "muebleria-arce",
  storageBucket: "muebleria-arce.appspot.com",
  messagingSenderId: "625211965376",
  appId: "1:625211965376:web:4f8a628fcc23d602fa1225"
};

const app = initializeApp(firebaseConfig);

export const initFireBase = () => app