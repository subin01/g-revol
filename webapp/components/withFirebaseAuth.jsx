"use client";

import { useAuth } from "@clerk/nextjs";
import { getAuth, signInWithCustomToken } from "firebase/auth";
import { useState, useEffect } from "react";
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

const withFirebaseAuth = (Component) => (props) => {
  const snap = useSnapshot(store);
  const { getToken } = useAuth();
  const [error, setError] = useState(false);

  useEffect(async () => {
    const signInWithClerkToken = async () => {
      const auth = getAuth();
      const token = await getToken({ template: "integration_firebase" });
      // @ts-ignore
      const userCredentials = await signInWithCustomToken(auth, token);
      console.log("withFirebaseAuth User ::::::", userCredentials.user);
      store.firebaseUser = userCredentials.user;
    };

    if (!snap.firebaseUser) {
      try {
        await retryWithDelay(signInWithClerkToken());
      } catch (e) {
        console.log("withFirebaseAuth Error :::", e);
        setError(true);
      }
    }
  }, []);

  if (snap.firebaseUser)
    return <Component {...props} user={snap.firebaseUser} />;

  return !error ? "Loading..." : "Error";
};

export default withFirebaseAuth;
