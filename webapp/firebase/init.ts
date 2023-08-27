// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { onAuthStateChanged } from "firebase/auth";
import { proxy, snapshot, subscribe, useSnapshot } from "valtio";
import { watch, subscribeKey, devtools } from "valtio/utils";

declare module "valtio" {
  function useSnapshot<T extends object>(p: T): T;
}

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDdmEdehFcI78nK5A7HLdWRxXoYJiS6g34",
  authDomain: "g-revol.firebaseapp.com",
  projectId: "g-revol",
  storageBucket: "g-revol.appspot.com",
  messagingSenderId: "999891980314",
  appId: "1:999891980314:web:b7f97f06adc1fdaf4e41a3",
  measurementId: "G-PW2STSN1DB",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

// const analytics = getAnalytics(app);

const googleProvider = new GoogleAuthProvider();

const signOut = async () => {
  try {
    auth.signOut();
    // router.push('/login')
  } catch {
    console.log("Failed to log out");
  }
};

if (typeof window !== "undefined") {
  // @ts-ignore
  window.signin = () =>
    // Replace with one of your Firebase auth users to easily signin/signout
    signInWithEmailAndPassword(auth, "username1@user.com", "username1");
  // @ts-ignore
  window.signout = () => signOut(auth);
}

let store = proxy({
  currentUser: "unknown",
});

onAuthStateChanged(auth, (firebaseUser) => {
  store.currentUser = firebaseUser || null;
});

subscribe(store, () => {
  const snap = snapshot(store);
  console.log("store changed", snap);
});

const unsub = devtools(store, { name: "GRevol", enabled: true });

export { app, store, db, auth, googleProvider, signOut };
