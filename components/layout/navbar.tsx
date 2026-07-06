"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

import { mainNav, site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./mobile-menu";

const DATE_FORMAT = new Intl.DateTimeFormat("en-IN", {
  day: "numeric",
  month: "long",
});

/**
 * Swiss Ledger header — two rule-divided rows like an editorial masthead.
 * Row 1: wordmark + tax-season date. Row 2: primary nav + contact.
 */
export function Navbar() {
  const pathname = usePathname();
  const today = DATE_FORMAT.format(new Date());

  return (
    <header className="relative z-50 border-b border-hairline bg-canvas">
      {/* Row 1 — masthead */}
      <div className="border-b border-hairline">
        <div className="container-wide flex h-12 items-center justify-between md:h-14">
          <Link
            href="/"
            aria-label="TrusTax — home"
            className="font-display text-sm font-extrabold uppercase tracking-[0.02em] text-ink"
          >
            TrusTax <span aria-hidden="true">®</span>
          </Link>
          <div className="flex items-center gap-6">
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-muted sm:inline">
              Tax season 2026
            </span>
            <span className="font-display text-xs font-bold uppercase tracking-[0.04em] text-ink">
              {today}
            </span>
          </div>
        </div>
      </div>

      {/* Row 2 — primary nav */}
      <div className="container-wide flex h-11 items-center justify-between md:h-12">
        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {mainNav.map((item, i) => {
            const active =
              pathname === item.href || pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "text-[11px] font-bold uppercase tracking-[0.14em] transition-colors",
                  active || i === 0
                    ? "text-ink"
                    : "text-muted hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="md:hidden">
          <MobileMenu />
        </div>

        <a
          href={site.phoneHref}
          className="group inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.14em] text-muted transition-colors hover:text-ink"
        >
          Call us
          <ArrowUpRight
            className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            strokeWidth={2}
          />
        </a>
      </div>
    </header>
  );
}
