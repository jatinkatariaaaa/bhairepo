import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Seamless infinite marquee. Renders two identical tracks inside a `w-max`
 * flex and translates it -50% — so the loop is perfectly continuous. Pure CSS
 * (GPU transform), pauses on hover, edges masked with `.mask-fade-x`.
 */
export function Marquee({
  children,
  reverse = false,
  className,
  pauseOnHover = true,
}: {
  children: React.ReactNode;
  reverse?: boolean;
  className?: string;
  pauseOnHover?: boolean;
}) {
  return (
    <div className={cn("mask-fade-x group overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max will-change-transform",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
        )}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
