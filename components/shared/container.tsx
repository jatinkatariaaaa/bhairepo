import * as React from "react";

import { cn } from "@/lib/utils";

/** Centered page container — 1200px max width with 24px gutters. */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-container px-6", className)}>
      {children}
    </div>
  );
}
