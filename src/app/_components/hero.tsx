"use client";

import Button from "./button";
import { JSX, useEffect, useState } from "react";
import Particle from "./particles";
import LoadAnimation from "./load-animation";

export default function Hero({ className }: { className?: string }) {
  const [particles, setParticles] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const createParticles = () => {
      const newParticles = [...Array(50)].map((_, i) => (
        <Particle key={i} delay={i * 0.1} />
      ));
      setParticles(newParticles);
    };

    createParticles();
  }, []);

  return (
    <LoadAnimation delay={0.2}>
      <div className="flex flex-col gap-3 justify-center mx-auto items-center relative mb-10">
        <h1 className={`text-[var(--purple)] ${className}`}>
          Hi, I am Edoardo
        </h1>
        <p className="text-6xl flex flex-col gap-2 justify-center text-center">
          <span className="text-gradient">Design that works,</span>
          <span className="text-gradient">experiences that captivate.</span>
        </p>
        <p className="flex flex-col justify-center items-center gap-1 mt-5 text-[var(--grey)] p-5 text-center md:p-0">
          <span>
            As a frontend developer, I create visually stunning,
            high-performance websites that work seamlessly on any device.
          </span>
          <span>
            If you want a site that looks great and functions perfectly,
            you&apos;re in the right place.
          </span>
        </p>
        <LoadAnimation delay={0.5}>
          <div className="flex gap-5 mt-7">
            <Button>Contact me</Button>
            <Button variant>See my work</Button>
          </div>
        </LoadAnimation>
        {particles}
      </div>
    </LoadAnimation>
  );
}
