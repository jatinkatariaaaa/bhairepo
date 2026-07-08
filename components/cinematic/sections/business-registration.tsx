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

const PANEL_IMAGES: Record<string, string> = {
  msme: "/images/registrations/msme.png",
  "shop-act": "/images/registrations/shop-act.png",
  "food-license": "/images/registrations/food-license.png",
  "business-consulting": "/images/registrations/consulting.png",
};

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
                {/* Card photography — fills the previously blank middle */}
                <div
                  className={cn(
                    "pointer-events-none absolute inset-0",
                    isActive ? "opacity-40" : "opacity-100",
                  )}
                >
                  <Image
                    src={PANEL_IMAGES[p.slug] ?? PANEL_IMAGES.msme}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 36vw, 100vw"
                    className="object-cover"
                  />
                  <div
                    className={cn(
                      "absolute inset-0",
                      isActive
                        ? "bg-gradient-to-t from-obsidian via-obsidian/70 to-obsidian/30"
                        : "bg-gradient-to-t from-white via-white/40 to-white/10",
                    )}
                  />
                </div>

                <div className="relative flex items-start justify-between">
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
                    className="relative"
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
                  <div className="relative font-display text-xl font-semibold [writing-mode:vertical-rl]">
                    {p.name}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: editorial list — hairline rules, no boxes */}
        <div className="mt-12 lg:hidden">
          {panels.map((p) => (
            <Link
              key={p.slug}
              href={`/services/${p.slug}`}
              className="group flex items-start gap-4 border-t border-hairline py-7 transition-colors last:border-b"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-mint text-primary transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                <Icon name={p.icon} className="h-5 w-5" />
              </span>
              <span className="flex-1">
                <h3 className="text-lg font-semibold tracking-[-0.01em] text-ink">
                  {p.name}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.short}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-white py-1.5 pl-2 pr-3.5 text-sm font-bold text-ink shadow-card">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-primary font-display text-[11px] font-extrabold text-white">
                    ₹
                  </span>
                  From {p.priceFrom}
                </span>
              </span>
              <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-ink" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
