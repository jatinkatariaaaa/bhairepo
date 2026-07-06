"use client";

import * as React from "react";
import { animate, motion, useReducedMotion } from "framer-motion";

const WORDS = ["GST", "ITR", "TDS", "MSME", "FSSAI", "COMPLIANCE"];

/**
 * Cinematic preloader. A mono counter races 000 → 100 while service words
 * cycle and a hairline fills; on completion the whole ink panel wipes upward
 * (clip-path curtain), revealing the hero already in motion beneath it.
 */
export function Preloader() {
  const reduce = useReducedMotion();
  const [progress, setProgress] = React.useState(0);
  const [done, setDone] = React.useState(false);
  const [removed, setRemoved] = React.useState(false);

  // Lock scroll while the curtain is up, release the moment it starts lifting.
  React.useEffect(() => {
    if (reduce) return;
    const html = document.documentElement;
    html.style.overflow = "hidden";
    return () => {
      html.style.overflow = "";
    };
  }, [reduce]);

  React.useEffect(() => {
    if (done) document.documentElement.style.overflow = "";
  }, [done]);

  React.useEffect(() => {
    if (reduce) {
      setRemoved(true);
      return;
    }
    const controls = animate(0, 100, {
      duration: 1.9,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setProgress(v),
      onComplete: () => window.setTimeout(() => setDone(true), 220),
    });
    return () => controls.stop();
  }, [reduce]);

  const wordIndex = Math.min(
    WORDS.length - 1,
    Math.floor((progress / 100) * WORDS.length),
  );

  if (removed) return null;

  return (
    <motion.div
      aria-hidden
      className="noise fixed inset-0 z-[9999] flex flex-col justify-between overflow-hidden bg-obsidian px-6 py-8 text-cream md:px-12 md:py-10"
      initial={{ clipPath: "inset(0 0 0% 0)" }}
      animate={done ? { clipPath: "inset(0 0 100% 0)" } : {}}
      transition={{ duration: 0.95, ease: [0.83, 0, 0.17, 1] }}
      onAnimationComplete={() => {
        if (done) setRemoved(true);
      }}
    >
      {/* top row — brand */}
      <motion.div
        className="flex items-center justify-between"
        animate={done ? { opacity: 0, y: -12 } : { opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeIn" }}
      >
        <span className="font-display text-lg font-semibold tracking-tight">
          Trus<span className="text-accent">Tax</span>
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-cream/50">
          Fiscal Cinema
        </span>
      </motion.div>

      {/* center — cycling service word */}
      <div className="flex flex-1 items-center">
        <div className="overflow-hidden">
          <motion.div
            key={wordIndex}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[13vw] font-semibold leading-none tracking-tight text-cream/90 md:text-[7vw]"
          >
            {WORDS[wordIndex]}
          </motion.div>
        </div>
      </div>

      {/* bottom — counter + fill line */}
      <motion.div
        animate={done ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative h-px w-full overflow-hidden bg-cream/15">
          <div
            className="absolute inset-y-0 left-0 bg-accent"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-4 flex items-end justify-between">
          <span className="max-w-[16rem] text-[11px] leading-relaxed text-cream/50">
            Preparing your compliance dashboard
          </span>
          <span className="font-mono text-4xl font-semibold tabular-nums md:text-6xl">
            {String(Math.round(progress)).padStart(3, "0")}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}
