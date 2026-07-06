"use client";

import * as React from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

import { PhoneMockup } from "@/components/cinematic/phone";
import {
  DashboardScreen,
  GstScreen,
  ItrScreen,
} from "@/components/cinematic/app-screens";
import { SectionLabel } from "@/components/cinematic/section-label";
import { stats } from "@/lib/content";

/**
 * DASHBOARD PREVIEW — dark keynote. A single sticky device tilts to the scroll
 * while its screen cross-fades Dashboard → GST → ITR; glass stat cards parallax
 * in from the edges. Signature motion: 3D device + timed screen sequence.
 */
export function DashboardPreview() {
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const k = reduce ? 0 : 1;

  // device 3D tilt + gentle scale
  const rotateY = useTransform(scrollYProgress, [0, 1], [14 * k, -14 * k]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [6 * k, 0, 6 * k]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 0.96]);

  // screen crossfade
  const opDash = useTransform(scrollYProgress, [0, 0.26, 0.36], [1, 1, 0]);
  const opGst = useTransform(
    scrollYProgress,
    [0.32, 0.42, 0.6, 0.7],
    [0, 1, 1, 0],
  );
  const opItr = useTransform(scrollYProgress, [0.66, 0.78, 1], [0, 1, 1]);

  // caption index
  const captions = ["Every filing, one glance", "GST on autopilot", "ITR & refunds tracked"];

  // side stat cards parallax
  const xLeft = useTransform(scrollYProgress, [0, 1], [-60 * k, 40 * k]);
  const xRight = useTransform(scrollYProgress, [0, 1], [60 * k, -40 * k]);

  return (
    <section ref={ref} className="relative h-[260vh] bg-obsidian text-cream">
      <div className="noise sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <div className="bg-orb-emerald pointer-events-none absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 opacity-30" />

        <div className="container-page absolute inset-x-0 top-0 z-20 pt-16 md:pt-20">
          <SectionLabel index="05" tone="dark">
            The dashboard
          </SectionLabel>
          <h2 className="mt-4 max-w-xl font-display text-display-lg font-semibold tracking-tight text-cream">
            One pane of <span className="font-serif italic text-accent">glass.</span>
          </h2>
          {/* mobile stat chips (side cards are desktop-only) */}
          <div className="mt-6 flex flex-wrap gap-2 lg:hidden">
            {stats.map((s) => (
              <span
                key={s.label}
                className="glass-dark rounded-pill px-3 py-1.5 text-xs text-cream/70"
              >
                <b className="tnum font-mono text-cream">
                  {s.value}
                  {s.suffix}
                </b>{" "}
                {s.label}
              </span>
            ))}
          </div>
        </div>

        {/* left stat cards */}
        <motion.div
          style={{ x: xLeft }}
          className="absolute left-[4%] top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-4 lg:flex"
        >
          <StatCard stat={stats[0]} />
          <StatCard stat={stats[3]} />
        </motion.div>

        {/* device — offset down on mobile to clear the header, centered on desktop */}
        <div className="perspective-1600 relative z-10 mt-32 lg:mt-0">
          <motion.div
            style={{ rotateY, rotateX, scale }}
            className="w-[230px] will-change-transform md:w-[300px]"
          >
            <PhoneMockup screenClassName="bg-white">
              <motion.div style={{ opacity: opDash }} className="absolute inset-0">
                <DashboardScreen />
              </motion.div>
              <motion.div style={{ opacity: opGst }} className="absolute inset-0">
                <GstScreen />
              </motion.div>
              <motion.div style={{ opacity: opItr }} className="absolute inset-0">
                <ItrScreen />
              </motion.div>
            </PhoneMockup>
          </motion.div>
        </div>

        {/* right stat cards */}
        <motion.div
          style={{ x: xRight }}
          className="absolute right-[4%] top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-4 lg:flex"
        >
          <StatCard stat={stats[1]} />
          <StatCard stat={stats[2]} />
        </motion.div>

        {/* rotating caption (hidden on the smallest screens to avoid crowding) */}
        <div className="absolute bottom-16 left-1/2 z-20 hidden -translate-x-1/2 text-center sm:block">
          <div className="relative h-6">
            {captions.map((c, i) => {
              const ranges: [number, number, number, number][] = [
                [0, 0.26, 0.32, 0.38],
                [0.38, 0.44, 0.6, 0.66],
                [0.66, 0.72, 1, 1],
              ];
              return (
                <Caption key={c} progress={scrollYProgress} range={ranges[i]}>
                  {c}
                </Caption>
              );
            })}
          </div>
          {/* progress dots */}
          <div className="mt-3 flex items-center justify-center gap-2">
            {[0, 1, 2].map((i) => (
              <Dot key={i} progress={scrollYProgress} at={[0.15, 0.5, 0.85][i]} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat }: { stat: (typeof stats)[number] }) {
  return (
    <div className="glass-dark min-w-[150px] rounded-2xl px-5 py-4">
      <div className="tnum font-mono text-2xl font-bold text-cream">
        {stat.value}
        <span className="text-accent">{stat.suffix}</span>
      </div>
      <div className="mt-1 text-[11px] uppercase tracking-wider text-cream/50">
        {stat.label}
      </div>
    </div>
  );
}

function Caption({
  children,
  progress,
  range,
}: {
  children: React.ReactNode;
  progress: import("framer-motion").MotionValue<number>;
  range: [number, number, number, number];
}) {
  const opacity = useTransform(progress, range, [0, 1, 1, 0]);
  const y = useTransform(progress, range, [10, 0, 0, -10]);
  return (
    <motion.span
      style={{ opacity, y }}
      className="absolute inset-x-0 font-mono text-xs uppercase tracking-[0.24em] text-cream/70"
    >
      {children}
    </motion.span>
  );
}

function Dot({
  progress,
  at,
}: {
  progress: import("framer-motion").MotionValue<number>;
  at: number;
}) {
  const scale = useTransform(
    progress,
    [at - 0.18, at, at + 0.18],
    [1, 1.6, 1],
  );
  const opacity = useTransform(
    progress,
    [at - 0.18, at, at + 0.18],
    [0.35, 1, 0.35],
  );
  return (
    <motion.span
      style={{ scale, opacity }}
      className="h-1.5 w-1.5 rounded-full bg-accent"
    />
  );
}
