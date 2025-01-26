import Link from "next/link";

type NavbarItems = {
  title: string;
  href: string;
};

const Navbar: React.FC = () => {
  const navbarItems: NavbarItems[] = [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Skills",
      href: "/skills",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Work",
      href: "/work",
    },
  ];

  return (
    <nav className="hidden md:flex fixed w-full justify-between items-center p-4 bg-glass backdrop-blur-md bg-opacity-50">
      {/* Left side of the navbar */}
      <p className="">Edo</p>
      {/* Right side of the navbar */}
      <ul className="flex gap-10">
        {navbarItems.map((item, idx) => (
          <li key={idx}>
            <Link
              href={item.href}
              aria-label={`Link to the ${item.title} section`}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
