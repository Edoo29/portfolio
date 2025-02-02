import Hero from "./_components/hero";
import Navbar from "./_components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero className="mt-10 md:mt-40" id="home" />
      <div className="mt-[1000px]" id="about">
        ciao
      </div>
    </>
  );
}
