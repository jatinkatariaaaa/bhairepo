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

        {/* Editorial step columns — hairline rules and giant numerals, no boxes */}
        <div className="mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.1 }}
              className="group border-t border-hairline pt-6"
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-[clamp(3.5rem,5vw,5rem)] font-extrabold leading-none tracking-[-0.04em] text-ink">
                  {step.step}
                </span>
                <span className="mt-1 grid h-11 w-11 place-items-center rounded-2xl bg-mint text-primary transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                  <Icon name={step.icon} className="h-5 w-5" />
                </span>
              </div>
              <h3 className="mt-8 text-xl font-semibold tracking-[-0.01em] text-ink">
                {step.title}
              </h3>
              <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-muted">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
