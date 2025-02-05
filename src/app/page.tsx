"use client";

import Hero from "./_components/hero";
import Navbar from "./_components/navbar";
import ScrollProgress from "./_components/scroll-progress";
import useParticles from "./_hooks/useParticles";

export default function Home() {
  const particles = useParticles();

  return (
    <>
      {particles}
      <ScrollProgress />
      <Navbar />
      <Hero className="mt-10 md:mt-40" id="home" />
      <div className="mt-[1000px] text-white" id="about">
        ciao
      </div>
    </>
  );
}
