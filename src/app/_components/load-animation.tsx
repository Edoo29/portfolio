"use client";

import { motion } from "motion/react";

interface LoadAnimationProps {
  children: React.ReactNode;
  delay?: number;
  animateWhenVisible?: boolean;
}

export default function LoadAnimation({
  children,
  delay,
  animateWhenVisible,
}: LoadAnimationProps) {
  return (
    <>
      {animateWhenVisible ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, delay: delay },
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
            transition: { duration: 0.4, delay: delay },
          }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
}
