"use client";

import About from "./_components/about";
import CustomCursor from "./_components/custom-cursor";
import Hero from "./_components/hero";
import Navbar from "./_components/navbar";
import ScrollProgress from "./_components/scroll-progress";
import useParticles from "./_hooks/useParticles";

export default function Home() {
  const particles = useParticles();

  return (
    <div data-cursor-color="var(--purple)">
      <CustomCursor />
      {particles}
      <ScrollProgress />
      <Navbar />
      <Hero className="mt-10 md:mt-40" />
      <About className="mb-80" />
    </div>
  );
}
