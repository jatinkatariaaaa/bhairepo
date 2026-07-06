"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Swiss Ledger hero — editorial masthead style. Small mono eyebrows on a rule,
 * a massive uppercase grotesk statement, then a giant outlined ₹ figure that
 * bleeds behind the sub-copy. Directly modeled on the design brief.
 */
export function Hero() {
  const reduce = useReducedMotion();

  const up = (delay: number) => ({
    initial: reduce ? {} : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease: EASE, delay },
  });

  return (
    <section className="relative overflow-hidden bg-canvas">
      <div className="container-wide pb-14 pt-10 md:pb-20 md:pt-14">
        {/* Eyebrow row */}
        <motion.div
          {...up(0)}
          className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-body"
        >
          <span>Based on 12,000+ returns filed</span>
          <span className="hidden sm:inline">Avg. tax saved per client</span>
        </motion.div>

        {/* Massive statement */}
        <motion.h1
          {...up(0.08)}
          className="mt-8 font-display text-[clamp(3rem,10.5vw,9rem)] font-bold uppercase leading-[0.94] tracking-[-0.03em] text-ink"
        >
          The full weight
          <br />
          of your taxes,
          <br />
          lifted.
        </motion.h1>

        {/* Giant outlined figure */}
        <motion.p
          {...up(0.18)}
          aria-label="Average tax saved: 52,840 rupees"
          className="tnum -mt-2 select-none whitespace-nowrap font-display text-[clamp(4rem,15vw,13rem)] font-bold leading-[0.95] tracking-[-0.04em] md:-mt-6"
        >
          <span className="text-outline">₹52,840</span>
          <span className="align-baseline text-[0.32em] font-extrabold text-ink">.00</span>
        </motion.p>

        {/* Sub copy + CTA */}
        <motion.div {...up(0.28)} className="mt-4 max-w-md md:-mt-4">
          <p className="text-sm leading-relaxed text-body md:text-base">
            TrusTax handles GST, income tax and business compliance through
            CA-certified filing — every deduction mapped, every deadline met.
          </p>
          <Link
            href="/contact#book"
            className="group mt-6 inline-flex items-center gap-1.5 border-b-2 border-ink pb-0.5 font-display text-sm font-extrabold uppercase tracking-[0.06em] text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Start filing
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              strokeWidth={2.25}
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
