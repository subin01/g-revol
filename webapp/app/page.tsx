import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

import Goal from "@/components/Goal";
import data from "@/app/data.json";

export default function HomePage() {
  return (
    <>
      <h1 className="h3">
        Our web3 vision to create a decentralised impact economy, where the good
        you do for people and planet has currency, is here. <br /> <br />
        Welcome to the G Revolution.
      </h1>

      <div className="my-6">
        {data.goals.map((goal, i) => (
          <Goal key={i} goal={goal} />
        ))}
      </div>
    </>
  );
}
