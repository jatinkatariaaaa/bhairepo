"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, BadgeCheck } from "lucide-react";

import { SectionLabel } from "@/components/cinematic/section-label";
import { RevealText } from "@/components/cinematic/reveal-text";
import { EASE, viewportOnce } from "@/components/cinematic/lib/motion";

const ROWS = [
  { k: "PAN", v: "ABCDE1234F" },
  { k: "Assessment year", v: "2025–26" },
  { k: "Return form", v: "ITR-2" },
  { k: "Filed on", v: "11 Jul 2025" },
  { k: "Gross total income", v: "₹18,40,000" },
];

const DEDUCTIONS = ["80C · ₹1,50,000", "80D · ₹25,000", "HRA · ₹96,000", "80TTA · ₹10,000"];

const rowVariant = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

/**
 * ITR — an acknowledgement document that assembles row by row on scroll, then
 * an "e-Verified" seal stamps on. Signature motion: constructive reveal + seal.
 */
export function ITR() {
  return (
    <section className="section-y relative overflow-hidden bg-canvas">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-20">
        {/* copy + deduction chips */}
        <div>
          <SectionLabel index="08">Refunds &amp; deductions</SectionLabel>
          <h2 className="mt-5 font-display text-display-lg font-semibold tracking-tight text-ink">
            <RevealText
              segments={[
                { text: "Every deduction," },
                {
                  text: " claimed.",
                  className: "font-serif italic font-normal text-primary",
                },
              ]}
            />
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
            {DEDUCTIONS.map((d) => (
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
                className="rounded-pill border border-hairline bg-white px-4 py-2 font-mono text-xs text-ink shadow-card"
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

        {/* assembling acknowledgement — overflow-visible so the seal can break out */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
          className="relative mx-auto w-full max-w-sm overflow-visible rounded-card border border-hairline bg-white p-7 shadow-lift"
        >
          <div className="bg-orb-gold pointer-events-none absolute -right-10 -top-10 h-40 w-40" />
          <motion.div variants={rowVariant} className="flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest text-muted">
                Income Tax Department
              </div>
              <div className="mt-1 font-display text-lg font-semibold text-ink">
                ITR-V Acknowledgement
              </div>
            </div>
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-white">
              <BadgeCheck className="h-5 w-5" />
            </span>
          </motion.div>

          <motion.div variants={rowVariant} className="my-5 h-px w-full bg-hairline" />

          <dl className="space-y-3">
            {ROWS.map((r) => (
              <motion.div
                key={r.k}
                variants={rowVariant}
                className="flex items-center justify-between text-sm"
              >
                <dt className="text-muted">{r.k}</dt>
                <dd className="font-mono font-medium text-ink">{r.v}</dd>
              </motion.div>
            ))}
          </dl>

          <motion.div
            variants={rowVariant}
            className="mt-5 rounded-2xl bg-primary p-4 text-white"
          >
            <div className="text-[10px] uppercase tracking-widest text-white/70">
              Refund due
            </div>
            <div className="mt-1 font-mono text-3xl font-bold">₹22,140</div>
          </motion.div>

          {/* seal stamps on last */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 1.6, rotate: -24 },
              show: {
                opacity: 1,
                scale: 1,
                rotate: -12,
                transition: { type: "spring", stiffness: 220, damping: 14, delay: 0.2 },
              },
            }}
            className="absolute -bottom-4 -right-3 grid h-24 w-24 place-items-center rounded-full border-2 border-primary/60 bg-canvas/80 text-center"
          >
            <div className="font-mono text-[10px] font-bold uppercase leading-tight tracking-widest text-primary">
              e-Verified
              <br />✓ ITR
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
