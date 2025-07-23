import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to StayInn Hotel</h1>
      <Link href="/cabins">Explore luxary rooms</Link>
    </div>
  );
}
