import { cn } from "@/lib/utils";

/** Mono overline used to open every section — "( 02 ) — WHY TRUSTTAX". */
export function SectionLabel({
  index,
  children,
  tone = "light",
  className,
}: {
  index?: string;
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div
      className={cn(
        "flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.24em]",
        dark ? "text-cream/60" : "text-muted",
        className,
      )}
    >
      <span className="h-2 w-2 rounded-full bg-gold" />
      {index && (
        <span className="text-gold">({index})</span>
      )}
      <span>{children}</span>
    </div>
  );
}
