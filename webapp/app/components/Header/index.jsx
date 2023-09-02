import { UserButton } from "@clerk/nextjs";
import styles from "./index.module.scss";

export default function Header(props) {
  return (
    <header className={styles.header}>
      <div>
        <a className={styles.logo}>Revolution</a>
        {/* <UserButton /> */}
      </div>
    </header>
  );
}
