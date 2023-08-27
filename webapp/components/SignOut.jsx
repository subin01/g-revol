"use client";

import { auth } from "../firebase/init";
import { signOut } from "firebase/auth";

export default function SignOut({ user }) {
  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return <button onClick={logOut}> logOut</button>;
}
