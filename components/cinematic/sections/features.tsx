"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Icon } from "@/components/shared/icon";
import { EASE, viewportOnce } from "@/components/cinematic/lib/motion";
import { values } from "@/lib/content";

export function Features() {
  return (
    <section className="section-y relative overflow-hidden bg-canvas">
      {/* Porcelain shield — quiet trust cue beside the editorial header */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: 8 }}
        whileInView={{ opacity: 1, y: 0, rotate: 6 }}
        viewport={viewportOnce}
        transition={{ duration: 1.1, ease: EASE, delay: 0.25 }}
        className="pointer-events-none absolute right-[4%] top-16 hidden h-[280px] w-[280px] lg:block xl:right-[8%] xl:h-[320px] xl:w-[320px]"
      >
        <div className="animate-float-slow h-full w-full">
          <Image
            src="/images/porcelain/security-shield.png"
            alt=""
            fill
            sizes="320px"
            className="mask-fade-radial object-contain blend-porcelain"
          />
        </div>
      </motion.div>

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
            <span className="font-display font-extrabold text-primary">calm</span>{" "}
            compliance.
          </h2>
          <p className="mt-5 max-w-lg text-body-lg leading-relaxed text-body">
            No jargon, no surprises. Just a steady, senior team that treats your
            filings as if they were their own.
          </p>
        </div>

        {/* EventBeds-style bento — large color-block panels, massive type inside */}
        <div className="mt-14 grid gap-3 md:grid-cols-2 md:gap-4">
          {values.map((v, i) => {
            const s = PANEL_STYLES[i % PANEL_STYLES.length];
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.8, ease: EASE, delay: i * 0.08 }}
                className={`group relative flex min-h-[340px] flex-col justify-between overflow-hidden rounded-[28px] p-8 md:min-h-[400px] md:rounded-[32px] md:p-10 ${s.bg}`}
              >
                {/* Oversized ghost icon — fills the corner like EventBeds' payment logos */}
                <Icon
                  name={v.icon}
                  aria-hidden
                  className={`pointer-events-none absolute -right-8 -top-8 h-48 w-48 transition-transform duration-700 ease-premium group-hover:rotate-6 group-hover:scale-110 md:h-60 md:w-60 ${s.ghost}`}
                  strokeWidth={1}
                />

                <div className="relative flex items-center justify-between">
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-2xl ${s.chip}`}
                  >
                    <Icon name={v.icon} className="h-6 w-6" />
                  </span>
                  <span className={`font-mono text-sm ${s.meta}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="relative">
                  <h3
                    className={`font-display text-[clamp(1.7rem,3vw,2.4rem)] font-extrabold leading-[1.05] tracking-[-0.02em] text-balance ${s.title}`}
                  >
                    {v.title}
                  </h3>
                  <p className={`mt-4 max-w-md leading-relaxed ${s.desc}`}>
                    {v.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* Color-block rotation — emerald, obsidian, mint, cream (EventBeds purple/black/lime rhythm) */
const PANEL_STYLES = [
  {
    bg: "bg-primary",
    ghost: "text-white/10",
    chip: "bg-white/15 text-white",
    meta: "text-white/50",
    title: "text-white",
    desc: "text-white/75",
  },
  {
    bg: "bg-obsidian",
    ghost: "text-white/[0.07]",
    chip: "bg-white/10 text-gold",
    meta: "text-cream/40",
    title: "text-cream",
    desc: "text-cream/65",
  },
  {
    bg: "bg-mint",
    ghost: "text-primary/10",
    chip: "bg-primary text-white",
    meta: "text-primary/50",
    title: "text-ink",
    desc: "text-body",
  },
  {
    bg: "bg-white shadow-card",
    ghost: "text-hairline",
    chip: "bg-mint text-primary",
    meta: "text-muted",
    title: "text-ink",
    desc: "text-body",
  },
];
