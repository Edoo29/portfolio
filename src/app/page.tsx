import Hero from "./_components/hero";
import Navbar from "./_components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero className="mt-10 md:mt-40" />
    </>
  );
}
