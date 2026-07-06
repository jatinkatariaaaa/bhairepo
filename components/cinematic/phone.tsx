import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Pure-CSS phone mockup — no images, crisp at any DPI, fixed aspect ratio so
 * it never causes layout shift. Children render inside the screen (inset-0).
 */
export function PhoneMockup({
  children,
  className,
  screenClassName,
  island = true,
  glare = true,
}: {
  children: React.ReactNode;
  className?: string;
  screenClassName?: string;
  island?: boolean;
  glare?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative rounded-[2.6rem] bg-gradient-to-b from-[#20302a] to-[#0a1410] p-[9px] shadow-phone ring-1 ring-black/30",
        className,
      )}
    >
      {/* physical side buttons */}
      <span className="absolute -left-[3px] top-28 h-14 w-[3px] rounded-l bg-black/40" />
      <span className="absolute -left-[3px] top-44 h-14 w-[3px] rounded-l bg-black/40" />
      <span className="absolute -right-[3px] top-36 h-20 w-[3px] rounded-r bg-black/40" />

      <div
        className={cn(
          "relative aspect-[9/19.3] w-full overflow-hidden rounded-[2.05rem] bg-white",
          screenClassName,
        )}
      >
        {island && (
          <div className="absolute left-1/2 top-[10px] z-30 h-[22px] w-16 -translate-x-1/2 rounded-full bg-black" />
        )}
        <div className="absolute inset-0">{children}</div>
        {glare && (
          <div className="pointer-events-none absolute inset-0 z-40 bg-gradient-to-tr from-transparent via-transparent to-white/20" />
        )}
      </div>
    </div>
  );
}
