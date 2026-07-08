import type { IconName } from "@/components/shared/icon";

/**
 * Home-page content blocks — trust badges, value props, process, stats,
 * testimonials and FAQs. All copy and numbers here are PLACEHOLDERS you can
 * safely edit. (Individual service content lives in lib/services.ts.)
 */

export type TrustBadge = { label: string; icon: IconName };

export const trustBadges: TrustBadge[] = [
  { label: "Government-registered", icon: "Landmark" },
  { label: "CA-certified experts", icon: "BadgeCheck" },
  { label: "Data-secure", icon: "Lock" },
  { label: "100% online", icon: "Globe" },
  { label: "On-time filing", icon: "Clock" },
];

export type ValueProp = {
  title: string;
  description: string;
  icon: IconName;
};

export const values: ValueProp[] = [
  {
    title: "Transparent pricing",
    description:
      "Clear, upfront fees with no hidden charges. You know exactly what you pay before we start.",
    icon: "IndianRupee",
  },
  {
    title: "Certified CA experts",
    description:
      "Your filings are handled by qualified Chartered Accountants — accurate, compliant and reliable.",
    icon: "ShieldCheck",
  },
  {
    title: "End-to-end compliance",
    description:
      "From registration to returns and renewals, we manage the full lifecycle so nothing slips.",
    icon: "ClipboardCheck",
  },
  {
    title: "100% online & fast",
    description:
      "Share documents from anywhere and track progress. No office visits, no paperwork chaos.",
    icon: "Zap",
  },
];

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
  icon: IconName;
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Consult",
    description:
      "Book a free consultation. We understand your needs and recommend exactly what you require.",
    icon: "MessagesSquare",
  },
  {
    step: "02",
    title: "Documents",
    description:
      "Share your documents securely online. We tell you precisely what's needed — nothing extra.",
    icon: "FolderCheck",
  },
  {
    step: "03",
    title: "Filing",
    description:
      "Our CAs prepare and file accurately, then send you confirmation and acknowledgements.",
    icon: "Send",
  },
  {
    step: "04",
    title: "Compliance & support",
    description:
      "We track due dates, send reminders and stay on call for anything you need year-round.",
    icon: "LifeBuoy",
  },
];

export type Stat = {
  value: string;
  label: string;
  /** Suffix rendered in the accent colour, e.g. "+" */
  suffix?: string;
};

// PLACEHOLDER stats — replace with your real numbers
export const stats: Stat[] = [
  { value: "500", suffix: "+", label: "Clients served" },
  { value: "12,000", suffix: "+", label: "Returns filed" },
  { value: "40", suffix: "+", label: "Cities covered" },
  { value: "10", suffix: "+", label: "Years of experience" },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  /** Initials shown in the avatar */
  initials: string;
};

// PLACEHOLDER testimonials — replace with real, consented client quotes
export const testimonials: Testimonial[] = [
  {
    quote:
      "TrusTax took our GST and bookkeeping completely off our plate. Returns are always filed on time and the monthly reports are genuinely useful.",
    name: "Ananya Sharma",
    role: "Founder, Maya Foods",
    initials: "AS",
  },
  {
    quote:
      "I switched to TrusTax after a messy notice from the department. They sorted it out, filed my pending returns and now I never worry about deadlines.",
    name: "Rahul Verma",
    role: "Freelance Consultant",
    initials: "RV",
  },
  {
    quote:
      "Transparent pricing and quick responses. They set up my company, GST and MSME registration end to end — all online, all painless.",
    name: "Priya Nair",
    role: "Director, Nova Retail",
    initials: "PN",
  },
  {
    quote:
      "Within a week they found deductions my old accountant had missed for years. My refund nearly doubled — and the process was completely online.",
    name: "Karan Mehta",
    role: "Product Manager, Bengaluru",
    initials: "KM",
  },
  {
    quote:
      "As a first-time founder I had no idea about ROC filings or advance tax. TrusTax handles all of it and just pings me when something needs a signature.",
    name: "Sneha Iyer",
    role: "Co-founder, Loop Studio",
    initials: "SI",
  },
];

export type HomeFaq = { question: string; answer: string };

export const homeFaqs: HomeFaq[] = [
  {
    question: "How do I get started with TrusTax?",
    answer:
      "Book a free consultation by phone, WhatsApp or the contact form. We'll understand your needs, recommend the right service and share transparent pricing — no obligation.",
  },
  {
    question: "Is everything really handled online?",
    answer:
      "Yes. You can share documents and track progress entirely online, from anywhere in India. We only ask for a physical visit if a specific process genuinely requires it.",
  },
  {
    question: "Are your services handled by qualified CAs?",
    answer:
      "Your filings are prepared and reviewed by certified Chartered Accountants and experienced compliance professionals, so accuracy and compliance are assured.",
  },
  {
    question: "How is your pricing structured?",
    answer:
      "We use clear, upfront pricing based on the service and scope. You'll always know the fee before we begin — no hidden charges or surprises.",
  },
  {
    question: "Is my financial data safe with you?",
    answer:
      "Absolutely. We use secure, access-controlled systems, share documents over encrypted channels and sign confidentiality terms with every client.",
  },
  {
    question: "Do you work with businesses in my city?",
    answer:
      "Yes. Because we operate online, we serve individuals and businesses across 40+ cities in India — from metros to smaller towns.",
  },
  {
    question: "What if I miss a filing deadline?",
    answer:
      "We proactively track your due dates and send reminders. If you're already behind, we help you file pending returns and minimise penalties.",
  },
  {
    question: "Can you handle all my compliance in one place?",
    answer:
      "Yes — GST, income tax, TDS, bookkeeping, licenses and registrations can all be managed by one team, giving you a single point of contact for everything.",
  },
];
