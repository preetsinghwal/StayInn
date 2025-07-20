import Link from "next/link";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div>
      <Navigation />
      <h1>Welcome to StayInn Hotel</h1>
      <Link href="/cabins">Explore luxary rooms</Link>
    </div>
  );
}
