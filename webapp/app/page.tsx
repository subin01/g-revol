import Image from "next/image";
import styles from "./page.module.css";
import { UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";

import Header from "@/app/components/header";
import data from "@/app/data.json";

function Item({ project }) {
  const size = "400/400";
  return (
    <article>
      <img width="200" height="200" src={`${project.image}${size}`} />
      <h3>{project.title}</h3>
      <Link href={`/project/${project.id}`} className="button">
        Buy Now
      </Link>
    </article>
  );
}

function Goal({ goal }) {
  return (
    <section>
      <h2>
        {goal.id}&nbsp;&nbsp;&nbsp;{goal.title}
      </h2>
      <div>
        {goal.projects.map((project, i) => (
          <Item key={i} project={project} />
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {data.goals.map((goal, i) => (
          <Goal key={i} goal={goal} />
        ))}
      </main>
    </>
  );
}
