"use client";

import * as React from "react";
import { CheckCircle2, Loader2, MessageCircle, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { services } from "@/lib/services";
import {
  DEFAULT_WHATSAPP_MESSAGE,
  site,
  whatsappLink,
} from "@/lib/site";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

/**
 * Contact form — Name, Email, Phone, Service and Message.
 * Posts to /api/contact and shows inline success / error states.
 * Pass `defaultService` (a service slug) to prefill the dropdown.
 */
export function ContactForm({
  defaultService,
  className,
}: {
  defaultService?: string;
  className?: string;
}) {
  const [service, setService] = React.useState<string>(defaultService ?? "");
  const [status, setStatus] = React.useState<Status>("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formEl = event.currentTarget;
    const data = new FormData(formEl);

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(data.get("name") ?? ""),
          email: String(data.get("email") ?? ""),
          phone: String(data.get("phone") ?? ""),
          service,
          message: String(data.get("message") ?? ""),
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      formEl.reset();
      setService(defaultService ?? "");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className={cn(
          "flex flex-col items-center rounded-card border border-hairline bg-white p-8 text-center shadow-card",
          className,
        )}
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-mint text-primary">
          <CheckCircle2 className="h-7 w-7" strokeWidth={1.75} />
        </span>
        <h3 className="mt-4 text-h4 font-display font-semibold text-ink">
          Thanks — we&rsquo;ve got your details
        </h3>
        <p className="mt-2 max-w-sm text-body">
          Our team will get back to you within one business day. Need something
          urgent?
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <Button asChild variant="secondary" size="sm">
            <a href={site.phoneHref}>
              <Phone className="h-4 w-4" strokeWidth={1.75} /> Call us
            </a>
          </Button>
          <Button asChild variant="secondary" size="sm">
            <a
              href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.75} /> WhatsApp
            </a>
          </Button>
        </div>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="link-underline mt-5 text-sm font-medium text-primary"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={cn("space-y-5", className)}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">
            Full name <span className="text-error">*</span>
          </Label>
          <Input id="name" name="name" placeholder="Your name" required autoComplete="name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">
            Email <span className="text-error">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
            autoComplete="email"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+91 98765 43210"
            autoComplete="tel"
            inputMode="tel"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="service">Service</Label>
          <Select value={service} onValueChange={setService}>
            <SelectTrigger id="service" aria-label="Select a service">
              <SelectValue placeholder="Choose a service" />
            </SelectTrigger>
            <SelectContent>
              {services.map((s) => (
                <SelectItem key={s.slug} value={s.slug}>
                  {s.name}
                </SelectItem>
              ))}
              <SelectItem value="general">Not sure / General enquiry</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">
          Message <span className="text-error">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us briefly what you need help with…"
          required
        />
      </div>

      <div aria-live="polite">
        {status === "error" && (
          <p className="rounded-input border border-error/20 bg-error/5 px-4 py-3 text-sm text-error">
            Something went wrong. Please try again, or reach us on WhatsApp or
            phone.
          </p>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" /> Sending…
          </>
        ) : (
          "Send message"
        )}
      </Button>

      <p className="text-xs text-muted">
        By submitting, you agree to be contacted about your enquiry. We respect
        your privacy and never share your details.
      </p>
    </form>
  );
}
