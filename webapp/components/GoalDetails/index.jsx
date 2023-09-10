"use client";

import { UserButton } from "@clerk/nextjs";
import styles from "./index.module.scss";
import Link from "next/link";
import Projects from "./Projects";

import {
  db,
  collection,
  doc,
  setDoc,
  useCollection,
  useDocumentData,
} from "@/firebase/init";

export default function GoalDetails({ gid }) {
  return (
    <section className={styles.goalDetails}>
      <h1>Goal Details</h1>
      <Projects gid={gid} />
    </section>
  );
}
