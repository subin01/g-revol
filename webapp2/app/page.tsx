import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import styles from "./page.module.css";
import Listing from "@/app/components/Listing";

export default function Home() {
  return (
    <>
      <header>
        <div>
          <a href="#">G</a>
          <UserButton afterSignOutUrl="/" />
        </div>
      </header>
      <main>
        <h1>Home page</h1>

        <Listing />
      </main>
    </>
  );
}
