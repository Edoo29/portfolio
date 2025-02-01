import LoadAnimation from "./load-animation";

interface NavbarItems {
  label: string;
  href: string;
}

export default function Navbar() {
  const navbarItems: NavbarItems[] = [
    {
      label: "Home",
      href: "#home",
    },

    {
      label: "About",
      href: "#about",
    },

    {
      label: "Projects",
      href: "#projects",
    },

    {
      label: "Contact",
      href: "#contact",
    },
  ];

  return (
    <LoadAnimation>
      <nav className="text-[var(--grey)] flex justify-center mx-auto fixed z-10 top-0 left-1/2 transform -translate-x-1/2 p-3 mt-5 border-glass rounded-xl backdrop-blur-md">
        <ul className="flex gap-7">
          {navbarItems.map((item) => (
            <li key={item.label} className="hover:text-white transition-all">
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </LoadAnimation>
  );
}
