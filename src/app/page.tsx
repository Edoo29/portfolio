"use client";

import About from "./_components/about";
import Hero from "./_components/hero";
import Navbar from "./_components/navbar";
import Projects from "./_components/projects";
import ScrollProgress from "./_components/scroll-progress";
import useParticles from "./_hooks/useParticles";
import ContactMe from "./_components/contact-me";

export default function Home() {
  const particles = useParticles();

  return (
    <div data-cursor-color="var(--purple)" suppressHydrationWarning>
      {particles}
      <Navbar />
      <ScrollProgress />
      <Hero className="mt-10 md:mt-40" />
      <About className="h-screen" />
      <Projects className="h-screen" />
      <ContactMe className="h-screen" />
    </div>
  );
}
