import Image from "next/image";
import {
  UserButton,
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";
import User from "@/components/User";
import Listing from "@/components/Listing";
import Account from "@/components/Account";
import InitSignInWithClerk from "@/components/InitSignInWithClerk";
import SignInFirebaseWithClerk from "@/components/SignInFirebaseWithClerk";
import SignOut from "@/components/SignOut";

export default function AccountPage() {
  return (
    <>
      <InitSignInWithClerk />

      <hr />

      <Account />

      {/* <Listing /> */}
    </>
  );
}
