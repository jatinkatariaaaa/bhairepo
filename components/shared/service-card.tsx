import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { Service } from "@/lib/services";
import { cn } from "@/lib/utils";
import { Icon } from "./icon";

/**
 * Service card — icon, name, one-line description and a "Learn more" link.
 * The whole card is a link to the service detail page.
 */
export function ServiceCard({
  service,
  className,
}: {
  service: Service;
  className?: string;
}) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        "group flex h-full flex-col rounded-card border border-hairline bg-white p-6 shadow-card transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
        className,
      )}
    >
      <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-mint text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
        <Icon name={service.icon} className="h-6 w-6" />
      </span>
      <h3 className="text-h4 font-display font-semibold text-ink">
        {service.name}
      </h3>
      <p className="mt-2 flex-1 text-[15px] leading-relaxed text-body">
        {service.short}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-premium group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
