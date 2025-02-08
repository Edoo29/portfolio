"use client";

import { useState } from "react";
import Arrow from "./arrow";
import LoadAnimation from "./load-animation";

export default function ContactMe({ className }: { className?: string }) {
  const [clicks, setClicks] = useState<number>(3);
  const [showEmail, setShowEmail] = useState<boolean>(false);

  const handleClick = () => {
    setClicks((prev) => prev - 1);
    if (clicks <= 1) {
      setShowEmail(true);
    }
  };

  return (
    <div
      id="contact"
      className={`flex flex-col items-center justify-center gap-6 p-3 ${className}`}
    >
      <div className="flex flex-col gap-3 justify-center items-center">
        <LoadAnimation animateWhenVisible>
          <h2 className="text-4xl">Contact me</h2>
        </LoadAnimation>
        <LoadAnimation animateWhenVisible delay={0.2}>
          <p className="text-[var(--grey)] text-lg md:text-xl">
            If you want to get in touch with me or have any questions, feel free
            to send me an email.
          </p>
        </LoadAnimation>
      </div>
      <LoadAnimation animateWhenVisible delay={0.4}>
        <div
          className="p-5 border-glass rounded-xl shadow-md cursor-pointer glowing-effect"
          onClick={handleClick}
        >
          {showEmail ? (
            // TODO: Add the real email address
            <a href="example@gmail.com">example@gmail.com</a>
          ) : (
            <p>Click me {clicks} times to see my email</p>
          )}
        </div>
      </LoadAnimation>
      <LoadAnimation animateWhenVisible delay={0.6}>
        <Arrow
          direction="up"
          reference="#home"
          className="text-[var(--purple)] mt-20"
        >
          Go back
        </Arrow>
      </LoadAnimation>
    </div>
  );
}
