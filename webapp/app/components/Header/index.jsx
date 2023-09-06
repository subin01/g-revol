import { UserButton, SignOutButton } from "@clerk/nextjs";
import styles from "./index.module.scss";
import Link from "next/link";

export default function Header(props) {
  return (
    <header className={styles.header}>
      <div>
        <a className={styles.logo}>Revolution</a>

        <nav>
          <Link href="/account">Account</Link>
        </nav>
        {/* <SignOutButton /> */}

        <UserButton />
      </div>
    </header>
  );
}
