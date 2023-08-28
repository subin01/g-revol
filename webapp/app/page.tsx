import Image from "next/image";
import styles from "./page.module.css";
import User from "../components/User";
import Listing from "../components/Listing";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>G Revolution!</h1>
      <User />
      <hr />
      <Listing />
    </main>
  );
}
