"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { ProofTag } from "@/components/cinematic/proof-tag";
import { Icon } from "@/components/shared/icon";

const EASE = [0.16, 1, 0.3, 1] as const;
const viewportOnce = { once: true, margin: "-15%" } as const;

/**
 * Editorial showcase — EventBeds' "Brand discounts" / "Referral scheme"
 * pattern, translated for tax. Two alternating rows: massive headline on one
 * side, large rounded photo cards on the other with floating proof pills and
 * scattered institutional wordmarks.
 */
export function Showcase() {
  return (
    <section className="section-y overflow-hidden bg-canvas">
      {/* Row 1 — headline left, photo collage right */}
      <div className="container-page grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <h2 className="font-display text-[clamp(2.4rem,5.5vw,4.5rem)] font-extrabold leading-[1.02] tracking-[-0.03em] text-ink text-balance">
            Maximum refunds
          </h2>
          <p className="mt-6 max-w-xs text-body-lg leading-relaxed text-body">
            Every deduction found, every rupee claimed — our CAs dig deeper so
            you keep more.
          </p>
        </motion.div>

        {/* Collage */}
        <div className="relative min-h-[480px] md:min-h-[560px]">
          {/* Main tall photo card */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 1, ease: EASE }}
            className="relative mx-auto aspect-[4/5] w-[min(340px,78vw)] overflow-hidden rounded-[28px] shadow-lift md:w-[380px]"
          >
            <Image
              src="/images/photos/ca-desk.png"
              alt="A TrustTax chartered accountant reviewing tax documents"
              fill
              sizes="(max-width: 768px) 78vw, 380px"
              className="object-cover"
            />
          </motion.div>

          {/* Floating proof pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, ease: EASE, delay: 0.35 }}
            className="absolute right-[2%] top-[12%] md:right-[8%]"
          >
            <div className="animate-float-slow">
              <ProofTag icon="IndianRupee" label="Refund secured" value="₹48,200" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, ease: EASE, delay: 0.5 }}
            className="absolute bottom-[26%] left-[1%] md:left-[6%]"
          >
            <div className="animate-float-slower">
              <ProofTag icon="BadgeCheck" label="Deductions found" value="14" />
            </div>
          </motion.div>

          {/* Small overlapping photo card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 1, ease: EASE, delay: 0.25 }}
            className="absolute -bottom-6 right-0 hidden aspect-square w-[220px] overflow-hidden rounded-[24px] shadow-lift md:block lg:w-[250px]"
          >
            <Image
              src="/images/photos/refund-phone.png"
              alt="A business owner checking his tax refund on his phone"
              fill
              sizes="250px"
              className="object-cover"
            />
          </motion.div>

          {/* Scattered institutional wordmarks */}
          <Wordmark className="left-[2%] top-[6%] md:left-[8%]">ICAI</Wordmark>
          <Wordmark className="bottom-[4%] left-[18%] hidden md:block">
            GSTN
          </Wordmark>
          <Wordmark className="right-[2%] top-[4%] hidden lg:block">
            Income Tax e-Filing
          </Wordmark>
        </div>
      </div>

      {/* Row 2 — photo left, headline right (mirrored) */}
      <div className="container-page mt-28 grid items-center gap-14 md:mt-40 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
        <div className="relative order-2 min-h-[480px] md:min-h-[540px] lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 1, ease: EASE }}
            className="relative mx-auto aspect-[4/5] w-[min(360px,80vw)] overflow-hidden rounded-[28px] shadow-lift md:w-[420px]"
          >
            <Image
              src="/images/photos/team-consult.png"
              alt="A chartered accountant and founder reviewing finances together"
              fill
              sizes="(max-width: 768px) 80vw, 420px"
              className="object-cover"
            />
          </motion.div>

          {/* Dark label pill — top right, like EventBeds' "Share the love" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, ease: EASE, delay: 0.35 }}
            className="absolute right-[2%] top-[10%] md:right-[10%]"
          >
            <div className="animate-float-slow flex items-center gap-2.5 rounded-pill bg-primary px-5 py-3 text-white shadow-lift">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-white/15">
                <ProofPillIcon />
              </span>
              <span className="text-sm font-semibold">Dedicated CA, assigned to you</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, ease: EASE, delay: 0.5 }}
            className="absolute bottom-[10%] left-[1%] md:left-[8%]"
          >
            <div className="animate-float-slower">
              <ProofTag icon="Clock" label="Avg. response" value="Under 4 hrs" />
            </div>
          </motion.div>

          <Wordmark className="bottom-[2%] right-[4%] hidden md:block">
            MCA
          </Wordmark>
          <Wordmark className="left-[0%] top-[30%] hidden lg:block">
            CBDT
          </Wordmark>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.9, ease: EASE }}
          className="order-1 lg:order-2"
        >
          <h2 className="font-display text-[clamp(2.4rem,5.5vw,4.5rem)] font-extrabold leading-[1.02] tracking-[-0.03em] text-ink text-balance">
            A real CA, by your side
          </h2>
          <p className="mt-6 max-w-xs text-body-lg leading-relaxed text-body">
            Not a chatbot. A dedicated chartered accountant who knows your
            business and answers when it matters.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ProofPillIcon() {
  return <Icon name="Users" className="h-4 w-4" />;
}

/** Scattered gray institutional wordmark — EventBeds' Hilton/Marriott marks. */
function Wordmark({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewportOnce}
      transition={{ duration: 1.2, ease: EASE, delay: 0.6 }}
      className={`pointer-events-none absolute select-none font-display text-xl font-bold tracking-tight text-ink/25 md:text-2xl ${className ?? ""}`}
    >
      {children}
    </motion.span>
  );
}
