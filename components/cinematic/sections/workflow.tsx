"use client";

import * as React from "react";
import { useReducedMotion } from "framer-motion";

import { gsap, ScrollTrigger } from "@/lib/gsap";
import { Icon } from "@/components/shared/icon";
import { SectionLabel } from "@/components/cinematic/section-label";
import { processSteps } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * WORKFLOW — GSAP ScrollTrigger horizontal pin. The section pins and the
 * four-step track scrolls sideways with a scrubbed progress rail. Under reduced
 * motion it degrades to a clean vertical stack (no pin, no horizontal scroll).
 */
export function Workflow() {
  const reduce = useReducedMotion();
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const trackRef = React.useRef<HTMLDivElement>(null);
  const railRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (reduce) return;
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const distance = () => track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => "+=" + distance(),
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (railRef.current) {
              railRef.current.style.transform = `scaleX(${self.progress})`;
            }
          },
        },
      });
    }, section);

    return () => ctx.revert();
  }, [reduce]);

  if (reduce) {
    return (
      <section className="section-y bg-canvas">
        <div className="container-page">
          <Header />
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {processSteps.map((s) => (
              <StepCard key={s.step} step={s} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden bg-canvas">
      <div className="flex h-screen flex-col">
        {/* header sits in the top band — no longer overlaps the cards */}
        <div className="container-page shrink-0 pt-16 md:pt-20">
          <Header />
        </div>

        {/* horizontal track fills the remaining height */}
        <div
          ref={trackRef}
          className="flex w-max flex-1 items-stretch gap-5 px-[6vw] pb-16 pt-8 will-change-transform md:gap-8"
        >
          {processSteps.map((s, i) => (
            <div
              key={s.step}
              className="flex w-[82vw] shrink-0 sm:w-[52vw] lg:w-[34vw]"
            >
              <StepCard step={s} big index={i} />
            </div>
          ))}
          <div className="w-[6vw] shrink-0" aria-hidden />
        </div>
      </div>

      {/* scrubbed progress rail */}
      <div className="container-page pointer-events-none absolute inset-x-0 bottom-6 z-10">
        <div className="h-px w-full overflow-hidden bg-hairline">
          <div
            ref={railRef}
            className="h-full origin-left scale-x-0 bg-primary"
          />
        </div>
      </div>
    </section>
  );
}

function Header() {
  return (
    <div className="max-w-2xl">
      <SectionLabel index="04">How it works</SectionLabel>
      <h2 className="mt-5 font-display text-display-lg font-semibold tracking-tight text-ink">
        Four steps, then <span className="font-serif italic text-primary">silence.</span>
      </h2>
      <p className="mt-4 max-w-md text-body-lg text-body">
        You send a few documents once. We take it from there — and keep it there.
      </p>
    </div>
  );
}

function StepCard({
  step,
  big = false,
  index = 0,
}: {
  step: (typeof processSteps)[number];
  big?: boolean;
  index?: number;
}) {
  return (
    <div
      className={cn(
        "group relative flex w-full flex-col justify-between rounded-card border border-hairline bg-white p-8 shadow-card transition-shadow hover:shadow-lift",
        big && "h-full md:p-10",
      )}
    >
      <div className="flex items-start justify-between">
        <span className="font-mono text-6xl font-semibold text-mint-deep md:text-7xl">
          {step.step}
        </span>
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-white transition-transform duration-500 group-hover:-translate-y-1">
          <Icon name={step.icon} className="h-5 w-5" />
        </span>
      </div>
      <div className="mt-8">
        <h3 className="text-h2-sm font-semibold text-ink">{step.title}</h3>
        <p className="mt-3 max-w-sm text-body">{step.description}</p>
      </div>
      {big && (
        <div className="mt-6 h-px w-16 bg-gold/60" style={{ opacity: 1 - index * 0.15 }} />
      )}
    </div>
  );
}
