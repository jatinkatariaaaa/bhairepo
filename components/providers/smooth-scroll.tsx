"use client";

import * as React from "react";
import Lenis from "lenis";
import { MotionConfig, useReducedMotion } from "framer-motion";

import { gsap, ScrollTrigger } from "@/lib/gsap";

/**
 * Site-wide smooth scroll (Lenis) wired into GSAP's ticker + ScrollTrigger.
 *
 * - Lenis scrolls the real window, so native `scroll` events, `window.scrollY`
 *   and framer-motion's `useScroll` all keep working (the navbar, reveals, etc).
 * - GSAP drives Lenis via a single rAF (`gsap.ticker`), and every Lenis scroll
 *   pushes a `ScrollTrigger.update()` so pinned timelines stay perfectly synced.
 * - Users who prefer reduced motion get plain native scrolling (no Lenis).
 *
 * The instance is exposed on `window.__lenis` so a component can request a
 * programmatic `scrollTo` without prop-drilling a context.
 */
export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const reduceMotion = useReducedMotion();

  React.useEffect(() => {
    if (reduceMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      // easeOutExpo — a long, luxurious glide
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
    });

    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);

    // Recalculate pinned/scrubbed triggers once fonts + layout settle.
    const refresh = () => ScrollTrigger.refresh();
    const settle = window.setTimeout(refresh, 300);

    return () => {
      gsap.ticker.remove(raf);
      window.clearTimeout(settle);
      lenis.destroy();
      (window as unknown as { __lenis?: Lenis }).__lenis = undefined;
    };
  }, [reduceMotion]);

  // reducedMotion="user" auto-disables transform/layout animations for users
  // who prefer reduced motion (opacity fades are kept), across every motion
  // component — a global safety net on top of the per-section guards.
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
