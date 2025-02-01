interface LoadTransition {
  initial: { opacity: number; y: number };
  animate: { opacity: number; y: number };
  transition: { duration: number; delay?: number };
}

export type { LoadTransition };
