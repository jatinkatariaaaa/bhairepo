"use client";

import { motion } from "framer-motion";

import { processSteps } from "@/lib/content";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Process — a four-column rule-divided grid. Oversized outlined numerals,
 * bold uppercase titles, quiet body copy.
 */
export function ProcessLedger() {
  return (
    <section className="border-b border-hairline bg-canvas">
      <div className="container-wide py-16 md:py-24">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-[clamp(2rem,5.5vw,4.25rem)] font-bold uppercase leading-none tracking-[-0.02em] text-ink">
            The process
          </h2>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-muted sm:inline">
            100% online
          </span>
        </div>

        <div className="mt-10 grid border-t border-ink/80 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
              className="border-b border-hairline py-8 pr-6 lg:border-b-0 lg:border-r lg:last:border-r-0"
            >
              <span className="text-outline tnum font-display text-6xl font-bold leading-none md:text-7xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 font-display text-base font-bold uppercase tracking-[0.04em] text-ink">
                {step.title}
              </h3>
              <p className="mt-3 max-w-[30ch] text-sm leading-relaxed text-body">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
