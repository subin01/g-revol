"use client";

import { useAuth } from "@clerk/nextjs";
import { getAuth, signInWithCustomToken } from "firebase/auth";
import { useState, useEffect, Children, cloneElement } from "react";
import { store, useSnapshot } from "@/firebase/init";

//delay func
const wait = (ms) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });

const retryWithDelay = async (
  fn,
  retries = 3,
  interval = 1000,
  finalErr = "failed"
) => {
  try {
    await fn();
  } catch (err) {
    if (retries <= 0) {
      return Promise.reject(finalErr); // if no retries left throw error
    }

    await wait(interval); //delay the next call
    return retryWithDelay(fn, retries - 1, interval, finalErr); //recursively call the same func
  }
};

export default function WithFirebaseAuth({ children }) {
  const snap = useSnapshot(store);
  const { getToken } = useAuth();
  const [error, setError] = useState(false);

  async function signInWithClerkToken() {
    if (snap.firebaseUser) return;

    const auth = getAuth();
    const token = await getToken({ template: "integration_firebase" });
    // @ts-ignore
    const userCredentials = await signInWithCustomToken(auth, token);
    console.log("WithFirebaseAuth User ::::::", userCredentials.user);
    store.firebaseUser = userCredentials.user;
  }

  async function initSignIn() {
    await retryWithDelay(signInWithClerkToken());
  }

  useEffect(() => {
    if (!snap.firebaseUser) {
      try {
        initSignIn();
      } catch (e) {
        console.log("WithFirebaseAuth Error :::", e);
        setError(true);
      }
    }
  }, [error]);

  const renderChildren = () => {
    return Children.map(children, (child) => {
      return cloneElement(child, {
        user: snap.firebaseUser,
      });
    });
  };

  if (snap.firebaseUser) return renderChildren();

  return !error ? "Loading..." : "Error";
}
