"use client";

import * as React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/logo";
import { MobileMenu } from "./mobile-menu";

/**
 * EventBeds-style navbar: one full-width rounded bar on the page background,
 * logo on the left, and only two actions on the right — a solid dark CTA pill
 * and a neutral "Menu" pill that opens the sheet on every screen size.
 */
export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 px-4 pt-4 md:px-6 md:pt-6">
      <div className="flex h-16 items-center justify-between rounded-2xl bg-white/70 px-4 backdrop-blur-md md:h-[76px] md:px-6">
        <Link
          href="/"
          aria-label="TrusTax — home"
          className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
        >
          <Logo />
        </Link>

        <div className="flex items-center gap-2.5">
          <Button
            asChild
            className="hidden h-11 rounded-xl bg-ink px-5 text-sm font-semibold text-white hover:bg-ink/85 sm:inline-flex"
          >
            <Link href="/contact#book">Book Free Consultation</Link>
          </Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
