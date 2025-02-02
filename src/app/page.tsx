import Hero from "./_components/hero";
import Navbar from "./_components/navbar";
import ScrollProgress from "./_components/scroll-progress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero className="mt-10 md:mt-40" id="home" />
      <div className="mt-[1000px] text-white" id="about">
        ciao
      </div>
    </>
  );
}
