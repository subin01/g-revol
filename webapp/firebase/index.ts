// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdmEdehFcI78nK5A7HLdWRxXoYJiS6g34",
  authDomain: "g-revol.firebaseapp.com",
  projectId: "g-revol",
  storageBucket: "g-revol.appspot.com",
  messagingSenderId: "999891980314",
  appId: "1:999891980314:web:b7f97f06adc1fdaf4e41a3",
  measurementId: "G-PW2STSN1DB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);