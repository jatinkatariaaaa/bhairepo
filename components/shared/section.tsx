import * as React from "react";

import { cn } from "@/lib/utils";
import { Container } from "./container";

type SectionProps = {
  id?: string;
  className?: string;
  containerClassName?: string;
  /** Wrap children in a Container. Set false for full-bleed layouts. */
  container?: boolean;
  children: React.ReactNode;
};

/**
 * Consistent vertical rhythm: 72px padding on mobile, 128px on desktop.
 * (Matches the design-system spec.)
 */
export function Section({
  id,
  className,
  containerClassName,
  container = true,
  children,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-section-sm md:py-section", className)}>
      {container ? (
        <Container className={containerClassName}>{children}</Container>
      ) : (
        children
      )}
    </section>
  );
}
