import * as React from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  overline?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  /** Heading level for correct document outline. Defaults to h2. */
  as?: "h1" | "h2" | "h3";
};

/**
 * Overline (eyebrow chip) + title + optional subtext, with left/center
 * alignment. Title accepts rich nodes so you can style an accent word.
 */
export function SectionHeading({
  overline,
  title,
  subtitle,
  align = "left",
  className,
  as: Heading = "h2",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {overline && (
        <span className="inline-flex w-fit items-center gap-2 rounded-pill border border-hairline bg-white px-3 py-1 text-overline font-semibold uppercase text-primary shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          {overline}
        </span>
      )}
      <Heading
        className={cn(
          "text-balance font-display font-semibold text-ink",
          Heading === "h3"
            ? "text-h3"
            : "text-h2-sm md:text-h2",
        )}
      >
        {title}
      </Heading>
      {subtitle && (
        <p
          className={cn(
            "text-pretty text-body-lg text-body",
            align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
