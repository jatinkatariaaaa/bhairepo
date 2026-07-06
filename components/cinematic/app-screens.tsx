import * as React from "react";
import {
  ArrowUpRight,
  BadgeCheck,
  Bell,
  Check,
  FileText,
  Landmark,
  Percent,
  Receipt,
  Wallet,
} from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Three miniature TrustTax app screens — pure markup, tuned to read well at
 * ~260–320px screen widths. Used inside <PhoneMockup> throughout the home.
 */

function StatusBar({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className={cn(
        "flex items-center justify-between px-5 pt-2 text-[10px] font-semibold",
        dark ? "text-white/80" : "text-ink/80",
      )}
    >
      <span className="font-mono">9:41</span>
      <span className="flex items-center gap-1">
        <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
        <span className="h-1.5 w-1.5 rounded-full bg-current opacity-50" />
        <span className="h-1.5 w-2.5 rounded-[2px] bg-current opacity-70" />
      </span>
    </div>
  );
}

function StatusPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-mint px-2 py-0.5 text-[9px] font-semibold text-primary">
      <Check className="h-2.5 w-2.5" strokeWidth={3} />
      {children}
    </span>
  );
}

/* ------------------------------ Dashboard ------------------------------ */
export function DashboardScreen() {
  return (
    <div className="flex h-full w-full flex-col bg-[#FBFCFB]">
      <StatusBar />
      <div className="flex items-center justify-between px-5 pb-3 pt-4">
        <div>
          <div className="text-[10px] text-muted">Good morning</div>
          <div className="text-[15px] font-semibold text-ink">Aarav Mehta</div>
        </div>
        <div className="relative grid h-9 w-9 place-items-center rounded-full bg-primary text-[11px] font-bold text-white">
          AM
          <span className="absolute -right-0.5 -top-0.5 grid h-3.5 w-3.5 place-items-center rounded-full bg-gold text-[7px] text-white">
            <Bell className="h-2 w-2" />
          </span>
        </div>
      </div>

      {/* refund hero card */}
      <div className="mx-4 rounded-2xl bg-primary p-4 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-widest text-white/70">
            Refund credited
          </span>
          <Wallet className="h-4 w-4 text-white/70" />
        </div>
        <div className="mt-1 font-mono text-[26px] font-bold leading-none">
          ₹48,200
        </div>
        <div className="mt-2 flex items-center gap-1 text-[10px] text-accent">
          <ArrowUpRight className="h-3 w-3" />
          <span>+12% vs last year</span>
        </div>
        <div className="mt-3 flex h-8 items-end gap-1">
          {[40, 62, 48, 80, 58, 96, 72].map((h, i) => (
            <span
              key={i}
              className="flex-1 rounded-sm bg-white/25"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>

      {/* quick actions */}
      <div className="mt-4 grid grid-cols-3 gap-2 px-4">
        {[
          { icon: FileText, label: "GST" },
          { icon: Landmark, label: "ITR" },
          { icon: Percent, label: "TDS" },
        ].map(({ icon: I, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-1 rounded-xl border border-hairline bg-white py-2.5"
          >
            <I className="h-4 w-4 text-primary" strokeWidth={1.75} />
            <span className="text-[9px] font-medium text-body">{label}</span>
          </div>
        ))}
      </div>

      {/* recent filings */}
      <div className="mt-4 px-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[11px] font-semibold text-ink">
            Recent filings
          </span>
          <span className="text-[9px] text-muted">See all</span>
        </div>
        <div className="space-y-2">
          {[
            { name: "GSTR-3B · June", date: "11 Jul", ok: "Filed" },
            { name: "TDS 26Q · Q1", date: "07 Jul", ok: "On time" },
          ].map((r) => (
            <div
              key={r.name}
              className="flex items-center gap-3 rounded-xl border border-hairline bg-white p-2.5"
            >
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-mint text-primary">
                <Receipt className="h-4 w-4" strokeWidth={1.75} />
              </span>
              <div className="flex-1">
                <div className="text-[11px] font-medium text-ink">{r.name}</div>
                <div className="text-[9px] text-muted">{r.date}</div>
              </div>
              <StatusPill>{r.ok}</StatusPill>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto flex items-center justify-around border-t border-hairline bg-white/90 px-6 py-3">
        {[true, false, false, false].map((active, i) => (
          <span
            key={i}
            className={cn(
              "h-1.5 w-1.5 rounded-full",
              active ? "w-4 bg-primary" : "bg-hairline",
            )}
          />
        ))}
      </div>
    </div>
  );
}

/* --------------------------------- GST --------------------------------- */
export function GstScreen() {
  return (
    <div className="flex h-full w-full flex-col bg-[#FBFCFB]">
      <StatusBar />
      <div className="px-5 pb-2 pt-4">
        <div className="text-[10px] text-muted">GST Returns</div>
        <div className="text-[15px] font-semibold text-ink">June 2025</div>
      </div>

      <div className="mx-4 flex items-center gap-3 rounded-2xl bg-obsidian p-4 text-cream">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-accent/20 text-accent">
          <BadgeCheck className="h-6 w-6" />
        </span>
        <div>
          <div className="text-[13px] font-semibold">All returns filed</div>
          <div className="font-mono text-[9px] tracking-wider text-cream/60">
            GSTIN · 29ABCDE1234F1Z5
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-2 px-4">
        {[
          { name: "GSTR-1", sub: "Outward supplies", ok: "Filed" },
          { name: "GSTR-3B", sub: "Summary return", ok: "Filed" },
          { name: "GSTR-2B", sub: "ITC reconciled", ok: "Matched" },
        ].map((r) => (
          <div
            key={r.name}
            className="flex items-center gap-3 rounded-xl border border-hairline bg-white p-3"
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-mint text-primary">
              <FileText className="h-4 w-4" strokeWidth={1.75} />
            </span>
            <div className="flex-1">
              <div className="font-mono text-[11px] font-semibold text-ink">
                {r.name}
              </div>
              <div className="text-[9px] text-muted">{r.sub}</div>
            </div>
            <StatusPill>{r.ok}</StatusPill>
          </div>
        ))}
      </div>

      {/* ITC card */}
      <div className="mx-4 mt-4 rounded-2xl border border-hairline bg-white p-4">
        <div className="text-[10px] uppercase tracking-widest text-muted">
          Input tax credit claimed
        </div>
        <div className="mt-1 font-mono text-[22px] font-bold text-primary">
          ₹1,24,900
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-mint">
          <div className="h-full w-[82%] rounded-full bg-accent" />
        </div>
      </div>

      <div className="relative mt-auto px-4 pb-4 pt-3">
        <span className="absolute right-6 top-0 -rotate-12 rounded-md border-2 border-primary/70 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest text-primary/80">
          Filed
        </span>
      </div>
    </div>
  );
}

/* --------------------------------- ITR --------------------------------- */
export function ItrScreen() {
  return (
    <div className="flex h-full w-full flex-col bg-[#FBFCFB]">
      <StatusBar />
      <div className="px-5 pb-2 pt-4">
        <div className="text-[10px] text-muted">Income Tax · AY 2025-26</div>
        <div className="text-[15px] font-semibold text-ink">Your return</div>
      </div>

      <div className="mx-4 rounded-2xl border border-hairline bg-white p-4">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-muted">
          Refund processing
          <span className="inline-flex items-center gap-1 rounded-full bg-mint px-2 py-0.5 text-[9px] font-semibold text-primary">
            <BadgeCheck className="h-2.5 w-2.5" /> e-Verified
          </span>
        </div>
        <div className="mt-1 font-mono text-[26px] font-bold text-ink">
          ₹22,140
        </div>
        <div className="mt-3 flex items-center gap-2">
          {["Filed", "Verified", "Refund"].map((s, i) => (
            <React.Fragment key={s}>
              <div className="flex flex-col items-center gap-1">
                <span
                  className={cn(
                    "grid h-5 w-5 place-items-center rounded-full text-[8px] text-white",
                    i < 2 ? "bg-primary" : "bg-hairline text-muted",
                  )}
                >
                  {i < 2 ? <Check className="h-3 w-3" strokeWidth={3} /> : "3"}
                </span>
                <span className="text-[8px] text-muted">{s}</span>
              </div>
              {i < 2 && <span className="mb-3 h-px flex-1 bg-primary/40" />}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* income summary */}
      <div className="mx-4 mt-4 rounded-2xl border border-hairline bg-white p-4">
        <div className="mb-2 text-[10px] uppercase tracking-widest text-muted">
          Income summary
        </div>
        {[
          { label: "Salary", w: "88%" },
          { label: "Capital gains", w: "34%" },
          { label: "Other sources", w: "18%" },
        ].map((r) => (
          <div key={r.label} className="mb-2 last:mb-0">
            <div className="mb-1 flex justify-between text-[9px] text-body">
              <span>{r.label}</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-mint">
              <div
                className="h-full rounded-full bg-primary"
                style={{ width: r.w }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* deductions */}
      <div className="mt-4 px-4">
        <div className="mb-2 text-[10px] uppercase tracking-widest text-muted">
          Deductions claimed
        </div>
        <div className="flex flex-wrap gap-2">
          {[
            { k: "80C", v: "₹1,50,000" },
            { k: "80D", v: "₹25,000" },
            { k: "HRA", v: "₹96,000" },
          ].map((d) => (
            <span
              key={d.k}
              className="rounded-lg border border-hairline bg-white px-2.5 py-1.5 text-[9px]"
            >
              <span className="font-mono font-bold text-primary">{d.k}</span>{" "}
              <span className="text-body">{d.v}</span>
            </span>
          ))}
        </div>
      </div>
      <div className="mt-auto" />
    </div>
  );
}
