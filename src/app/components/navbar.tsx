"use client";

import Link from "next/link";
import { gsap } from "gsap";

type NavbarItems = {
  title: string;
  href: string;
};

const Navbar: React.FC = () => {
  const navbarItems: NavbarItems[] = [
    { title: "About", href: "/about" },
    { title: "Skills", href: "/skills" },
    { title: "Work", href: "/work" },
  ];

  const handleMouseEnter = (target: string): void => {
    gsap.to(target, {
      scale: 2,
      duration: 0.5,
      ease: "elastic",
    });
  };

  const handleMouseLeave = (target: string): void => {
    gsap.to(target, {
      scale: 1,
      duration: 0.5,
      ease: "elastic",
    });
  };

  return (
    <nav className="hidden md:flex fixed w-full justify-between items-center py-5 px-10 backdrop-blur-md bg-opacity-50 border-b border-[rgba(255,255,255,0.2)] shadow-xl">
      {/* Left side of the navbar */}
      <ul className="flex gap-10">
        {navbarItems.map((item, idx) => (
          <li
            id={item.title}
            key={idx}
            onMouseEnter={() => handleMouseEnter(`#${item.title}`)}
            onMouseLeave={() => handleMouseLeave(`#${item.title}`)}
          >
            <Link
              href={item.href}
              aria-label={`Link to the ${item.title} section`}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      {/* Right side of the navbar */}
      <button
        type="button"
        className="cursor-pointer"
        onMouseEnter={() => handleMouseEnter("button")}
        onMouseLeave={() => handleMouseLeave("button")}
      >
        Hire me
      </button>
    </nav>
  );
};

export default Navbar;
