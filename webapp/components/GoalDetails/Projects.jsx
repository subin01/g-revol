import styles from "./index.module.scss";
import Link from "next/link";
import { store, useSnapshot } from "@/firebase/init";

export default function Projects({ gid }) {
  const projectsObj = useSnapshot(store.projects);
  const projects = Object.values(projectsObj);

  return (
    <section className={styles.goalDetails}>
      <h2>Projects</h2>
      <div className="grid-3">
        {projects?.map((p) => (
          <article key={p.pid} className={styles.project}>
            <h3 className="h3">{p.title}</h3>
            <Link href={`/projects/${p.pid}`}>Learn more</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
