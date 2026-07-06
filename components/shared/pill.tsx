import * as React from "react";

import { cn } from "@/lib/utils";

const toneStyles = {
  mint: "border-transparent bg-mint text-primary",
  outline: "border-hairline bg-white text-body",
  solid: "border-transparent bg-primary text-white",
  ghost: "border-white/15 bg-white/10 text-white backdrop-blur-sm",
} as const;

type PillProps = {
  children: React.ReactNode;
  className?: string;
  tone?: keyof typeof toneStyles;
  /** Show a small emerald status dot before the label. */
  dot?: boolean;
};

/**
 * Small rounded label — used for eyebrows, badges and trust chips.
 * Also exported as `Badge` for convenience.
 */
export function Pill({ children, className, tone = "mint", dot = false }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-pill border px-3 py-1 text-xs font-medium",
        toneStyles[tone],
        className,
      )}
    >
      {dot && (
        <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
      )}
      {children}
    </span>
  );
}

export { Pill as Badge };
