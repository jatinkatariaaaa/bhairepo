"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/cinematic/magnetic";
import { Marquee } from "@/components/cinematic/marquee";
import { SectionLabel } from "@/components/cinematic/section-label";
import { RevealText } from "@/components/cinematic/reveal-text";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

/**
 * CTA — the dark finale. Megatype mask reveal, magnetic primary button,
 * slow-orbiting rings and a faint service marquee behind. Signature motion:
 * orbiting rings + magnetic close.
 */
export function CTA() {
  const reduce = useReducedMotion();

  return (
    <section className="noise relative flex min-h-[92vh] items-center overflow-hidden bg-obsidian py-28 text-cream md:py-40">
      {/* orbiting rings */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className={`h-[52vw] w-[52vw] rounded-full border border-cream/15 ${reduce ? "" : "animate-spin-slow"}`}
        />
        <div className="absolute inset-[8%] rounded-full border border-cream/10" />
        <div className="absolute inset-[22%] rounded-full border border-dashed border-accent/30" />
      </div>
      <div className="bg-orb-emerald pointer-events-none absolute left-1/2 top-1/2 h-[64vmin] w-[64vmin] -translate-x-1/2 -translate-y-1/2 opacity-40" />

      {/* faint service marquee */}
      <div className="pointer-events-none absolute inset-x-0 top-10 opacity-[0.06]">
        <Marquee pauseOnHover={false}>
          {services.map((s) => (
            <span
              key={s.slug}
              className="mx-8 font-display text-5xl font-semibold text-cream md:text-7xl"
            >
              {s.name}
            </span>
          ))}
        </Marquee>
      </div>

      <div className="container-page relative z-10 text-center">
        <div className="flex justify-center">
          <SectionLabel index="12" tone="dark">
            Ready when you are
          </SectionLabel>
        </div>

        <h2 className="mx-auto mt-7 max-w-4xl font-display text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-cream">
          <RevealText as="span" className="block" segments={[{ text: "Make tax the" }]} />
          <RevealText
            as="span"
            className="block"
            delay={0.15}
            segments={[
              { text: "easiest" , className: "font-serif italic font-normal text-accent" },
              { text: " part of your business." },
            ]}
          />
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-7 max-w-xl text-body-lg text-cream/70"
        >
          One free consultation with a Chartered Accountant. We&apos;ll tell you
          exactly what you need — and handle it end to end.
        </motion.p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Magnetic>
            <Button asChild size="lg" variant="white">
              <Link href="/contact#book">
                Book free consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Magnetic>
          <Button asChild size="lg" variant="outlineWhite">
            <a href={site.phoneHref}>
              <Phone className="h-4 w-4" />
              {site.phoneDisplay}
            </a>
          </Button>
        </div>

        <div className="mt-8 font-mono text-[11px] uppercase tracking-[0.24em] text-cream/40">
          No obligation · CA-certified · 100% online
        </div>
      </div>
    </section>
  );
}
