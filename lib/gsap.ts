"use client";

/**
 * Central GSAP registry. Import { gsap, ScrollTrigger } from "@/lib/gsap"
 * anywhere so the ScrollTrigger plugin is registered exactly once, on the
 * client only (registering on the server throws).
 */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  // Keep ScrollTrigger in lockstep with our own rAF loop (Lenis) — no lag catch-up.
  gsap.ticker.lagSmoothing(0);
}

export { gsap, ScrollTrigger };
