"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { Icon } from "@/components/shared/icon";
import { EASE, viewportOnce } from "@/components/cinematic/lib/motion";
import { services } from "@/lib/services";
import { cn } from "@/lib/utils";

const SLUGS = ["msme", "shop-act", "food-license", "business-consulting"];

export function BusinessRegistration() {
  const panels = SLUGS.map((s) => services.find((x) => x.slug === s)!).filter(Boolean);
  const [active, setActive] = React.useState(0);

  return (
    <section className="section-y relative overflow-hidden bg-canvas">
      {/* Porcelain storefront — the business you're about to make official */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 1.1, ease: EASE, delay: 0.2 }}
        className="pointer-events-none absolute right-[2%] top-10 hidden h-[340px] w-[340px] lg:block xl:right-[6%] xl:h-[400px] xl:w-[400px]"
      >
        <Image
          src="/images/porcelain/registration-facade.png"
          alt=""
          fill
          sizes="400px"
          className="mask-fade-radial object-contain blend-porcelain"
        />
      </motion.div>

      <div className="container-page">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
            <span className="h-2 w-2 rounded-full bg-gold" />
            <span className="text-gold">(09)</span>
            <span>Registrations &amp; licenses</span>
          </div>
          <h2 className="mt-5 font-display text-[clamp(2.2rem,5.5vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-ink">
            Get{" "}
            <span className="font-display font-extrabold text-primary">legitimate,</span>{" "}
            fast.
          </h2>
          <p className="mt-5 max-w-lg text-body-lg leading-relaxed text-body">
            MSME, Shop Act, FSSAI or a whole new company — the right paperwork,
            filed with the right department, the first time.
          </p>
        </div>

        {/* Desktop: expanding accordion */}
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

        {/* Mobile: color-block card grid */}
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:hidden">
          {panels.map((p, i) => {
            const dark = i % 2 === 1;
            return (
              <Link
                key={p.slug}
                href={`/services/${p.slug}`}
                className={`group relative flex min-h-[240px] flex-col overflow-hidden rounded-[28px] p-7 transition-transform hover:-translate-y-1 ${
                  dark ? "bg-obsidian text-cream" : "bg-white shadow-card hover:shadow-lift"
                }`}
              >
                <Icon
                  name={p.icon}
                  aria-hidden
                  className={`pointer-events-none absolute -right-6 -top-6 h-36 w-36 ${
                    dark ? "text-white/[0.06]" : "text-canvas"
                  }`}
                  strokeWidth={1}
                />
                <span
                  className={`relative grid h-11 w-11 place-items-center rounded-2xl ${
                    dark ? "bg-white/10 text-gold" : "bg-mint text-primary"
                  }`}
                >
                  <Icon name={p.icon} className="h-5 w-5" />
                </span>
                <h3
                  className={`relative mt-auto pt-8 font-display text-2xl font-extrabold tracking-[-0.01em] ${
                    dark ? "text-cream" : "text-ink"
                  }`}
                >
                  {p.name}
                </h3>
                <p
                  className={`relative mt-2 text-sm leading-relaxed ${
                    dark ? "text-cream/65" : "text-body"
                  }`}
                >
                  {p.short}
                </p>
                <span
                  className={`relative mt-4 inline-flex items-center gap-1.5 text-sm font-bold ${
                    dark ? "text-gold" : "text-primary"
                  }`}
                >
                  From {p.priceFrom}
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
