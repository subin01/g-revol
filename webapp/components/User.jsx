"use client";

import { store } from "../firebase/init";
import { snapshot, useSnapshot } from "valtio";

import SignIn from "./SignIn";
import SignOut from "./SignOut";

export default function User() {
  let snap = useSnapshot(store);
  console.log("<User>", snap);
  const user = snap?.currentUser?.email;

  if (snap.currentUser === "unknown") {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      {user ? (
        <>
          <h1>Welcome, {user}</h1>
          <SignOut />
        </>
      ) : (
        <SignIn></SignIn>
      )}
    </div>
  );
}
