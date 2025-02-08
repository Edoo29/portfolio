import { MoveDown, MoveUp } from "lucide-react";

interface ArrowProps {
  children: React.ReactNode;
  className?: string;
  reference?: string;
  direction: "up" | "down";
}

export default function Arrow({
  children,
  className,
  reference,
  direction,
}: ArrowProps) {
  return (
    <a
      href={reference}
      className={`hidden md:flex gap-1 cursor-pointer hover:underline ${className}`}
    >
      {direction === "up" ? <MoveUp /> : <MoveDown />}

      {children}
    </a>
  );
}
