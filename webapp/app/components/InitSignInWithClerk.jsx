"use client";

import { useAuth } from "@clerk/nextjs";
import { getAuth, signInWithCustomToken } from "firebase/auth";
import { useState, useEffect } from "react";

import { auth, googleProvider } from "@/firebase/init";

export default function InitSignInWithClerk() {
  const { getToken } = useAuth();

  // useEffect(() => {
  //   const signInWithClerk = async () => {
  //     const auth = getAuth();
  //     const token = await getToken({ template: "integration_firebase" });
  //     // @ts-ignore
  //     const userCredentials = await signInWithCustomToken(auth, token);

  //     /**
  //      * The userCredentials.user object will call the methods of
  //      * the Firebase platform as an authenticated user.
  //      */
  //     console.log("user ::::::", userCredentials.user);
  //   };

  //   signInWithClerk();
  // }, []);

  return (
    <div>
      Init Sign In with Clerk
      {/* <button onClick={signInWithClerk}> Signin with Clerk</button> */}
    </div>
  );
}
