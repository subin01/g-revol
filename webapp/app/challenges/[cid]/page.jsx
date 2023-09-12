import ChallengeDetails from "@/components/ChallengeDetails";

export default function Page({ params }) {
  const { cid } = params;

  return <ChallengeDetails cid={cid} />;
}
