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
            <span className="font-serif italic font-normal text-primary">silence.</span>
          </h2>
          <p className="mt-4 max-w-md text-body-lg leading-relaxed text-body">
            You send a few documents once. We take it from there — and keep it there.
          </p>
        </div>

        {/* Step cards — staggered reveal, large format */}
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-card border border-hairline bg-white p-7 shadow-card transition-shadow duration-500 hover:shadow-lift"
            >
              {/* Step number — large, editorial */}
              <div className="flex items-center justify-between">
                <span className="font-display text-5xl font-bold text-mint-deep">
                  {step.step}
                </span>
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-mint text-primary transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                  <Icon name={step.icon} className="h-5 w-5" />
                </span>
              </div>

              <h3 className="mt-6 text-xl font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-body">
                {step.description}
              </p>

              {/* Connecting line to next card */}
              {i < processSteps.length - 1 && (
                <div className="absolute -right-2 top-1/2 hidden h-px w-4 -translate-y-1/2 bg-hairline lg:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
