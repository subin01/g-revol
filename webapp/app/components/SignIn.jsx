"use client";

import { useAuth } from "@clerk/nextjs";
import { auth, googleProvider } from "../../firebase/init";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  getAuth,
  signInWithCustomToken,
} from "firebase/auth";

import { useState, useEffect } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { getToken } = useAuth();

  // console.log("AUTH email: ", auth?.currentUser?.email);
  // console.log("AUTH: ", auth?.currentUser?.email);
  // console.log(auth?.currentUser?.photoURL);

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithClerk = async () => {
    // try {
    //   const auth = getAuth();
    //   const token = await getToken({ template: "integration_firebase" });
    //   const userCredentials = await signInWithCustomToken(auth, token);
    //   /**
    //    * The userCredentials.user object will call the methods of
    //    * the Firebase platform as an authenticated user.
    //    */
    //   console.log("user ::", userCredentials.user);
    // } catch (err) {
    //   console.error(err);
    // }
  };

  // useEffect(() => {
  //   const signInWithClerk = async () => {
  //     const cAuth = clerkAuth();
  //     const token = await getToken({ template: "integration_firebase" });
  //     const userCredentials = await signInWithCustomToken(cAuth, token);

  //     /**
  //      * The userCredentials.user object will call the methods of
  //      * the Firebase platform as an authenticated user.
  //      */
  //     console.log("user ::", userCredentials.user);
  //   };

  //   signInWithClerk();
  // }, []);

  return (
    <div>
      <input placeholder="Email.." onChange={(e) => setEmail(e.target.value)} />
      <input
        type="password"
        placeholder="Password.."
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signIn}> Sign in with email </button>
      <br />
      <button onClick={signInWithGoogle}> Sign in with google</button>
      <br />
      {/* <button onClick={signInWithClerk}> Signin with Clerk</button> */}
    </div>
  );
}
