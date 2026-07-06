import { Icon, type IconName } from "@/components/shared/icon";
import { cn } from "@/lib/utils";

/**
 * Floating "proof tag" — TrustTax's answer to EventBeds' price badges.
 * A glass chip stating a compliance fact (e.g. "GSTR-3B · Filed").
 */
export function ProofTag({
  icon,
  label,
  value,
  tone = "light",
  className,
}: {
  icon: IconName;
  label: string;
  value: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-pill px-4 py-2.5",
        dark ? "glass-dark text-cream" : "glass text-ink",
        className,
      )}
    >
      <span
        className={cn(
          "grid h-8 w-8 shrink-0 place-items-center rounded-full",
          dark ? "bg-accent/20 text-accent" : "bg-mint text-primary",
        )}
      >
        <Icon name={icon} className="h-4 w-4" />
      </span>
      <div className="leading-tight">
        <div className="font-mono text-[10px] uppercase tracking-[0.14em] opacity-60">
          {label}
        </div>
        <div className="tnum text-sm font-semibold">{value}</div>
      </div>
    </div>
  );
}
