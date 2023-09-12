import Account from "@/components/Account";
import WithFirebaseAuth from "@/components/WithFirebaseAuth";

export default function AccountPage() {
  return (
    <WithFirebaseAuth>
      <Account />
    </WithFirebaseAuth>
  );
}
