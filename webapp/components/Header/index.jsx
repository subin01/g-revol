"use client";

import { UserButton, SignOutButton } from "@clerk/nextjs";
import styles from "./index.module.scss";
import Link from "next/link";
import useScrollDirection from "@/hooks/useScrollDirection";
export default function Header(props) {
  const scrollDirection = useScrollDirection();

  return (
    <header
      className={`${styles.header} ${
        scrollDirection === "down" ? styles.hidden : ""
      }`}
    >
      <div className={styles.wrap}>
        <Link href="/" className={styles.logo}>
          <svg
            width="52"
            height="48"
            viewBox="0 0 52 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M27.3478 25.7494V18.7408H15.4648C15.912 12.0538 21.4701 7.61721 28.1784 7.61721C36.7393 7.61721 42.0418 13.8541 42.0418 23.949C42.0418 34.0438 36.867 40.2806 28.4979 40.2806C22.2369 40.2806 17.7008 36.9372 16.4231 31.6004H7.54283C9.07613 41.5024 17.062 47.8678 28.5617 47.8678C42.4251 47.8678 51.0499 38.3518 51.0499 23.949C51.0499 9.54616 42.4251 0.0300281 29.3283 0.0300293C22.9397 0.0300298 17.7008 2.53766 14.5065 7.10284L13.2927 1.0588H7.03174V18.7059L15.4648 18.7408V25.7494H27.3478Z" />
            <path d="M0.0180664 18.7059H7.03177V25.7648H0.0180664V18.7059Z" />
          </svg>
          Revolution
        </Link>

        <nav>
          <Link href="/account">Account</Link>
          {/* <SignOutButton /> */}
          <div className="avatar">
            <UserButton />
          </div>
        </nav>
      </div>
    </header>
  );
}
