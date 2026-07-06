"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { Icon } from "@/components/shared/icon";
import { EASE, viewportOnce } from "@/components/cinematic/lib/motion";
import { processSteps } from "@/lib/content";

export function Workflow() {
  return (
    <section className="section-y bg-canvas">
      <div className="container-page">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
            <span className="h-2 w-2 rounded-full bg-gold" />
            <span className="text-gold">(04)</span>
            <span>How it works</span>
          </div>
          <h2 className="mt-5 font-display text-[clamp(2.2rem,5.5vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-ink">
            Four steps, then{" "}
            <span className="font-display font-extrabold text-primary">silence.</span>
          </h2>
          <p className="mt-4 max-w-md text-body-lg leading-relaxed text-body">
            You send a few documents once. We take it from there — and keep it there.
          </p>
        </div>

        {/* Step panels — color-block rhythm, final step lands on emerald */}
        <div className="mt-14 grid gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-4">
          {processSteps.map((step, i) => {
            const last = i === processSteps.length - 1;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.7, ease: EASE, delay: i * 0.1 }}
                className={`group relative flex min-h-[320px] flex-col overflow-hidden rounded-[28px] p-7 transition-shadow duration-500 md:min-h-[380px] ${
                  last
                    ? "bg-primary text-white"
                    : "bg-white shadow-card hover:shadow-lift"
                }`}
              >
                {/* Giant ghost step number — bleeds off the top edge */}
                <span
                  aria-hidden
                  className={`pointer-events-none absolute -top-10 right-2 font-display text-[10rem] font-extrabold leading-none tracking-tighter ${
                    last ? "text-white/10" : "text-canvas"
                  }`}
                >
                  {step.step}
                </span>

                <span
                  className={`relative grid h-12 w-12 place-items-center rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 ${
                    last ? "bg-white/15 text-white" : "bg-mint text-primary"
                  }`}
                >
                  <Icon name={step.icon} className="h-6 w-6" />
                </span>

                <div className="relative mt-auto pt-16">
                  <span
                    className={`font-mono text-[11px] uppercase tracking-[0.24em] ${
                      last ? "text-white/50" : "text-muted"
                    }`}
                  >
                    Step {step.step}
                  </span>
                  <h3
                    className={`mt-2 font-display text-2xl font-extrabold tracking-[-0.01em] ${
                      last ? "text-white" : "text-ink"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`mt-3 text-sm leading-relaxed ${
                      last ? "text-white/75" : "text-body"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
