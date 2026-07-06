import * as React from "react";

import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  /** Hide the "TrusTax" wordmark and show only the mark. */
  markOnly?: boolean;
  /** Render the wordmark in white (for dark backgrounds). */
  invert?: boolean;
};

/**
 * TrusTax logo — an emerald rounded-square mark with a trust checkmark,
 * paired with the wordmark. Pure SVG, no image assets.
 */
export function Logo({ className, markOnly = false, invert = false }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect width="34" height="34" rx="9.5" fill="url(#trustax-mark)" />
        <path
          d="M10 17.5L15 22.5L24.5 12"
          stroke="white"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="trustax-mark"
            x1="4"
            y1="3"
            x2="30"
            y2="31"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#10B981" />
            <stop offset="1" stopColor="#0E5C43" />
          </linearGradient>
        </defs>
      </svg>
      {!markOnly && (
        <span
          className={cn(
            "font-display text-xl font-bold tracking-tight",
            invert ? "text-white" : "text-ink",
          )}
        >
          Trus<span className="text-accent">Tax</span>
        </span>
      )}
    </span>
  );
}
