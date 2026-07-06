"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import { EASE } from "@/components/cinematic/lib/motion";

const STATEMENT =
  "We believe tax compliance should be invisible — not a recurring source of stress, penalties and midnight panic. So we built a firm that handles it end to end, with the rigour of a big audit team and the personal attention of a single, trusted CA.";

export function WhyTrustTax() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.4"],
  });

  const words = STATEMENT.split(" ");

  return (
    <section
      ref={ref}
      className="noise relative flex min-h-[100vh] items-center overflow-hidden bg-obsidian py-28 text-cream md:py-40"
    >
      <div className="bg-orb-emerald pointer-events-none absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 opacity-30" />
      <div className="bg-dotgrid-dark pointer-events-none absolute inset-0 opacity-40" />

      {/* Obsidian vault — institutional trust, emerging from the dark */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 1.4, ease: EASE }}
        className="pointer-events-none absolute -right-[8%] bottom-0 hidden h-[85%] w-[48%] lg:block"
      >
        <Image
          src="/images/porcelain/vault-dark.png"
          alt=""
          fill
          sizes="48vw"
          className="mask-fade-corner-br object-contain object-right-bottom opacity-80"
        />
      </motion.div>

      <div className="container-page relative z-10">
        <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.24em] text-cream/60">
          <span className="h-2 w-2 rounded-full bg-gold" />
          <span className="text-gold">(03)</span>
          <span>Why TrustTax</span>
        </div>

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
          className="mt-16 flex flex-wrap gap-8 border-t border-cream/10 pt-10"
        >
          {[
            { v: "12,000+", l: "Returns filed" },
            { v: "500+", l: "Clients served" },
            { v: "40+", l: "Cities covered" },
            { v: "10+", l: "Years of experience" },
          ].map((s) => (
            <div key={s.l}>
              <div className="tnum font-display text-4xl font-semibold text-cream">
                {s.v}
              </div>
              <div className="mt-1 font-mono text-xs uppercase tracking-widest text-cream/50">
                {s.l}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.25em] inline-block">
      {children}
    </motion.span>
  );
}
