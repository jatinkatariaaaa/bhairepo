"use client";

import * as React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import { cn } from "@/lib/utils";
import { EASE, viewportOnce } from "./lib/motion";

/**
 * Word-by-word MASK reveal for editorial headlines.
 *
 * Each word sits in an `overflow-hidden` box and slides up from 115% → 0 with
 * a stagger, so a headline "types itself into place" line by line. Pass
 * `segments` to style individual runs (e.g. an Instrument-Serif italic accent).
 * Falls back to plain static text under prefers-reduced-motion.
 */
export type RevealSegment = { text: string; className?: string };

const container = (stagger: number, delay: number): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

const wordVariant: Variants = {
  hidden: { y: "115%" },
  show: { y: 0, transition: { duration: 0.85, ease: EASE } },
};

type RevealTextProps = {
  text?: string;
  segments?: RevealSegment[];
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  stagger?: number;
  delay?: number;
  once?: boolean;
};

export function RevealText({
  text,
  segments,
  as: Tag = "span",
  className,
  stagger = 0.05,
  delay = 0.05,
  once = true,
}: RevealTextProps) {
  const reduce = useReducedMotion();
  const runs: RevealSegment[] = segments ?? [{ text: text ?? "" }];

  // Flatten runs → individual words, remembering each word's run styling.
  const words: RevealSegment[] = runs.flatMap((run) =>
    run.text
      .split(" ")
      .filter(Boolean)
      .map((w) => ({ text: w, className: run.className })),
  );

  if (reduce) {
    return (
      <Tag className={className}>
        {runs.map((r, i) => (
          <span key={i} className={r.className}>
            {r.text}
            {i < runs.length - 1 ? " " : ""}
          </span>
        ))}
      </Tag>
    );
  }

  return (
    <Tag className={className}>
      <motion.span
        style={{ display: "inline" }}
        variants={container(stagger, delay)}
        initial="hidden"
        whileInView="show"
        viewport={{ ...viewportOnce, once }}
      >
        {words.map((w, i) => (
          <React.Fragment key={i}>
            <span className="inline-block overflow-hidden pb-[0.14em] -mb-[0.14em] align-bottom">
              <motion.span
                variants={wordVariant}
                className={cn("inline-block will-change-transform", w.className)}
              >
                {w.text}
              </motion.span>
            </span>
            {i < words.length - 1 ? " " : ""}
          </React.Fragment>
        ))}
      </motion.span>
    </Tag>
  );
}
