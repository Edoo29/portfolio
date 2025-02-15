"use client";

import Button from "./button";
import LoadAnimation from "./load-animation";
import Arrow from "./arrow";

export default function Hero({ className }: { className?: string }) {
  return (
    <LoadAnimation delay={0.2} animateWhenVisible>
      <div
        id="home"
        className="flex flex-col gap-3 justify-center mx-auto items-center relative mb-10"
      >
        <h1 className={`text-[var(--purple)] text-xl ${className}`}>
          Hi, I am Edoardo
        </h1>
        <p className="text-5xl md:text-7xl flex flex-col gap-2 justify-center text-center">
          <span className="text-gradient text-glowing transition-all">
            Design that works,
          </span>
          <span className="text-gradient text-glowing transition-all">
            experiences that captivate.
          </span>
        </p>
        <p className="text-lg md:text-xl flex flex-col justify-center items-center gap-1 mt-5 text-[var(--grey)] p-5 text-center md:p-0">
          <span>
            As a frontend developer, I create visually stunning,
            high-performance websites that work seamlessly on any device.
          </span>
          <span>
            If you want a site that looks great and functions perfectly,
            you&apos;re in the right place.
          </span>
        </p>
        <LoadAnimation delay={0.5} animateWhenVisible>
          <div className="flex gap-5 mt-7">
            <Button>
              <a href="#contact">Contact me</a>
            </Button>
            <Button variant>
              <a href="#projects">See my work</a>
            </Button>
          </div>
        </LoadAnimation>
        <LoadAnimation delay={0.7} animateWhenVisible>
          <Arrow
            direction="down"
            className="text-[var(--purple)] mt-20"
            reference="#about"
          >
            Read more about me
          </Arrow>
        </LoadAnimation>
      </div>
    </LoadAnimation>
  );
}
