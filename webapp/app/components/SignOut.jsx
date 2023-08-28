"use client";

import { auth, googleProvider } from "../../firebase/init";
import { signOut } from "firebase/auth";

export default function SignOut() {
  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return <button onClick={logOut}>Log Out</button>;
}
