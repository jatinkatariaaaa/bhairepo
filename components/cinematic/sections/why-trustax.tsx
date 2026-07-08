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
    <section ref={ref} className="px-3 py-2 md:px-4 md:py-3">
      <div className="noise relative flex min-h-[100vh] items-center overflow-hidden rounded-[32px] bg-obsidian py-28 text-cream md:rounded-[40px] md:py-40">
        {/* Obsidian vault — rising from the bottom of the panel, EventBeds-style */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.6, ease: EASE }}
          className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-[55%] w-[min(900px,95vw)]"
        >
          <Image
            src="/images/porcelain/vault-dark.png"
            alt=""
            fill
            sizes="900px"
            className="mask-fade-dark blend-obsidian object-contain object-bottom"
          />
        </motion.div>

        <div className="container-page relative z-10 pb-[30vh] text-center md:pb-[34vh]">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.9, ease: EASE }}
            className="font-display text-[clamp(2.6rem,7vw,5.5rem)] font-extrabold tracking-[-0.03em] text-cream"
          >
            Why TrusTax
          </motion.h2>

          <p className="mx-auto mt-10 max-w-4xl font-display text-[clamp(1.15rem,2.4vw,1.8rem)] font-medium leading-[1.35] tracking-tight text-cream/90">
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
          className="mt-14 flex flex-wrap justify-center gap-10 border-t border-cream/10 pt-10"
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
