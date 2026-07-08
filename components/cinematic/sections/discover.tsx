"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

import { Icon } from "@/components/shared/icon";
import type { IconName } from "@/components/shared/icon";

/**
 * EventBeds "Book and relax" — a near-black scene with a centered headline,
 * a large 3D dark tower with glowing windows, and four floating feature
 * cards scattered around it that drift at parallax speeds on scroll.
 */

type FloatCard = {
  icon: IconName;
  text: string;
  /** Position on desktop */
  pos: string;
  /** Card surface */
  surface: string;
  iconChip: string;
  /** Parallax intensity */
  speed: number;
};

const CARDS: FloatCard[] = [
  {
    icon: "IndianRupee",
    text: "Maximum legal refund, guaranteed.",
    pos: "left-[4%] top-[16%] lg:left-[10%]",
    surface: "bg-mint text-ink",
    iconChip: "bg-ink/10 text-ink",
    speed: 120,
  },
  {
    icon: "ClipboardCheck",
    text: "Never miss a deadline again.",
    pos: "right-[4%] top-[30%] lg:right-[10%]",
    surface: "bg-cream text-ink",
    iconChip: "bg-mint text-primary",
    speed: 200,
  },
  {
    icon: "FileCheck2",
    text: "Amend or revise your return online.",
    pos: "left-[2%] top-[58%] lg:left-[8%]",
    surface: "bg-cream text-ink",
    iconChip: "bg-mint text-primary",
    speed: 260,
  },
  {
    icon: "LifeBuoy",
    text: "On demand CA support.",
    pos: "right-[3%] top-[68%] lg:right-[9%]",
    surface: "bg-primary text-white",
    iconChip: "bg-white/15 text-white",
    speed: 170,
  },
];

export function Discover() {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const k = reduce ? 0 : 1;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const yTower = useTransform(scrollYProgress, [0, 1], [90 * k, 0]);
  const towerScale = useTransform(scrollYProgress, [0, 1], [1 - 0.05 * k, 1]);
  const headlineY = useTransform(scrollYProgress, [0, 1], [50 * k, 0]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.55], [k ? 0 : 1, 1]);

  // One parallax track per card — each trails at its own speed
  const yCard0 = useTransform(scrollYProgress, [0, 1], [CARDS[0].speed * k, 0]);
  const yCard1 = useTransform(scrollYProgress, [0, 1], [CARDS[1].speed * k, 0]);
  const yCard2 = useTransform(scrollYProgress, [0, 1], [CARDS[2].speed * k, 0]);
  const yCard3 = useTransform(scrollYProgress, [0, 1], [CARDS[3].speed * k, 0]);
  const tracks = [yCard0, yCard1, yCard2, yCard3];

  return (
    <section ref={ref} className="px-3 py-2 md:px-4 md:py-3">
      <div className="noise relative overflow-hidden rounded-[32px] bg-obsidian pt-20 text-cream md:rounded-[40px] md:pt-28">
        {/* Centered headline + subcopy */}
        <motion.div
          style={{ y: headlineY, opacity: headlineOpacity }}
          className="container-page relative z-10 text-center"
        >
          <h2 className="font-display text-[clamp(2.6rem,7vw,5.5rem)] font-extrabold leading-[0.95] tracking-[-0.04em] text-cream">
            File and relax
          </h2>
          <p className="mx-auto mt-5 max-w-xs text-balance text-sm leading-relaxed text-cream/45 md:text-base">
            Flexible filing options give you more time to run your business and
            less time stressing about compliance.
          </p>
        </motion.div>

        {/* Dark tower scene with floating feature cards */}
        <div className="relative mx-auto -mt-6 h-[520px] w-full max-w-5xl md:-mt-10 md:h-[760px]">
          {/* 3D tower */}
          <motion.div
            style={{ y: yTower, scale: towerScale }}
            className="absolute inset-x-0 bottom-0 top-0 will-change-transform"
          >
            <Image
              src="/images/city/dark-tower.png"
              alt="Dark office tower at night with a few warmly lit windows"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="mask-fade-radial object-contain object-bottom"
            />
          </motion.div>

          {/* Floating feature cards */}
          {CARDS.map((c, i) => (
            <motion.div
              key={c.text}
              style={{ y: tracks[i] }}
              className={`absolute z-20 w-[150px] rounded-2xl p-4 shadow-lift will-change-transform md:w-[190px] md:rounded-[20px] md:p-5 ${c.pos} ${c.surface}`}
            >
              <span
                className={`grid h-9 w-9 place-items-center rounded-full ${c.iconChip}`}
              >
                <Icon name={c.icon} className="h-4 w-4" />
              </span>
              <p className="mt-6 text-[13px] font-semibold leading-snug md:mt-9 md:text-[15px]">
                {c.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
