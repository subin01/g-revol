"use client";

import styles from "./index.module.scss";
import Link from "next/link";
import { store, useSnapshot, db, doc, setDoc } from "@/firebase/init";

export default function ChallengeDetails({ cid }) {
  const snap = useSnapshot(store);
  const challengesObj = snap.challenges;
  const challenge = challengesObj[cid];

  const actionsObj = snap.actions;
  let actions = Object.values(actionsObj);
  actions = Object.values(actionsObj).filter((a) => a.cid === cid);

  if (snap.isDataLoading) return <div>Loading...</div>;

  async function handleActionClick(aid, title) {
    const user = store.user;
    console.log("user", user);

    if (!user) {
      alert("You need to login!");
      return;
    }

    try {
      const userActions = user.actions;
      console.log(userActions);

      if (userActions && userActions[aid]) {
        alert("Oops! You're pledged to this action already!");
        return;
      }

      const actionObj = { [aid]: { aid, title, status: "pledged" } };
      console.log("actionObj", actionObj);
      const userDocRef = doc(db, "users", user.uid);
      const res = await setDoc(
        userDocRef,
        { actions: actionObj },
        { merge: true }
      );
      store.user.actions = { ...userActions, ...actionObj };
      alert("Awesome! Check your account see your pledged actions");
    } catch (e) {
      console.log(e);
    }
  }

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
            <button
              className="button"
              onClick={() => handleActionClick(a.aid, a.title)}
            >
              Take G action
            </button>
          </article>
        ))}

        {actions.length == 0 ? "No active actions!" : null}
      </div>
    </section>
  );
}
