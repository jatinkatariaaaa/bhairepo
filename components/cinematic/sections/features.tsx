"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Pin } from "lucide-react";

import { PhoneMockup } from "@/components/cinematic/phone";
import { EASE, viewportOnce } from "@/components/cinematic/lib/motion";
import { values } from "@/lib/content";

export function Features() {
  const left = values.slice(0, 2);
  const right = values.slice(2, 4);

  return (
    <section className="section-y relative overflow-hidden bg-canvas">
      <div className="container-page">
        {/* Massive centered headline — EventBeds editorial header */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.9, ease: EASE }}
          className="mx-auto max-w-4xl text-center font-display text-[clamp(2.4rem,6vw,4.8rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-ink text-balance"
        >
          India&apos;s calmest way to stay compliant
        </motion.h2>

        {/* Editorial triptych — left rail, center phone, right rail */}
        <div className="mt-16 grid items-start gap-14 md:mt-24 lg:grid-cols-[1fr_auto_1fr] lg:gap-10">
          {/* ---------- Left rail ---------- */}
          <div className="order-2 flex flex-col lg:order-1 lg:pt-10">
            {left.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.8, ease: EASE, delay: i * 0.12 }}
              >
                <h3 className="max-w-xs text-xl font-semibold leading-snug tracking-[-0.01em] text-ink">
                  {v.title}
                </h3>
                <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-muted">
                  {v.description}
                </p>
                {/* Thin hairline divider — fades out to the right */}
                <div className="mb-10 mt-10 h-px w-full bg-gradient-to-r from-hairline to-transparent" />
              </motion.div>
            ))}

            {/* Floating map tile with price pill — EventBeds £89 moment */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
              className="relative w-fit"
            >
              <div className="relative h-44 w-56 overflow-hidden rounded-[24px] shadow-card md:h-52 md:w-64">
                <Image
                  src="/images/tiles/map-radius.png"
                  alt="CA support available across 40+ Indian cities"
                  fill
                  sizes="256px"
                  className="object-cover"
                />
              </div>
              {/* Price pill overlapping the tile edge */}
              <div className="absolute -right-8 top-1/3 flex items-center gap-2 rounded-full bg-white py-2 pl-2 pr-4 shadow-lift">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-primary">
                  <span className="font-display text-[13px] font-extrabold text-white">
                    ₹
                  </span>
                </span>
                <span className="font-display text-lg font-extrabold tracking-tight text-ink">
                  ₹999
                </span>
              </div>
              {/* Second floating tile — office building, overlapping bottom-right */}
              <div className="absolute -bottom-14 -right-16 hidden h-32 w-32 overflow-hidden rounded-[20px] shadow-lift md:block">
                <Image
                  src="/images/tiles/office-building.png"
                  alt=""
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* ---------- Center phone ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 1.1, ease: EASE, delay: 0.1 }}
            className="order-1 mx-auto w-[260px] md:w-[300px] lg:order-2"
          >
            <PhoneMockup className="shadow-phone" island={false}>
              <Image
                src="/images/screens/dashboard-main.png"
                alt="TrustTax compliance dashboard"
                fill
                sizes="300px"
                className="object-cover"
              />
            </PhoneMockup>
          </motion.div>

          {/* ---------- Right rail ---------- */}
          <div className="order-3 flex flex-col lg:pt-6">
            {/* Floating photo tile with pin badge — EventBeds building moment */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
              className="relative mb-12 w-fit self-end"
            >
              <div className="relative h-40 w-52 overflow-hidden rounded-[24px] shadow-card md:h-44 md:w-60">
                <Image
                  src="/images/tiles/office-building.png"
                  alt="Businesses registered and managed by TrustTax"
                  fill
                  sizes="240px"
                  className="object-cover"
                />
              </div>
              <div className="absolute -right-5 -top-5 grid h-14 w-14 place-items-center rounded-2xl bg-white shadow-lift">
                <Pin className="h-6 w-6 text-ink" strokeWidth={2.2} />
              </div>
            </motion.div>

            {right.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.8, ease: EASE, delay: 0.2 + i * 0.12 }}
              >
                <h3 className="max-w-xs text-xl font-semibold leading-snug tracking-[-0.01em] text-ink">
                  {v.title}
                </h3>
                <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-muted">
                  {v.description}
                </p>
                {i < right.length - 1 && (
                  <div className="mb-10 mt-10 h-px w-full bg-gradient-to-l from-hairline to-transparent" />
                )}
              </motion.div>
            ))}

            {/* Giant stat — EventBeds "1M properties" moment */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.9, ease: EASE, delay: 0.35 }}
              className="mt-12"
            >
              <span className="block text-sm text-muted">over</span>
              <span className="block font-display text-[clamp(4.5rem,8vw,7rem)] font-extrabold leading-[0.95] tracking-[-0.04em] text-ink">
                12K
              </span>
              <span className="mt-1 block text-right text-sm text-muted md:pr-8">
                returns filed
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
