"use client";

import { store } from "../../firebase/init";

import { snapshot, useSnapshot } from "valtio";

import SignIn from "./SignIn";

export default function User() {
  let snap = useSnapshot(store);
  console.log("<User>", snap);
  const user = snap?.currentUser?.email;

  if (snap.currentUser === "unknown") {
    return (
      <div>
        <h3>User Loading...</h3>
      </div>
    );
  }

  return <div>{user ? <h3>Welcome, {user}</h3> : <SignIn></SignIn>}</div>;
}
