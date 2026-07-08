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
 * TrusTax logo — a minimal uppercase wordmark set in the display face,
 * matching the hero's "TAXES, DONE" headline. No mark, no image assets.
 */
export function Logo({ className, markOnly: _markOnly = false, invert = false }: LogoProps) {
  return (
    <span
      className={cn(
        "font-display text-xl font-extrabold uppercase leading-none tracking-[-0.04em]",
        invert ? "text-white" : "text-ink",
        className,
      )}
    >
      TrusTax
    </span>
  );
}
