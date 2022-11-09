// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACAml28UmMtzTF-qZe9hayt-lAw2tjmRo",
  authDomain: "wanderlust-auth.firebaseapp.com",
  projectId: "wanderlust-auth",
  storageBucket: "wanderlust-auth.appspot.com",
  messagingSenderId: "65327253991",
  appId: "1:65327253991:web:94a50498158ea773ac5542"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;