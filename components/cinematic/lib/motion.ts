import type { Variants } from "framer-motion";

/**
 * Shared motion vocabulary for the Fiscal Cinema home experience.
 * One easing family + a small set of variants keeps every section coherent
 * even though each has a unique choreography on top.
 */

// easeOutExpo — the premium "arrive and settle" curve used everywhere
export const EASE = [0.16, 1, 0.3, 1] as const;
export const EASE_OUT = [0.22, 1, 0.36, 1] as const;
export const EASE_IN_OUT = [0.83, 0, 0.17, 1] as const;

export const SPRING = {
  type: "spring",
  stiffness: 120,
  damping: 20,
  mass: 0.6,
} as const;

// Trigger reveals a touch before the element is fully on-screen
export const viewportOnce = { once: true, margin: "0px 0px -12% 0px" } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: EASE } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: EASE } },
};

/** Parent orchestrator — staggers its children's reveal. */
export const staggerParent = (stagger = 0.08, delay = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: delay } },
});
