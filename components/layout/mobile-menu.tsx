"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Menu, MessageCircle, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/shared/logo";
import {
  DEFAULT_WHATSAPP_MESSAGE,
  mainNav,
  site,
  whatsappLink,
} from "@/lib/site";
import { cn } from "@/lib/utils";

/** Slide-in mobile navigation (Sheet). Closes on link tap. */
export function MobileMenu() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label="Open menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-button border border-hairline bg-white text-ink shadow-sm transition-colors hover:bg-mint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
        >
          <Menu className="h-5 w-5" />
        </button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <Logo />
        </SheetHeader>

        <nav aria-label="Mobile" className="mt-10 flex flex-col">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className={cn(
              "border-b border-hairline py-3.5 text-lg font-medium transition-colors",
              pathname === "/" ? "text-primary" : "text-ink hover:text-primary",
            )}
          >
            Home
          </Link>
          {mainNav.map((item) => {
            const active =
              pathname === item.href || pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "border-b border-hairline py-3.5 text-lg font-medium transition-colors",
                  active ? "text-primary" : "text-ink hover:text-primary",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto space-y-3 border-t border-hairline pt-6">
          <Button asChild size="lg" className="w-full" onClick={() => setOpen(false)}>
            <Link href="/contact#book">Book Free Consultation</Link>
          </Button>
          <div className="grid grid-cols-2 gap-3">
            <Button asChild variant="secondary">
              <a href={site.phoneHref}>
                <Phone className="h-4 w-4" strokeWidth={1.75} /> Call
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a
                href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.75} /> WhatsApp
              </a>
            </Button>
          </div>
          <a
            href={`mailto:${site.email}`}
            className="flex items-center justify-center gap-2 pt-1 text-sm text-muted transition-colors hover:text-primary"
          >
            <Mail className="h-4 w-4" strokeWidth={1.75} />
            {site.email}
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
