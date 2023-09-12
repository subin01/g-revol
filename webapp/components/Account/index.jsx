"use client";

import Actions from "./Actions";

export default function Account({ user }) {
  return (
    <>
      <Actions uid={user?.uid} />
    </>
  );
}
