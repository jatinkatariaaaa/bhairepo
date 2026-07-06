"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const STEPS = [
  {
    step: "STEP 01",
    kicker: "Connect",
    title: "Share your documents digitally.",
    bg: "bg-ochre",
    fg: "text-ochre-ink",
    fgMuted: "text-ochre-ink/70",
  },
  {
    step: "STEP 02",
    kicker: "Prepare",
    title: "CA-reviewed computation and checks.",
    bg: "bg-slate",
    fg: "text-slate-ink",
    fgMuted: "text-slate-ink/70",
  },
  {
    step: "STEP 03",
    kicker: "File",
    title: "On-time, audit-proof submissions.",
    bg: "bg-brick",
    fg: "text-brick-ink",
    fgMuted: "text-brick-ink/70",
  },
] as const;

/** Full-bleed tricolor step strip — the brief's color-block band. */
export function StepsStrip() {
  return (
    <section aria-label="How it works — three steps" className="grid md:grid-cols-3">
      {STEPS.map((s, i) => (
        <motion.div
          key={s.step}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: EASE, delay: i * 0.1 }}
          className={`relative flex min-h-[180px] flex-col justify-between p-6 md:min-h-[220px] md:p-8 ${s.bg}`}
        >
          <span
            className={`font-mono text-[10px] uppercase tracking-[0.2em] ${s.fgMuted}`}
          >
            {s.kicker}
          </span>
          <p
            className={`max-w-[16ch] font-display text-xl font-bold leading-snug tracking-tight md:text-2xl ${s.fg}`}
          >
            {s.title}
          </p>
          <span
            className={`absolute right-5 top-6 font-mono text-[10px] uppercase tracking-[0.2em] [writing-mode:vertical-rl] ${s.fgMuted}`}
          >
            {s.step}
          </span>
        </motion.div>
      ))}
    </section>
  );
}
