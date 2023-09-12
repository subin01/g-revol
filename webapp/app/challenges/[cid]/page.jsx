"use client";

import ChallengeDetails from "@/components/ChallengeDetails";
import WithFirebaseAuth from "@/components/WithFirebaseAuth";

export default function Page({ params }) {
  const { cid } = params;

  return (
    <WithFirebaseAuth>
      <ChallengeDetails cid={cid} />
    </WithFirebaseAuth>
  );
}
