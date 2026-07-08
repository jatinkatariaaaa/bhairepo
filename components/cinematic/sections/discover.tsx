"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

import { PhoneMockup } from "@/components/cinematic/phone";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * "Discover / Easy search" section — EventBeds pattern. A black rounded panel
 * with a small eyebrow, a massive white headline that sits BEHIND the phones,
 * and three iPhones that rise into view at different speeds as you scroll
 * (center front, sides behind and peeking).
 */
export function Discover() {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const k = reduce ? 0 : 1;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  // Phones rise at staggered speeds — center leads, sides trail behind it
  const yCenter = useTransform(scrollYProgress, [0, 1], [260 * k, 0]);
  const ySides = useTransform(scrollYProgress, [0, 1], [420 * k, 0]);
  const headlineY = useTransform(scrollYProgress, [0, 1], [60 * k, 0]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.6], [k ? 0 : 1, 1]);

  return (
    <section ref={ref} className="px-3 py-2 md:px-4 md:py-3">
      <div className="noise relative overflow-hidden rounded-[32px] bg-obsidian pt-20 text-cream md:rounded-[40px] md:pt-28">
        {/* Eyebrow + massive headline — phones rise over its lower half */}
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

        {/* Phone trio — clipped by panel bottom, EventBeds-style */}
        <div className="relative z-20 mx-auto -mt-6 flex h-[420px] items-start justify-center overflow-hidden md:h-[560px]">
          {/* Left phone — document vault */}
          <motion.div
            style={{ y: ySides }}
            className="z-10 -mr-14 mt-24 w-[200px] shrink-0 will-change-transform md:-mr-20 md:mt-28 md:w-[280px]"
          >
            <PhoneMockup className="shadow-phone" island={false} glare={false}>
              <Image
                src="/images/screens/document-vault.png"
                alt="TrustTax document vault screen"
                fill
                sizes="280px"
                className="object-cover"
              />
            </PhoneMockup>
          </motion.div>

          {/* Center phone — tax savings planner, front and tallest */}
          <motion.div
            style={{ y: yCenter }}
            className="z-20 mt-6 w-[240px] shrink-0 will-change-transform md:w-[330px]"
          >
            <PhoneMockup className="shadow-phone" island={false}>
              <Image
                src="/images/screens/tax-savings.png"
                alt="TrustTax tax savings planner screen"
                fill
                sizes="330px"
                className="object-cover"
              />
            </PhoneMockup>
          </motion.div>

          {/* Right phone — CA chat */}
          <motion.div
            style={{ y: ySides }}
            className="z-10 -ml-14 mt-24 w-[200px] shrink-0 will-change-transform md:-ml-20 md:mt-28 md:w-[280px]"
          >
            <PhoneMockup className="shadow-phone" island={false} glare={false}>
              <Image
                src="/images/screens/ca-chat.png"
                alt="TrustTax CA chat screen"
                fill
                sizes="280px"
                className="object-cover"
              />
            </PhoneMockup>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
