"use client";

import * as React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

import Image from "next/image";

import { PhoneMockup } from "@/components/cinematic/phone";
import { EASE, viewportOnce } from "@/components/cinematic/lib/motion";
import { stats } from "@/lib/content";

export function DashboardPreview() {
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const k = reduce ? 0 : 1;
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-12 * k, 0, 12 * k]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [8 * k, 0, -8 * k]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.85]);

  return (
    <section ref={ref} className="px-3 py-2 md:px-4 md:py-3">
      <div className="noise relative flex min-h-[110vh] items-center overflow-hidden rounded-[32px] bg-obsidian py-28 text-cream md:rounded-[40px] md:py-40">
      <div className="bg-orb-emerald pointer-events-none absolute left-1/2 top-1/2 h-[80vmin] w-[80vmin] -translate-x-1/2 -translate-y-1/2 opacity-30" />
      <div className="bg-dotgrid-dark pointer-events-none absolute inset-0 opacity-40" />

      <div className="container-page relative z-10 grid items-center gap-12 lg:grid-cols-[1fr_auto_1fr] lg:gap-8">
        {/* Left stats */}
        <div className="order-2 lg:order-1">
          <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.24em] text-cream/60">
            <span className="h-2 w-2 rounded-full bg-gold" />
            <span className="text-gold">(05)</span>
            <span>Live dashboard</span>
          </div>
          <h2 className="mt-5 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight text-cream">
            Your compliance,{" "}
            <span className="font-display font-extrabold text-accent">visualised.</span>
          </h2>
          <p className="mt-4 max-w-sm text-body-lg leading-relaxed text-cream/70">
            Track every filing, deadline and document in one place — with
            real-time status and proactive reminders.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {stats.slice(0, 2).map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
                className="glass-dark rounded-card p-5"
              >
                <div className="tnum font-display text-3xl font-bold text-cream">
                  {s.value}
                  {s.suffix && <span className="text-accent">{s.suffix}</span>}
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-cream/50">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Center — 3D phone */}
        <div className="perspective-1600 relative z-10 order-1 mx-auto mt-32 lg:order-2 lg:mt-0">
          <motion.div
            style={{ rotateY, rotateX, scale }}
            className="w-[230px] will-change-transform md:w-[300px]"
          >
            <motion.div
              initial={reduce ? {} : { opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 1, ease: EASE }}
            >
              <PhoneMockup className="shadow-phone">
                <Image
                  src="/images/screens/dashboard-main.png"
                  alt="TrustTax live compliance dashboard"
                  fill
                  sizes="300px"
                  className="object-cover"
                />
              </PhoneMockup>
            </motion.div>
          </motion.div>
        </div>

        {/* Right stats */}
        <div className="order-3 hidden lg:block">
          <div className="flex flex-col gap-4">
            {stats.slice(2).map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
                className="glass-dark rounded-card p-5"
              >
                <div className="tnum font-display text-3xl font-bold text-cream">
                  {s.value}
                  {s.suffix && <span className="text-accent">{s.suffix}</span>}
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-cream/50">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
