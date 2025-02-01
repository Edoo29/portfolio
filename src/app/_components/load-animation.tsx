"use client";

import { motion } from "motion/react";

export default function LoadAnimation({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.2, delay: delay },
      }}
    >
      {children}
    </motion.div>
  );
}
