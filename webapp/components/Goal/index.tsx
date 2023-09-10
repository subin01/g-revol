"use client";

import { UserButton } from "@clerk/nextjs";
import styles from "./index.module.scss";
import Link from "next/link";
import GoalDetails from "@/components/GoalDetails";
import NftItem from "@/components/NFTItem";

export function NFTs({ nfts }) {
  return (
    <div className="grid-3">
      {nfts.map((nft, i) => (
        <NftItem key={i} nft={nft} />
      ))}
    </div>
  );
}

interface Inft {
  id: string;
  title: string;
  image: string;
}

interface IGoal {
  gid: string;
  title: string;
  nfts: Inft[];
}

export default function Goal({ goal }: { goal: IGoal }) {
  return (
    <section className={styles.goal}>
      <h2 className={`${styles.heading} h3`}>
        <span>{goal.gid}</span> <span>{goal.title}</span>
      </h2>
      <NFTs nfts={goal.nfts} />
      <Link href={`/goals/${goal.gid}`} className="button">
        Learn More
      </Link>
    </section>
  );
}
