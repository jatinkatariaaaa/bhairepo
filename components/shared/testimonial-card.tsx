import { Star } from "lucide-react";

import type { Testimonial } from "@/lib/content";
import { cn } from "@/lib/utils";

/** Minimal quote card — star rating, quote, and an initials avatar. */
export function TestimonialCard({
  testimonial,
  className,
}: {
  testimonial: Testimonial;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "flex h-full flex-col rounded-card border border-hairline bg-white p-6 shadow-card md:p-7",
        className,
      )}
    >
      <div className="flex gap-0.5 text-gold" aria-label="Rated 5 out of 5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-body-lg leading-relaxed text-ink/90">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-hairline pt-5">
        <span
          className="flex h-11 w-11 items-center justify-center rounded-full bg-mint text-sm font-semibold text-primary"
          aria-hidden="true"
        >
          {testimonial.initials}
        </span>
        <span className="flex flex-col">
          <span className="text-sm font-semibold text-ink">{testimonial.name}</span>
          <span className="text-sm text-muted">{testimonial.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}
