"use client";

import { motion } from "motion/react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: boolean;
}

export default function Button({ children, className, variant }: ButtonProps) {
  return (
    <motion.button
      className={`px-5 py-3 rounded-xl shadow-md cursor-pointer glowing-effect transition-all ${
        variant ? "bg-[var(--blue)]" : "bg-[var(--purple)]"
      } ${className}`}
    >
      {children}
    </motion.button>
  );
}
