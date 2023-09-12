"use client";

import { useUser } from "@clerk/nextjs";
import Actions from "./Actions";
import withFirebaseAuth from "@/components/withFirebaseAuth";

function Account({ user }) {
  return (
    <>
      <Actions uid={user?.uid} displayName={user?.displayName} />
    </>
  );
}

export default withFirebaseAuth(Account);
