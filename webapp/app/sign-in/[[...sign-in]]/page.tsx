import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="page__signin cols-2">
      <div className="col-1">
        <h1 className="h2">Welcome to the G&nbsp;Revolution.</h1>
      </div>
      <div className="col-2">
        <SignIn />
      </div>
    </div>
  );
}
