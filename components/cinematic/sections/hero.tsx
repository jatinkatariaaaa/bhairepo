"use client";

import * as React from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";

import { PhoneMockup } from "@/components/cinematic/phone";
import { ProofTag } from "@/components/cinematic/proof-tag";
import { EASE } from "@/components/cinematic/lib/motion";

/**
 * EventBeds-style hero: a full-bleed clay-model city fills the viewport,
 * a small gray eyebrow sits above one massive uppercase headline, and a
 * single phone rises out of the scene with floating proof pills around it.
 */
export function Hero() {
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const k = reduce ? 0 : 1;
  const r = <T,>(a: T, b: T) => [a, b] as [T, T];

  const yCity = useTransform(scrollYProgress, [0, 1], r(0, 120 * k));
  const cityScale = useTransform(scrollYProgress, [0, 1], r(1, 1 + 0.08 * k));
  const yPhone = useTransform(scrollYProgress, [0, 1], r(0, -140 * k));
  const yText = useTransform(scrollYProgress, [0, 0.5], r(0, -80 * k));
  const opacityText = useTransform(scrollYProgress, [0, 0.42], r(1, k ? 0 : 1));

  // Side phones straighten to 0° on scroll — perfectly upright like the center phone
  const rotateLeft = useTransform(scrollYProgress, [0, 0.3], r(-10 * k, 0));
  const rotateRight = useTransform(scrollYProgress, [0, 0.3], r(10 * k, 0));

  return (
    <section
      ref={ref}
      className="relative -mt-[76px] h-[190vh] md:-mt-[88px]"
      aria-label="TrustTax — India's all-in-one tax platform"
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-canvas">
        {/* Full-bleed clay city world */}
        <motion.div
          style={{ y: yCity, scale: cityScale }}
          className="pointer-events-none absolute inset-0 will-change-transform"
        >
          <motion.div
            initial={reduce ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6, ease: EASE }}
            className="absolute inset-0"
          >
            <Image
              src="/images/porcelain/hero-city-world.png"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-bottom blend-porcelain"
            />
            {/* Soften the top so the headline zone stays clean */}
            <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-canvas via-canvas/70 to-transparent" />
          </motion.div>
        </motion.div>

        {/* Eyebrow + massive headline */}
        <motion.div
          style={{ y: yText, opacity: opacityText }}
          className="absolute inset-x-0 top-0 z-30 mx-auto flex flex-col items-center px-4 pt-[16vh] text-center md:pt-[15vh]"
        >
          <motion.p
            initial={reduce ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
            className="font-display text-[clamp(1.1rem,2.4vw,1.9rem)] font-medium tracking-tight text-muted"
          >
            India&apos;s all-in-one platform for
          </motion.p>
          <motion.h1
            initial={reduce ? {} : { opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
            className="mt-1 font-display text-[clamp(3.2rem,11.5vw,9.5rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.04em] text-ink"
          >
            Taxes, done
          </motion.h1>
        </motion.div>

        {/* Three phones rising from the scene — center leads, sides tilt back */}
        <motion.div
          style={{ y: yPhone }}
          className="pointer-events-none absolute inset-x-0 top-[46%] z-20 flex items-start justify-center will-change-transform"
        >
          {/* Left phone — GST filing, straightens upright on scroll */}
          <motion.div
            initial={reduce ? {} : { opacity: 0, y: 180 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, ease: EASE, delay: 0.62 }}
            className="z-10 -mr-10 mt-16 hidden w-[190px] sm:block md:-mr-12 md:mt-20 md:w-[230px]"
          >
            <motion.div style={{ rotate: rotateLeft }} className="will-change-transform">
            <PhoneMockup className="shadow-phone" island={false}>
              <Image
                src="/images/screens/gst-filing.png"
                alt="TrustTax GST filing screen"
                fill
                sizes="230px"
                className="object-cover"
              />
            </PhoneMockup>
            </motion.div>
          </motion.div>

          {/* Center phone — dashboard, front and tallest */}
          <motion.div
            initial={reduce ? {} : { opacity: 0, y: 160 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, ease: EASE, delay: 0.45 }}
            className="z-20 w-[240px] md:w-[290px]"
          >
            <PhoneMockup className="shadow-phone" island={false}>
              <Image
                src="/images/screens/dashboard-main.png"
                alt="TrustTax dashboard screen"
                fill
                priority
                sizes="290px"
                className="object-cover"
              />
            </PhoneMockup>
          </motion.div>

          {/* Right phone — refund tracker, straightens upright on scroll */}
          <motion.div
            initial={reduce ? {} : { opacity: 0, y: 180 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, ease: EASE, delay: 0.78 }}
            className="z-10 -ml-10 mt-16 hidden w-[190px] sm:block md:-ml-12 md:mt-20 md:w-[230px]"
          >
            <motion.div style={{ rotate: rotateRight }} className="will-change-transform">
            <PhoneMockup className="shadow-phone" island={false}>
              <Image
                src="/images/screens/refund-tracker.png"
                alt="TrustTax refund tracker screen"
                fill
                sizes="230px"
                className="object-cover"
              />
            </PhoneMockup>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating proof pills — EventBeds price-pill pattern */}
        <FloatingTag progress={scrollYProgress} rate={-60 * k} delay={0.9} className="left-[6%] top-[52%] hidden sm:block md:left-[13%] md:top-[50%]">
          <ProofTag icon="BadgeCheck" label="GSTR-3B" value="Filed · on time" />
        </FloatingTag>
        <FloatingTag progress={scrollYProgress} rate={40 * k} delay={1.05} className="right-[5%] top-[58%] hidden sm:block md:right-[12%] md:top-[54%]">
          <ProofTag icon="IndianRupee" label="Refund credited" value="₹48,200" />
        </FloatingTag>
        <FloatingTag progress={scrollYProgress} rate={80 * k} delay={1.2} className="bottom-[16%] left-[8%] hidden lg:block">
          <ProofTag icon="ShieldCheck" label="CA-certified" value="12,000+ returns" />
        </FloatingTag>
        <FloatingTag progress={scrollYProgress} rate={-35 * k} delay={1.35} className="bottom-[20%] right-[9%] hidden lg:block">
          <ProofTag icon="Clock" label="Avg. turnaround" value="3–7 days" />
        </FloatingTag>
      </div>
    </section>
  );
}

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
  const opacity = useTransform(progress, [0, 0.5], [1, 0]);
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
