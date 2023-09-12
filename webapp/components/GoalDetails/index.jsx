"use client";

import styles from "./index.module.scss";
import Link from "next/link";
import { store, useSnapshot } from "@/firebase/init";
import Projects from "./Projects";

export default function GoalDetails({ gid }) {
  const snap = useSnapshot(store);
  const goalsObj = snap.goals;
  const goal = goalsObj[gid];

  if (snap.isDataLoading) return <div>Loading...</div>;

  return (
    <section className={styles.goalDetails}>
      <h1 className={`${styles.heading} h2`}>
        <span>{goal?.gid}</span> {goal?.title}
      </h1>
      <Projects gid={gid} />
    </section>
  );
}
