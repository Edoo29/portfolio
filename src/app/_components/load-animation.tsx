"use client";

import { motion } from "motion/react";

export default function LoadAnimation({
  children,
  delay,
  animateWhenVisible,
}: {
  children: React.ReactNode;
  delay?: number;
  animateWhenVisible?: boolean;
}) {
  return (
    <>
      {animateWhenVisible ? (
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
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.2, delay: delay },
          }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
}
