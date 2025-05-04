// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvMlqMiucAilTCMJI0i74Q0VcthY-Ec-Q",
  authDomain: "auth-configuration.firebaseapp.com",
  projectId: "auth-configuration",
  storageBucket: "auth-configuration.firebasestorage.app",
  messagingSenderId: "583567910809",
  appId: "1:583567910809:web:97936bc7789f60a99ed508",
  measurementId: "G-50W91R5ZEF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();