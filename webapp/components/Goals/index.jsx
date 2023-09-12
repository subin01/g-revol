"use client";

import styles from "./index.module.scss";
import Link from "next/link";
import { store, useSnapshot } from "@/firebase/init";

export default function Goals() {
  const snap = useSnapshot(store);
  const goalsObj = snap.goals;
  let goals = Object.values(goalsObj).reverse();

  if (snap.isDataLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className={styles.goals}>
      <h2 className="h3">Impact Goals</h2>
      <div className="grid-2">
        {goals?.map((g) => (
          <article key={g.gid} className={`${styles.goal} card`}>
            <h3 className="goal-title h4">
              {g.gid} {g.title}
            </h3>
            <Link href={`/goals/${g.gid}`} className="button">
              Learn more
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
