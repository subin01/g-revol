import Image from "next/image";
import styles from "./page.module.css";
import { UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import User from "@/app/components/User";
import Listing from "@/app/components/Listing";
import InitSignInWithClerk from "@/app/components/InitSignInWithClerk";
import SignOut from "@/app/components/SignOut";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>G Revolution!</h1>
      <InitSignInWithClerk />
      <br />
      <hr />

      {/* <SignedIn>
       <UserButton afterSignOutUrl="/" /> 
        </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut> */}

      <User />
      <hr />
      <SignOut />
      <hr />

      <Listing />
    </main>
  );
}
