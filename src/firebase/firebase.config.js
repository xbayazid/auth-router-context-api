// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDejC3bhIbogGY-PW_pZhr2ioHJXPpg-rM",
  authDomain: "email-password-auth-ec4a9.firebaseapp.com",
  projectId: "email-password-auth-ec4a9",
  storageBucket: "email-password-auth-ec4a9.appspot.com",
  messagingSenderId: "337096276160",
  appId: "1:337096276160:web:6c49fe853247204f02d525"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;