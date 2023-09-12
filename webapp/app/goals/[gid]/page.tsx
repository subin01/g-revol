import { UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";

import data from "@/app/data.json";
import Header from "@/components/Header";

import NFTItem from "@/components/NFTItem";
import GoalDetails from "@/components/GoalDetails";

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
      <GoalDetails gid={gid} />

      <section className=" my-4">
        <h3 className="h5">NFTS </h3>
        <div className="grid-3">
          {goal.nfts &&
            goal.nfts.map((nft: Inft) => <NFTItem key={nft.id} nft={nft} />)}
        </div>
      </section>

      <div className="card">
        <h4 className="h5">We hit a milestone!</h4>
        <p>blah blah blah blah blah blahblah blah blahblah blah blah...</p>
      </div>
    </div>
  );
}
