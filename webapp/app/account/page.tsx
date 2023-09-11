import Image from "next/image";
import {
  UserButton,
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";

import Listing from "@/components/Listing";
import Account from "@/components/Account";
import InitSignInWithClerk from "@/components/InitSignInWithClerk";

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
