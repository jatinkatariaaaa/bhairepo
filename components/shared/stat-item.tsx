import type { Stat } from "@/lib/content";
import { cn } from "@/lib/utils";

/** Single stat — large tabular mono figure with an emerald accent suffix. */
export function StatItem({
  stat,
  className,
}: {
  stat: Stat;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col", className)}>
      <span className="tnum font-mono text-h1-sm font-semibold tracking-tight text-ink md:text-h1">
        {stat.value}
        {stat.suffix && <span className="text-accent">{stat.suffix}</span>}
      </span>
      <span className="mt-2 text-sm text-body">{stat.label}</span>
    </div>
  );
}
