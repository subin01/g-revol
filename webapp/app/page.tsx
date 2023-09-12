import Goals from "@/components/Goals";

export default function HomePage() {
  return (
    <>
      <h1 className="h3">
        Our web3 vision to create a decentralised impact economy, where the good
        you do for people and planet has currency, is here. <br /> <br />
        Welcome to the G Revolution.
      </h1>

      <div className="my-4">
        <Goals />
      </div>
    </>
  );
}
