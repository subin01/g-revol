import Image from "next/image";
import {
  UserButton,
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";
import User from "@/app/components/User";
import Listing from "@/app/components/Listing";
import InitSignInWithClerk from "@/app/components/InitSignInWithClerk";
import SignInFirebaseWithClerk from "@/app/components/SignInFirebaseWithClerk";
import SignOut from "@/app/components/SignOut";

export default function AccountPage() {
  return (
    <main>
      {/* <User /> */}
      {/* <SignInFirebaseWithClerk /> */}
      <InitSignInWithClerk />
      <hr />
      {/* <SignOut /> */}
      <SignOutButton />

      <hr />

      <Listing />
    </main>
  );
}
