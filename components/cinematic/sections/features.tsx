"use client";

import * as React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

import { Icon } from "@/components/shared/icon";
import { EASE, viewportOnce } from "@/components/cinematic/lib/motion";
import { values } from "@/lib/content";

export function Features() {
  return (
    <section className="section-y relative overflow-hidden bg-canvas">
      <div className="container-page">
        {/* Editorial header — massive type like EventBeds */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
            <span className="h-2 w-2 rounded-full bg-gold" />
            <span className="text-gold">(02)</span>
            <span>The TrustTax difference</span>
          </div>
          <h2 className="mt-5 font-display text-[clamp(2.2rem,5.5vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-ink">
            Built for{" "}
            <span className="font-serif italic font-normal text-primary">calm</span>{" "}
            compliance.
          </h2>
          <p className="mt-5 max-w-lg text-body-lg leading-relaxed text-body">
            No jargon, no surprises. Just a steady, senior team that treats your
            filings as if they were their own.
          </p>
        </div>

        {/* Card grid — large, spacious, with cursor spotlight */}
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {values.map((v, i) => (
            <SpotlightCard key={v.title} index={i}>
              <div className="flex items-start justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-mint text-primary transition-transform duration-500 ease-premium group-hover:-rotate-6 group-hover:scale-105">
                  <Icon name={v.icon} className="h-6 w-6" />
                </span>
                <span className="font-mono text-sm text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-6 text-h3 font-semibold text-ink">{v.title}</h3>
              <p className="mt-3 text-body leading-relaxed">{v.description}</p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function SpotlightCard({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) {
  const mx = useMotionValue(-200);
  const my = useMotionValue(-200);
  const spotlight = useMotionTemplate`radial-gradient(320px circle at ${mx}px ${my}px, rgba(16,185,129,0.10), transparent 70%)`;

  function move(e: React.MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  }

  return (
    <motion.div
      onMouseMove={move}
      initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
      whileInView={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
      viewport={viewportOnce}
      transition={{ duration: 0.8, ease: EASE, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-card border border-hairline bg-white p-8 shadow-card transition-shadow duration-500 hover:shadow-lift"
    >
      <motion.div
        aria-hidden
        style={{ background: spotlight }}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <span className="pointer-events-none absolute inset-0 rounded-card ring-1 ring-inset ring-primary/0 transition-all duration-500 group-hover:ring-primary/25" />
      <div className="relative">{children}</div>
    </motion.div>
  );
}
