import type { ProcessStep as ProcessStepData } from "@/lib/content";
import { Icon } from "./icon";

/**
 * A single step in the process timeline — numbered badge, icon, title, copy.
 * The connecting line is drawn by the parent Process section.
 */
export function ProcessStep({ step, title, description, icon }: ProcessStepData) {
  return (
    <div className="relative flex flex-col items-start">
      <div className="relative z-10 mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-hairline bg-white shadow-soft">
        <Icon name={icon} className="h-6 w-6 text-primary" />
        <span className="tnum absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[11px] font-semibold text-white">
          {step}
        </span>
      </div>
      <h3 className="text-h4 font-display font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-body">{description}</p>
    </div>
  );
}
