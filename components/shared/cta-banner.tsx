import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DEFAULT_WHATSAPP_MESSAGE, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

type CtaBannerProps = {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
};

/**
 * Emerald callout used to close service pages and other sections.
 * Soft radial "orbs" add depth without any image assets.
 */
export function CtaBanner({
  title = "Book your free consultation",
  subtitle = "Tell us what you need and we'll recommend the right service with clear, upfront pricing — no obligation.",
  className,
}: CtaBannerProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-card bg-primary px-6 py-14 text-center shadow-lift md:px-12 md:py-16",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orb opacity-60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-orb opacity-40"
      />
      <div className="relative mx-auto max-w-2xl">
        <h2 className="text-balance font-display text-h2-sm font-semibold text-white md:text-h2">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-body-lg text-white/80">
          {subtitle}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild variant="white" size="lg">
            <Link href="/contact#book">Book free consultation</Link>
          </Button>
          <Button asChild variant="outlineWhite" size="lg">
            <a
              href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={1.75} />
              WhatsApp us
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
