// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWl0FjC6zl3H_fyZmYQ6vDUoC94mc7CRI",
  authDomain: "mati-dario.firebaseapp.com",
  projectId: "mati-dario",
  storageBucket: "mati-dario.appspot.com",
  messagingSenderId: "172751063682",
  appId: "1:172751063682:web:f37ac51eaea3126463429b",
  measurementId: "G-FJ7RPHVCHM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app
