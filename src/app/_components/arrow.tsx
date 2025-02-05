import { MoveDown } from "lucide-react";

interface ArrowProps {
  children: React.ReactNode;
  className?: string;
}

export default function Arrow({ children, className }: ArrowProps) {
  return (
    <a
      href="#about"
      className={`hidden md:flex gap-1 cursor-pointer hover:underline ${className}`}
    >
      <MoveDown />
      {children}
    </a>
  );
}
