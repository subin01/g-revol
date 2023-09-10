import { UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";

import data from "@/app/data.json";
import Header from "@/components/Header";

import NFTItem from "@/components/NFTItem";

interface Inft {
  id: string;
  title: string;
  image: string;
}

interface IGoal {
  id: string;
  title: string;
  nfts: Inft[];
}

function getGoal(goals: any, gid: string) {
  // @ts-ignore
  return goals.find((g) => g.gid == gid);
}

export default function Page({ params }: { params: { gid: string } }) {
  const { gid } = params;
  const goal = getGoal(data.goals, gid);

  if (!goal) return <h1>404</h1>;

  return (
    <div>
      <h2 className="h2">About the Goal</h2>
      <p>blah blah blah blah blah blahblah blah blahblah blah blah...</p>

      <section className=" my-4">
        <h3 className="h3">Projects </h3>
        <div className="grid-3 ">
          <article className="box">Project 1</article>
          <article className="box">Project 2</article>
          <article className="box">Project 3</article>
        </div>
      </section>

      <section className=" my-4">
        <h3 className="h3">NFTS </h3>
        <div className="grid-3">
          {goal.nfts && goal.nfts.map((nft: Inft) => <NFTItem nft={nft} />)}
        </div>
      </section>

      <div className="box">
        <h4 className="h5">We hit a milestone!</h4>
        <p>blah blah blah blah blah blahblah blah blahblah blah blah...</p>
      </div>
    </div>
  );
}
