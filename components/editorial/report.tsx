"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const STATS = [
  { value: "12,000+", label: "Returns filed on time" },
  { value: "₹4.2 Cr", label: "Client tax saved last year" },
  { value: "40+", label: "Cities served across India" },
  { value: "−0", label: "Missed deadlines to date" },
] as const;

/** Column heights (%) for the blurred editorial bars. */
const TOP_BARS = [92, 74, 60, 52, 40, 34, 78] as const;
const BOTTOM_BARS = [78, 64, 52, 46, 40, 32, 58] as const;
const LABELS = ["GST", "ITR", "TDS", "MSME", "FSSAI", "Audits", "Refunds"] as const;

/**
 * "Report 01" — editorial split. Left: bold statement + stat ledger.
 * Right: soft-focus bar chart motif (pure CSS, blurred), like a printed
 * annual-report spread. Directly modeled on the design brief.
 */
export function Report() {
  return (
    <section className="border-b border-hairline bg-canvas">
      <div className="container-wide grid gap-14 py-16 md:py-24 lg:grid-cols-2 lg:gap-10">
        {/* Left — statement + stats */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.9, ease: EASE }}
            className="max-w-xl font-display text-2xl font-semibold leading-[1.25] tracking-tight text-ink md:text-3xl"
          >
            In a maze of GST rules and ITR deadlines,{" "}
            <span className="font-bold">TrusTax</span> uses CA-certified
            workflows to return money that businesses shouldn&apos;t be leaving
            with the department.
          </motion.p>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-body">
            We automate document collection, computation and filing for Indian
            individuals and SMBs — teams recover real money without hiring a
            full-time accountant.
          </p>

          <dl className="mt-12 space-y-8">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
              >
                <dt className="sr-only">{s.label}</dt>
                <dd className="tnum font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
                  {s.value}
                </dd>
                <dd className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                  {s.label}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>

        {/* Right — blurred report bars */}
        <div aria-hidden="true" className="relative hidden lg:block">
          <span className="absolute right-0 top-0 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
            TrusTax — Report 01
          </span>

          {/* Top row: what goes unclaimed (graphite) */}
          <p className="pt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            What businesses overpay
          </p>
          <div className="mt-4 flex h-56 items-end justify-between gap-6 border-b border-hairline pb-0">
            {TOP_BARS.map((h, i) => (
              <div
                key={i}
                className="bar-blur w-full bg-gradient-to-b from-ink/70 to-ink/10"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>

          {/* Bottom row: what TrusTax recovers (brick) */}
          <div className="mt-10 flex justify-between gap-6">
            {LABELS.map((l) => (
              <span
                key={l}
                className="w-full text-center font-mono text-[10px] uppercase tracking-[0.12em] text-body"
              >
                {l}
              </span>
            ))}
          </div>
          <div className="mt-3 flex h-48 items-start justify-between gap-6">
            {BOTTOM_BARS.map((h, i) => (
              <div
                key={i}
                className="bar-blur w-full bg-gradient-to-b from-accent/80 to-accent/5"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>

          <p className="mt-6 text-right font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
            Figures represent typical reclaim potential; magnitude illustrative.
          </p>
        </div>
      </div>
    </section>
  );
}
