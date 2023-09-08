import { UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";

import data from "@/app/data.json";
import Header from "@/app/components/Header";

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

function Item({ project }: { project: IProject }) {
  const size = "1200/1200";

  return (
    <article>
      <img width="600" height="600" src={`${project.image}${size}`} alt="" />
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

function getProject(goals: any, id: string) {
  const projects: any = [];
  // @ts-ignore
  goals.forEach((g) => projects.push(...g.projects));
  // @ts-ignore
  return projects.find((p) => p.id == id);
}

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const project = getProject(data.goals, id);

  if (!project) return <h1>404</h1>;

  return (
    <>
      {project ? (
        <>
          <Item project={project} />
          <div className="box">
            <h2 className="h2">About the project</h2>

            <div>
              <h4 className="h5">We hit a milestone!</h4>
              <p>
                blah blah blah blah blah blahblah blah blahblah blah blah...
              </p>
            </div>
          </div>
        </>
      ) : (
        <h1>Not found!</h1>
      )}
    </>
  );
}
