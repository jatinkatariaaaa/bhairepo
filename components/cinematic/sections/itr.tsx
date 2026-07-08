"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

import { EASE, viewportOnce } from "@/components/cinematic/lib/motion";

const DEDUCTIONS = [
  "80C — PPF, ELSS, life insurance",
  "80D — health insurance",
  "80E — education loan interest",
  "80G — charitable donations",
  "HRA — house rent allowance",
  "Home loan interest — Sec 24",
  "Standard deduction — ₹50,000",
  "Capital gains exemptions",
];

export function ITR() {
  return (
    <section className="section-y relative overflow-hidden bg-canvas">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-20">
        {/* Copy + deduction chips */}
        <div>
          <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
            <span className="h-2 w-2 rounded-full bg-gold" />
            <span className="text-gold">(08)</span>
            <span>Refunds &amp; deductions</span>
          </div>
          <h2 className="mt-5 font-display text-[clamp(2.2rem,5.5vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-ink">
            Every deduction,{" "}
            <span className="font-display font-extrabold text-primary">claimed.</span>
          </h2>
          <p className="mt-6 max-w-md text-body-lg leading-relaxed text-body">
            We read the fine print of the Act so you don&apos;t have to — turning
            eligible expenses into a bigger, faster refund.
          </p>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={{ show: { transition: { staggerChildren: 0.09 } } }}
            className="mt-8 flex flex-wrap gap-2.5"
          >
            {DEDUCTIONS.map((d, i) => (
              <motion.span
                key={d}
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: 8 },
                  show: {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  },
                }}
                className={
                  i % 3 === 0
                    ? "rounded-pill bg-primary px-4 py-2 font-mono text-xs text-white shadow-card"
                    : i % 3 === 1
                      ? "rounded-pill bg-mint px-4 py-2 font-mono text-xs text-primary shadow-card"
                      : "rounded-pill border border-hairline bg-white px-4 py-2 font-mono text-xs text-ink shadow-card"
                }
              >
                {d}
              </motion.span>
            ))}
          </motion.div>

          <Link
            href="/services/income-tax"
            className="link-underline mt-9 inline-flex items-center gap-2 font-medium text-ink"
          >
            File your ITR
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Acknowledgement card anchored on a deep emerald panel */}
        <div className="noise relative overflow-hidden rounded-[32px] bg-primary px-6 py-12 md:px-10 md:py-16">
          {/* Decorative concentric rings */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-[340px] w-[340px] rounded-full border border-white/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-10 h-[200px] w-[200px] rounded-full border border-white/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 -left-28 h-[300px] w-[300px] rounded-full border border-white/10"
          />
          {/* Gold refund tag floating on the panel */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, ease: EASE, delay: 0.4 }}
            className="animate-float-slow absolute left-4 top-5 z-20 flex items-center gap-2 rounded-pill bg-gold px-4 py-2.5 shadow-lift md:left-8 md:top-8"
          >
            <span className="tnum text-sm font-bold text-obsidian">₹48,200</span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-obsidian/70">
              Refund initiated
            </span>
          </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
          className="relative z-10 mx-auto w-full max-w-sm overflow-visible rounded-card bg-white p-7 shadow-lift"
        >
          {/* Header */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
            }}
            className="flex items-center justify-between border-b border-hairline pb-4"
          >
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
                Income Tax Department
              </div>
              <div className="mt-1 text-sm font-semibold text-ink">
                ITR Acknowledgement
              </div>
            </div>
            <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/10">
              <Check className="h-5 w-5 text-primary" strokeWidth={3} />
            </div>
          </motion.div>

          {/* Fields */}
          <div className="mt-5 space-y-4">
            {[
              { l: "Name", v: "Ananya Sharma" },
              { l: "PAN", v: "ABCPS1234K" },
              { l: "Assessment Year", v: "2025-26" },
              { l: "ITR Type", v: "ITR-1 (Sahaj)" },
              { l: "Filing Date", v: "12 Jul 2025" },
            ].map((f, i) => (
              <motion.div
                key={f.l}
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: EASE } },
                }}
                className="flex items-center justify-between border-b border-dashed border-hairline pb-3"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-muted">
                  {f.l}
                </span>
                <span className="tnum text-sm font-medium text-ink">{f.v}</span>
              </motion.div>
            ))}
          </div>

          {/* Status */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 280, damping: 18 } },
            }}
            className="mt-5 flex items-center gap-3 rounded-2xl bg-mint p-4"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-white">
              <Check className="h-4 w-4" strokeWidth={3} />
            </span>
            <div>
              <div className="text-sm font-semibold text-ink">e-Verified</div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-primary">
                Refund processing initiated
              </div>
            </div>
          </motion.div>

          {/* Seal */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0, rotate: -45 },
              show: {
                opacity: 1,
                scale: 1,
                rotate: -12,
                transition: { type: "spring", stiffness: 200, damping: 12, delay: 0.6 },
              },
            }}
            className="absolute -bottom-4 -right-3 grid h-24 w-24 place-items-center rounded-full border-2 border-gold/70 bg-canvas/90 text-center backdrop-blur-sm"
          >
            <div className="font-mono text-[8px] uppercase leading-tight tracking-widest text-primary">
              <div className="font-bold">e-Verified</div>
              <div>Income Tax</div>
              <div>India</div>
            </div>
          </motion.div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
