"use client";

import Link from "next/link";

type NavbarItems = {
  title: string;
  href: string;
};

const Navbar = () => {
  const navbarItems: NavbarItems[] = [
    { title: "About", href: "/about" },
    { title: "Skills", href: "/skills" },
    { title: "Work", href: "/work" },
  ];

  return (
    <nav className="hidden md:flex fixed top-0 w-full justify-between items-center py-5 px-10 backdrop-blur-md bg-opacity-50 shadow-md">
      {/* Left side of the navbar */}
      <ul className="flex gap-10">
        {navbarItems.map(({ title, href }, idx) => (
          <li id={title} key={idx}>
            <Link href={href} aria-label={`Link to the ${title} section`}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
      {/* Right side of the navbar */}
      <button type="button" className="cursor-pointer">
        Hire me
      </button>
    </nav>
  );
};

export default Navbar;
