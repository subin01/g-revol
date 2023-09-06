import Image from "next/image";
import { UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import User from "@/app/components/User";
import Listing from "@/app/components/Listing";
import InitSignInWithClerk from "@/app/components/InitSignInWithClerk";
import SignInFirebaseWithClerk from "@/app/components/SignInFirebaseWithClerk";
import SignOut from "@/app/components/SignOut";

export default function Account() {
  return (
    <main>
      <InitSignInWithClerk />
      <br />
      <SignInFirebaseWithClerk />
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
