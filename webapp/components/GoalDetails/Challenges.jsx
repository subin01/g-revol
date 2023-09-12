import styles from "./index.module.scss";
import Link from "next/link";
import { store, useSnapshot } from "@/firebase/init";

export default function Challenges({ gid }) {
  const challengesObj = useSnapshot(store.challenges);
  let challenges = Object.values(challengesObj);
  if (gid) {
    challenges = Object.values(challengesObj).filter((c) => c.gid === gid);
  }

  return (
    <section>
      <h2 className="h5">Challenges</h2>
      <div className="grid-3">
        {challenges?.map((c) => (
          <article key={c.cid} className={`${styles.challenge} card`}>
            <h3 className="h4">{c.title}</h3>
            <Link href={`/challenges/${c.cid}`}>Learn more</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
