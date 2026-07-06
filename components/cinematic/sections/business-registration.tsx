"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { Icon } from "@/components/shared/icon";
import { SectionLabel } from "@/components/cinematic/section-label";
import { RevealText } from "@/components/cinematic/reveal-text";
import { EASE, viewportOnce } from "@/components/cinematic/lib/motion";
import { services } from "@/lib/services";
import { cn } from "@/lib/utils";

const SLUGS = ["msme", "shop-act", "food-license", "business-consulting"];

/**
 * BUSINESS REGISTRATION — an expanding gallery. On desktop the panels are a
 * horizontal accordion: hover expands one panel (obsidian) while the rest
 * collapse to vertical labels. Uses animated width (GPU-friendly) instead of
 * flex-grow (layout-thrashing). On mobile it falls back to a clean card grid.
 */
export function BusinessRegistration() {
  const panels = SLUGS.map((s) => services.find((x) => x.slug === s)!).filter(
    Boolean,
  );
  const [active, setActive] = React.useState(0);

  return (
    <section className="section-y bg-canvas">
      <div className="container-page">
        <div className="max-w-2xl">
          <SectionLabel index="09">Registrations &amp; licenses</SectionLabel>
          <h2 className="mt-5 font-display text-display-lg font-semibold tracking-tight text-ink">
            <RevealText
              segments={[
                { text: "Get" },
                {
                  text: " legitimate,",
                  className: "font-serif italic font-normal text-primary",
                },
                { text: " fast." },
              ]}
            />
          </h2>
          <p className="mt-5 max-w-lg text-body-lg leading-relaxed text-body">
            MSME, Shop Act, FSSAI or a whole new company — the right paperwork,
            filed with the right department, the first time.
          </p>
        </div>

        {/* desktop: expanding accordion — width-based for smooth GPU transitions */}
        <div className="mt-14 hidden h-[64vh] gap-3 lg:flex">
          {panels.map((p, i) => {
            const isActive = active === i;
            return (
              <motion.div
                key={p.slug}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
                animate={{ width: isActive ? "36%" : "21.3%" }}
                className={cn(
                  "relative flex min-w-0 cursor-pointer flex-col justify-between overflow-hidden rounded-card border p-7 transition-colors duration-500 ease-premium",
                  isActive
                    ? "border-transparent bg-obsidian text-cream"
                    : "border-hairline bg-white text-ink",
                )}
                style={{ originX: 0 }}
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-sm opacity-50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={cn(
                      "grid h-11 w-11 place-items-center rounded-2xl",
                      isActive ? "bg-accent/20 text-accent" : "bg-mint text-primary",
                    )}
                  >
                    <Icon name={p.icon} className="h-5 w-5" />
                  </span>
                </div>

                {isActive ? (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: EASE, delay: 0.15 }}
                  >
                    <div className="font-mono text-[11px] uppercase tracking-widest text-accent">
                      {p.tagline}
                    </div>
                    <h3 className="mt-2 font-display text-3xl font-semibold text-cream">
                      {p.name}
                    </h3>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/70">
                      {p.short}
                    </p>
                    <Link
                      href={`/services/${p.slug}`}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cream"
                    >
                      From {p.priceFrom}
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </motion.div>
                ) : (
                  <div className="font-display text-xl font-semibold [writing-mode:vertical-rl]">
                    {p.name}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* mobile / tablet: card grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:hidden">
          {panels.map((p) => (
            <Link
              key={p.slug}
              href={`/services/${p.slug}`}
              className="group rounded-card border border-hairline bg-white p-6 shadow-card transition-transform hover:-translate-y-0.5 hover:shadow-lift"
            >
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-mint text-primary">
                <Icon name={p.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-h3 font-semibold text-ink">{p.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{p.short}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                From {p.priceFrom}
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
