import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="page__signun cols-2">
      <div className="col-1">
        <h1 className="h2">Join the G&nbsp;Revolution.</h1>
      </div>
      <div className="col-2">
        <SignUp />
      </div>
    </div>
  );
}
