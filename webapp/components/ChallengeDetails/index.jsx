"use client";

import styles from "./index.module.scss";
import Link from "next/link";
import { store, useSnapshot } from "@/firebase/init";

export default function ChallengeDetails({ cid }) {
  const snap = useSnapshot(store);
  const challengesObj = snap.challenges;
  const challenge = challengesObj[cid];

  const actionsObj = snap.actions;
  let actions = Object.values(actionsObj);
  actions = Object.values(actionsObj).filter((a) => a.cid === cid);

  if (snap.isDataLoading) return <div>Loading...</div>;

  return (
    <section className={styles.challengeDetails}>
      <h2 className="h2">{challenge?.title}</h2>
      <h2 className="h5">Challenge Goal</h2>
      <h3 className="serif">{challenge?.subtitle}</h3>

      <div className="my-5">
        <h3 className="h4">Actions</h3>

        {actions?.map((a) => (
          <article key={a.aid} className={`${styles.actions} box`}>
            <h3 className="h4">{a.title}</h3>
            <Link href={`/`}>Take G action</Link>
          </article>
        ))}

        {actions.length == 0 ? "No active actions!" : null}
      </div>
    </section>
  );
}
