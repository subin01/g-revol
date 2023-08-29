import { UserButton } from "@clerk/nextjs";

export default function Header(props) {
  return (
    <header>
      <div>
        <a className="logo">Revolution</a>
        {/* <UserButton /> */}
      </div>
    </header>
  );
}
