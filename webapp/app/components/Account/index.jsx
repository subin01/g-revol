"use client";

import { useUser } from "@clerk/nextjs";
import Actions from "./Actions";

export default function Account() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return (
      <>
        <h1>Not loaded or not Signed in!</h1>
        <a href="/account">Try again</a>
      </>
    );
  }

  return (
    <>
      <Actions uid={user?.id} displayName={user?.displayName} />
    </>
  );
}
