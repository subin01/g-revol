import { UserButton } from "@clerk/nextjs";
import styles from "./index.module.scss";
import Link from "next/link";

function Item({ project }: { project: any }) {
  const size = "760/760";
  return (
    <article>
      <div className={styles.imageWrap}>
        <img
          className={styles.img}
          width="400"
          height="400"
          src={`${project.image}${size}`}
        />
      </div>
      <h3 className="h5">{project.title}</h3>
      <Link href={`/project/${project.id}`} className="button">
        Buy Now
      </Link>
    </article>
  );
}

interface IProject {
  id: string;
  title: string;
  image: string;
}

interface IGoal {
  id: string;
  title: string;
  projects: IProject[];
}

export default function Goal({ goal }: { goal: IGoal }) {
  return (
    <section className={styles.goal}>
      <h2 className={`${styles.heading} h3`}>
        <span>{goal.id}</span> <span>{goal.title}</span>
      </h2>
      <div className="grid-3">
        {goal.projects.map((project, i) => (
          <Item key={i} project={project} />
        ))}
      </div>
    </section>
  );
}
