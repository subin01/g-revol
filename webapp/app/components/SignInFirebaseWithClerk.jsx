"use client";

import { useAuth } from "@clerk/nextjs";
import { getAuth, signInWithCustomToken } from "firebase/auth";

export default function SignInFirebaseWithClerk() {
  const { getToken } = useAuth();

  async function handleSignInFirebaseWithClerk() {
    const clerkCustomToken = await getToken({
      template: "integration_firebase",
    });
    console.log("clicked2", clerkCustomToken);

    if (!clerkCustomToken) {
      console.log("No token, please login");
      return;
    }

    const auth = getAuth();
    signInWithCustomToken(auth, clerkCustomToken)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user---------", user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error---------", error);

        // ...
      });
  }

  return (
    <button onClick={handleSignInFirebaseWithClerk}>
      SignInFirebaseWithClerk
    </button>
  );
}
