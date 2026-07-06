"use client";

import * as React from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PhoneMockup } from "@/components/cinematic/phone";
import {
  DashboardScreen,
  GstScreen,
  ItrScreen,
} from "@/components/cinematic/app-screens";
import { ProofTag } from "@/components/cinematic/proof-tag";
import { RevealText } from "@/components/cinematic/reveal-text";
import { SectionLabel } from "@/components/cinematic/section-label";
import { Magnetic } from "@/components/cinematic/magnetic";
import { EASE } from "@/components/cinematic/lib/motion";

/** Entrance for the floating phones — fly up + settle, staggered. */
function phoneEntrance(delay: number) {
  return {
    initial: { opacity: 0, y: 120, scale: 0.85 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 1.2, ease: EASE, delay },
  };
}

export function Hero() {
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const k = reduce ? 0 : 1;
  const r = <T,>(a: T, b: T) => [a, b] as [T, T];

  // ── One scroll clock → many connected layers ───────────────────────────
  // Phone A (center / dashboard) — moves SLOWEST
  const yA = useTransform(scrollYProgress, [0, 1], r(0, -80 * k));
  const scaleA = useTransform(scrollYProgress, [0, 1], r(1, 1 + 0.06 * k));
  // Phone B (left / GST) — ROTATES
  const yB = useTransform(scrollYProgress, [0, 1], r(0, -160 * k));
  const rotB = useTransform(scrollYProgress, [0, 1], r(-8 * k, 4 * k));
  const xB = useTransform(scrollYProgress, [0, 1], r(0, -30 * k));
  // Phone C (right / ITR) — SCALES
  const yC = useTransform(scrollYProgress, [0, 1], r(0, -130 * k));
  const scaleC = useTransform(scrollYProgress, [0, 1], r(0.9, 0.9 + 0.22 * k));
  const rotC = useTransform(scrollYProgress, [0, 1], r(6 * k, -4 * k));
  const xC = useTransform(scrollYProgress, [0, 1], r(0, 30 * k));

  // Headline slides up & fades; sub/CTA fade faster
  const yText = useTransform(scrollYProgress, [0, 0.6], r(0, -100 * k));
  const opacityText = useTransform(scrollYProgress, [0, 0.5], r(1, k ? 0 : 1));
  const opacityLede = useTransform(scrollYProgress, [0, 0.32], r(1, k ? 0 : 1));

  // Background: orb breathes, ink overlay deepens
  const orbScale = useTransform(scrollYProgress, [0, 1], r(1, 1 + 0.4 * k));
  const orbOpacity = useTransform(scrollYProgress, [0, 1], r(0.85, 0.4));
  const tintOpacity = useTransform(scrollYProgress, [0.3, 1], r(0, 0.1 * k));
  const cueOpacity = useTransform(scrollYProgress, [0, 0.12], r(1, k ? 0 : 1));

  return (
    <section
      ref={ref}
      className="relative h-[200vh]"
      aria-label="TrustTax — taxes, GST and compliance, handled"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* background layers */}
        <motion.div
          style={{ scale: orbScale, opacity: orbOpacity }}
          className="bg-orb-emerald pointer-events-none absolute left-1/2 top-[44%] h-[85vmin] w-[85vmin] -translate-x-1/2 -translate-y-1/2 will-change-transform"
        />
        <div className="bg-dotgrid pointer-events-none absolute inset-0 opacity-50" />
        <motion.div
          style={{ opacity: tintOpacity }}
          className="pointer-events-none absolute inset-0 bg-obsidian"
        />

        {/* ── floating phones — rest LOW (peeking), scroll lifts them up ── */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex translate-y-[38%] items-end justify-center gap-2 sm:gap-6 md:translate-y-[28%] md:gap-10">
          {/* Phone B — left, rotates (hidden on small screens) */}
          <motion.div
            style={{ y: yB, x: xB, rotate: rotB }}
            className="hidden w-[190px] translate-y-8 will-change-transform sm:block md:w-[236px]"
          >
            <motion.div {...(reduce ? {} : phoneEntrance(0.5))}>
              <PhoneMockup>
                <GstScreen />
              </PhoneMockup>
            </motion.div>
          </motion.div>

          {/* Phone A — center, slowest & largest */}
          <motion.div
            style={{ y: yA, scale: scaleA }}
            className="z-10 w-[248px] will-change-transform md:w-[310px]"
          >
            <motion.div {...(reduce ? {} : phoneEntrance(0.3))}>
              <PhoneMockup className="shadow-phone">
                <DashboardScreen />
              </PhoneMockup>
            </motion.div>
          </motion.div>

          {/* Phone C — right, scales (hidden on small screens) */}
          <motion.div
            style={{ y: yC, x: xC, scale: scaleC, rotate: rotC }}
            className="hidden w-[190px] translate-y-14 will-change-transform sm:block md:w-[236px]"
          >
            <motion.div {...(reduce ? {} : phoneEntrance(0.65))}>
              <PhoneMockup>
                <ItrScreen />
              </PhoneMockup>
            </motion.div>
          </motion.div>
        </div>

        {/* ── floating proof-tags (each parallaxes at a different rate) ── */}
        <FloatingTag
          progress={scrollYProgress}
          rate={-70 * k}
          delay={1}
          className="hidden left-[3%] top-[50%] sm:block md:left-[8%] md:top-[44%]"
        >
          <ProofTag icon="BadgeCheck" label="GSTR-3B" value="Filed · on time" />
        </FloatingTag>
        <FloatingTag
          progress={scrollYProgress}
          rate={40 * k}
          delay={1.15}
          className="hidden right-[3%] top-[56%] sm:block md:right-[8%] md:top-[42%]"
        >
          <ProofTag
            icon="IndianRupee"
            label="Refund credited"
            value="₹48,200"
          />
        </FloatingTag>
        <FloatingTag
          progress={scrollYProgress}
          rate={90 * k}
          delay={1.3}
          className="bottom-[14%] left-[7%] hidden md:block"
        >
          <ProofTag
            icon="ShieldCheck"
            label="CA-certified"
            value="12,000+ returns"
          />
        </FloatingTag>
        <FloatingTag
          progress={scrollYProgress}
          rate={-40 * k}
          delay={1.45}
          className="bottom-[18%] right-[7%] hidden md:block"
        >
          <ProofTag icon="Clock" label="Avg. turnaround" value="3–7 days" />
        </FloatingTag>

        {/* ── headline block (above the phones) ── */}
        <motion.div
          style={{ y: yText }}
          className="absolute inset-x-0 top-0 z-30 mx-auto flex max-w-5xl flex-col items-center px-6 pt-[10vh] text-center md:pt-[9vh]"
        >
          <motion.div style={{ opacity: opacityLede }}>
            <SectionLabel index="01" className="justify-center">
              CA-led · 100% online · India
            </SectionLabel>
          </motion.div>

          <motion.h1
            style={{ opacity: opacityText }}
            className="mt-7 font-display text-[clamp(2.4rem,7vw,5.25rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-ink"
          >
            <RevealText
              as="span"
              className="block"
              segments={[{ text: "Taxes, GST" }]}
            />
            <RevealText
              as="span"
              className="block"
              delay={0.18}
              segments={[
                { text: "& compliance —" },
                {
                  text: " handled.",
                  className: "font-serif italic font-normal text-primary",
                },
              ]}
            />
          </motion.h1>

          <motion.p
            style={{ opacity: opacityLede }}
            className="mt-6 max-w-xl text-body-lg leading-relaxed text-body"
          >
            A team of Chartered Accountants files it right, on time and entirely
            online — so you can get back to running the business.
          </motion.p>

          <motion.div
            style={{ opacity: opacityLede }}
            className="pointer-events-auto mt-8 flex flex-col items-center gap-3 sm:flex-row"
          >
            <Magnetic>
              <Button asChild size="lg">
                <Link href="/contact#book">
                  Book free consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </Magnetic>
            <Button asChild size="lg" variant="ghost">
              <Link href="/services">Explore services</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* scroll cue */}
        <motion.div
          style={{ opacity: cueOpacity }}
          className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-2 text-muted"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.24em]">
            Scroll
          </span>
          <span className="relative h-9 w-px overflow-hidden bg-hairline">
            <motion.span
              className="absolute inset-x-0 top-0 h-3 bg-primary"
              animate={reduce ? {} : { y: ["-100%", "300%"] }}
              transition={{ duration: 1.6, ease: "easeInOut", repeat: Infinity }}
            />
          </span>
        </motion.div>
      </div>
    </section>
  );
}

/** A proof-tag that fades in on load, then parallaxes with the page scroll. */
function FloatingTag({
  children,
  progress,
  rate,
  delay,
  className,
}: {
  children: React.ReactNode;
  progress: MotionValue<number>;
  rate: number;
  delay: number;
  className: string;
}) {
  const y = useTransform(progress, [0, 1], [0, rate]);
  const opacity = useTransform(progress, [0, 0.55], [1, 0]);
  return (
    <motion.div
      style={{ y, opacity }}
      className={`absolute z-40 will-change-transform ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: EASE, delay }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
