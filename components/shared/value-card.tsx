import type { ValueProp } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Icon } from "./icon";

/** "Why choose us" value proposition — icon, title, description. */
export function ValueCard({
  value,
  className,
}: {
  value: ValueProp;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-card border border-hairline bg-white p-6 shadow-card transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift",
        className,
      )}
    >
      <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-mint text-primary">
        <Icon name={value.icon} className="h-6 w-6" />
      </span>
      <h3 className="text-h4 font-display font-semibold text-ink">
        {value.title}
      </h3>
      <p className="mt-2 text-[15px] leading-relaxed text-body">
        {value.description}
      </p>
    </div>
  );
}
