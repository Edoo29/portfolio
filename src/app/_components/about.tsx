"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import LoadAnimation from "./load-animation";
import Arrow from "./arrow";

interface ImageBoxProps {
  idx: number;
  src: string | StaticImageData;
  alt: string;
  href: string;
}

export default function About({ className }: { className?: string }) {
  interface Image {
    src: string | StaticImageData;
    alt: string;
    href: string;
  }

  const images: Image[] = [
    {
      src: "/tailwind.png",
      alt: "Tailwind logo",
      href: "https://tailwindcss.com/",
    },
    {
      src: "/ts.png",
      alt: "TypeScript logo",
      href: "https://www.typescriptlang.org/",
    },
    {
      src: "/react.png",
      alt: "React logo",
      href: "https://react.dev/",
    },
    {
      src: "/nextjs.png",
      alt: "Next logo",
      href: "https://nextjs.org/",
    },
    {
      src: "/git.png",
      alt: "Git logo",
      href: "https://git-scm.com/",
    },
    {
      src: "/vscode.png",
      alt: "VSCode logo",
      href: "https://code.visualstudio.com/",
    },
  ];

  return (
    <div
      id="about"
      className={`flex flex-col justify-center text-center items-center gap-3 p-3 ${className}`}
    >
      <LoadAnimation animateWhenVisible>
        <h2 className="text-4xl">About me</h2>
      </LoadAnimation>
      <LoadAnimation delay={0.2} animateWhenVisible>
        <div className="flex flex-col gap-1 text-[var(--grey)] text-lg md:text-xl">
          <span>
            I&apos;m a frontend developer who likes to code and create
            interactive websites.
          </span>
          <span>
            Technologies I like are{" "}
            <span className="text-[var(--purple)]">React and Nextjs</span>, but
            I&apos;m always looking for new challenges to improve my skills.
          </span>
          <span>
            I also know and use{" "}
            <span className="text-[var(--purple)]">Git and Github</span> to
            manage my projects.
          </span>
        </div>
      </LoadAnimation>
      <div className="grid grid-cols-2 md:flex justify-center gap-5 mt-10">
        {images.map(({ href, src, alt }, idx) => (
          <ImageBox key={idx} idx={idx} src={src} alt={alt} href={href} />
        ))}
      </div>
      <LoadAnimation delay={0.5} animateWhenVisible>
        <Arrow
          direction="down"
          className="text-[var(--purple)] mt-20"
          reference="#projects"
        >
          Explore my projects
        </Arrow>
      </LoadAnimation>
    </div>
  );
}

function ImageBox({ idx, href, src, alt }: ImageBoxProps) {
  return (
    <LoadAnimation delay={idx * 0.1} animateWhenVisible>
      <Link
        href={href}
        target="_blank"
        className="p-5 border-glass rounded-xl shadow-md backdrop-blur-md glowing-effect cursor-pointer flex items-center justify-center"
      >
        <Image
          src={src}
          alt={alt}
          width={50}
          height={50}
          className="w-10 h-10"
        />
      </Link>
    </LoadAnimation>
  );
}
