import Arrow from "./arrow";
import LoadAnimation from "./load-animation";

export default function Projects({ className }: { className?: string }) {
  return (
    <div
      id="projects"
      className={`flex flex-col justify-center text-center items-center gap-3 p-3 ${className}`}
    >
      <LoadAnimation animateWhenVisible>
        <h2 className="text-4xl">Projects</h2>
      </LoadAnimation>
      <LoadAnimation animateWhenVisible delay={0.2}>
        <p className="text-[var(--grey)] text-lg md:text-xl">
          No projects yet.
        </p>
      </LoadAnimation>
      <LoadAnimation animateWhenVisible delay={0.4}>
        <Arrow
          direction="down"
          reference="#contact"
          className="text-[var(--purple)] mt-20"
        >
          Get in touch
        </Arrow>
      </LoadAnimation>
    </div>
  );
}
