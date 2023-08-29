import { UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";

import data from "@/app/data.json";
import Header from "@/app/components/Header";

function Item({ project }) {
  const size = "1200/1200";

  return (
    <article>
      <img width="600" height="600" src={`${project.image}${size}`} />
      <ul>
        <li>
          <h3>Impact Project: {project.title}</h3>
        </li>
      </ul>
      <Link href={`/`} className="button">
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
        {goal.list.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </div>
    </section>
  );
}

function getProject(goals, id) {
  const projects = [];
  goals.forEach((g) => projects.push(...g.projects));
  return projects.find((p) => p.id == id);
}

export default function Page({ params }) {
  const { id } = params;
  const project = getProject(data.goals, 1);
  if (!project) return <h1>404</h1>;

  return (
    <>
      <Header />

      <main>
        {project ? (
          <>
            <Item project={project} />
            <div className="box">
              <h2>About the project (phase 2)</h2>

              <div>
                {" "}
                <h4>We hit a milestone!</h4>
                <br />
                blah blah blah blah blah blahblah blah blahblah blah blah...
              </div>
            </div>
          </>
        ) : (
          <h1>Not found!</h1>
        )}
      </main>
    </>
  );
}
