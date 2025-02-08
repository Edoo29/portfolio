"use client";

import About from "./_components/about";
import CustomCursor from "./_components/custom-cursor";
import Hero from "./_components/hero";
import Navbar from "./_components/navbar";
import Projects from "./_components/projects";
import ScrollProgress from "./_components/scroll-progress";
import useParticles from "./_hooks/useParticles";
import Contact from "./_components/contact";

export default function Home() {
  const particles = useParticles();

  return (
    <div data-cursor-color="var(--purple)" suppressHydrationWarning>
      <CustomCursor />
      {particles}
      <Navbar />
      <ScrollProgress />
      <Hero className="mt-10 md:mt-40" />
      <About className="h-screen" />
      <Projects className="h-screen" />
      <Contact className="h-screen mb-80" />
    </div>
  );
}
