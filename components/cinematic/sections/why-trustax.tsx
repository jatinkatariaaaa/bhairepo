"use client";

import * as React from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

import { Icon } from "@/components/shared/icon";
import { SectionLabel } from "@/components/cinematic/section-label";
import { EASE, viewportOnce } from "@/components/cinematic/lib/motion";
import { trustBadges } from "@/lib/content";

const STATEMENT =
  "We turn tax season into a non-event. No missed deadlines, no penalty notices, no last-minute scramble — only clean books and filings that are always, reliably, on time.";

/**
 * WHY TRUSTTAX — the "lights-down" keynote moment. Signature motion: the
 * statement illuminates word-by-word as you scroll (muted → cream), driven by a
 * single scroll clock, then trust badges settle in beneath it.
 */
export function WhyTrustTax() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.45"],
  });

  const words = STATEMENT.split(" ");

  return (
    <section
      ref={ref}
      className="noise relative overflow-hidden bg-obsidian py-28 text-cream md:py-40"
    >
      {/* single emerald spotlight — no rainbow gradients */}
      <div className="bg-orb-emerald pointer-events-none absolute -right-40 top-0 h-[70vmin] w-[70vmin] opacity-40" />
      <div className="bg-dotgrid-dark pointer-events-none absolute inset-0 opacity-40" />

      <div className="container-page relative">
        <SectionLabel index="03" tone="dark">
          Why TrustTax
        </SectionLabel>

        <p className="mt-10 max-w-5xl font-display text-[clamp(1.6rem,4.2vw,3.6rem)] font-medium leading-[1.15] tracking-tight">
          {words.map((word, i) => (
            <Word
              key={i}
              progress={scrollYProgress}
              range={[i / words.length, (i + 1.5) / words.length]}
            >
              {word}
            </Word>
          ))}
        </p>

        {/* trust badges */}
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="mt-14 flex flex-wrap gap-3"
        >
          {trustBadges.map((b) => (
            <motion.li
              key={b.label}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: EASE },
                },
              }}
              className="glass-dark flex items-center gap-2 rounded-pill px-4 py-2.5 text-sm text-cream/90"
            >
              <Icon name={b.icon} className="h-4 w-4 text-accent" />
              {b.label}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return (
    <>
      <motion.span style={{ opacity }} className="inline-block">
        {children}
      </motion.span>{" "}
    </>
  );
}
