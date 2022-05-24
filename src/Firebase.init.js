// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQS0L-BnqvuXBcjK46KnQOSDEFLt4sKyU",
  authDomain: "manufacturer-website-d44bf.firebaseapp.com",
  projectId: "manufacturer-website-d44bf",
  storageBucket: "manufacturer-website-d44bf.appspot.com",
  messagingSenderId: "32651846967",
  appId: "1:32651846967:web:ddae42fc94872470a0a6b2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
