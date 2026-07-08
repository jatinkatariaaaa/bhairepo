"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

import { Icon } from "@/components/shared/icon";

/**
 * "Discover / Easy filing" — EventBeds-style black rounded panel, but instead
 * of another phone trio, a large desktop dashboard in a browser frame rises
 * into view with floating stat cards drifting at parallax speeds around it.
 */
export function Discover() {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const k = reduce ? 0 : 1;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  // Dashboard rises into view; floating cards trail at different speeds
  const yBrowser = useTransform(scrollYProgress, [0, 1], [220 * k, 0]);
  const yCardA = useTransform(scrollYProgress, [0, 1], [340 * k, 0]);
  const yCardB = useTransform(scrollYProgress, [0, 1], [420 * k, 0]);
  const headlineY = useTransform(scrollYProgress, [0, 1], [60 * k, 0]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.6], [k ? 0 : 1, 1]);

  return (
    <section ref={ref} className="px-3 py-2 md:px-4 md:py-3">
      <div className="noise relative overflow-hidden rounded-[32px] bg-obsidian pt-20 text-cream md:rounded-[40px] md:pt-28">
        {/* Eyebrow + massive headline — the dashboard rises over its lower half */}
        <motion.div
          style={{ y: headlineY, opacity: headlineOpacity }}
          className="container-page relative z-10 text-center"
        >
          <p className="font-mono text-[13px] uppercase tracking-[0.24em] text-cream/40">
            Discover
          </p>
          <h2 className="mt-3 font-display text-[clamp(3rem,9vw,7.5rem)] font-extrabold leading-[0.95] tracking-[-0.04em] text-cream">
            Easy filing
          </h2>
        </motion.div>

        {/* Desktop dashboard in a browser frame — clipped by the panel bottom */}
        <div className="relative z-20 mx-auto -mt-4 flex h-[340px] items-start justify-center overflow-hidden md:h-[520px]">
          <motion.div
            style={{ y: yBrowser }}
            className="relative mt-10 w-[92%] max-w-4xl will-change-transform md:mt-14"
          >
            {/* Browser chrome */}
            <div className="overflow-hidden rounded-t-2xl border border-white/10 bg-[#161B18] shadow-phone">
              <div className="flex items-center gap-2 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="mx-auto flex items-center gap-1.5 rounded-pill bg-white/5 px-4 py-1 font-mono text-[11px] text-cream/40">
                  <Icon name="Lock" className="h-3 w-3" />
                  app.trustax.in
                </span>
                <span className="w-16" />
              </div>
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/images/screens/desktop-dashboard.png"
                  alt="TrustTax web dashboard with refund, savings and compliance overview"
                  fill
                  sizes="(min-width: 768px) 896px, 92vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Floating stat card — left, trails slower */}
            <motion.div
              style={{ y: yCardA }}
              className="absolute -left-4 top-[18%] hidden rounded-2xl bg-cream p-4 shadow-lift md:-left-16 md:block"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-mint text-primary">
                  <Icon name="IndianRupee" className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                    Refund expected
                  </p>
                  <p className="font-display text-lg font-bold text-ink">₹48,200</p>
                </div>
              </div>
            </motion.div>

            {/* Floating status card — right, trails slowest */}
            <motion.div
              style={{ y: yCardB }}
              className="absolute -right-4 top-[52%] hidden rounded-2xl bg-primary p-4 text-white shadow-lift md:-right-16 md:block"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15">
                  <Icon name="BadgeCheck" className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">
                    GSTR-3B
                  </p>
                  <p className="font-display text-lg font-bold">Filed on time</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
