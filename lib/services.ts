import type { IconName } from "@/components/shared/icon";

/**
 * SINGLE SOURCE OF TRUTH for all TrusTax services.
 *
 * Add, remove or edit a service here and it automatically flows into:
 *   - the Services grid on the home page
 *   - the /services overview page
 *   - each /services/[slug] detail page
 *   - the sitemap and the Contact form's service dropdown
 *
 * To edit copy, just change the strings below. To add a service, append a new
 * object with a unique `slug`. Icons come from components/shared/icon.tsx.
 */

export type ServiceStep = {
  title: string;
  description: string;
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  /** Full name, e.g. "GST Services" */
  name: string;
  /** Short eyebrow / category label */
  tagline: string;
  /** One-line description used on cards */
  short: string;
  /** Slightly longer promise used on the detail-page hero */
  promise: string;
  /** Icon key — must exist in components/shared/icon.tsx */
  icon: IconName;
  /** Indicative "from" price — PLACEHOLDER, replace with real pricing */
  priceFrom: string;
  /** What's included — bullet list on the detail page */
  included: string[];
  /** Who it's for */
  whoFor: string[];
  /** Simple 3-step process */
  process: ServiceStep[];
  /** Service-specific FAQs */
  faqs: ServiceFaq[];
};

export const services: Service[] = [
  {
    slug: "gst",
    name: "GST Services",
    tagline: "Registration & compliance",
    short:
      "GST registration, monthly & quarterly returns, reconciliation and advisory — stay penalty-free.",
    promise:
      "From registration to monthly returns, we keep your GST clean, on time and audit-ready.",
    icon: "FileText",
    priceFrom: "₹999", // PLACEHOLDER pricing
    included: [
      "New GST registration (GSTIN) with document assistance",
      "Monthly & quarterly returns — GSTR-1 and GSTR-3B",
      "Input tax credit (ITC) reconciliation with GSTR-2B",
      "Annual return (GSTR-9) and audit support",
      "LUT filing for exporters (zero-rated supplies)",
      "GST advisory, notices and amendment handling",
    ],
    whoFor: [
      "Traders, manufacturers and e-commerce sellers",
      "Service providers crossing the GST threshold",
      "Startups that need a GSTIN to invoice clients",
      "Businesses behind on returns and facing late fees",
    ],
    process: [
      {
        title: "Share details",
        description: "Send us your PAN, business proof and a few basics.",
      },
      {
        title: "We file",
        description: "Our CAs prepare and file your returns accurately.",
      },
      {
        title: "Stay compliant",
        description: "Get reminders and reports before every due date.",
      },
    ],
    faqs: [
      {
        question: "Who needs GST registration?",
        answer:
          "Any business with turnover above ₹40 lakh for goods (₹20 lakh for services), plus e-commerce sellers and inter-state suppliers, must register. We'll confirm your exact requirement in a free consultation.",
      },
      {
        question: "How long does GST registration take?",
        answer:
          "Typically 3–7 working days after documents are submitted, subject to department verification.",
      },
      {
        question: "What happens if I miss a return?",
        answer:
          "Late filing attracts interest and a per-day late fee. We help you file pending returns and set up reminders so it doesn't recur.",
      },
      {
        question: "Do you file both GSTR-1 and GSTR-3B?",
        answer:
          "Yes. Our plans cover both, along with ITC reconciliation so you claim every rupee you're entitled to.",
      },
    ],
  },
  {
    slug: "income-tax",
    name: "Income Tax Services",
    tagline: "ITR filing & planning",
    short:
      "Accurate ITR filing for individuals, professionals and businesses — with tax-saving planning.",
    promise:
      "File the right ITR, claim every deduction and handle notices — without the last-minute panic.",
    icon: "Landmark",
    priceFrom: "₹799", // PLACEHOLDER pricing
    included: [
      "ITR filing for salaried, professionals and businesses",
      "Capital gains, house property and foreign income reporting",
      "Tax-saving planning under 80C, 80D and more",
      "Advance tax computation and reminders",
      "Income-tax notice handling and response drafting",
      "Refund tracking and follow-up",
    ],
    whoFor: [
      "Salaried individuals with multiple income sources",
      "Freelancers, consultants and professionals",
      "Business owners and partnership firms",
      "NRIs with income or investments in India",
    ],
    process: [
      {
        title: "Share documents",
        description: "Upload Form 16, statements and investment proofs.",
      },
      {
        title: "We optimise",
        description: "We compute your tax and maximise eligible deductions.",
      },
      {
        title: "Review & file",
        description: "Approve the summary and we file with acknowledgement.",
      },
    ],
    faqs: [
      {
        question: "Which ITR form applies to me?",
        answer:
          "It depends on your income sources — salary, business, capital gains or foreign assets. We pick the correct form so your return isn't marked defective.",
      },
      {
        question: "Can you help reduce my tax legally?",
        answer:
          "Yes. We review your investments and expenses to claim every eligible deduction and suggest legitimate tax-saving options for the year ahead.",
      },
      {
        question: "I received an income-tax notice. Can you help?",
        answer:
          "Absolutely. Share the notice and we'll assess it, draft a response and represent your case.",
      },
      {
        question: "What is the last date to file ITR?",
        answer:
          "For most individuals it's 31 July of the assessment year. Filing early means faster refunds — we'll remind you well before the deadline.",
      },
    ],
  },
  {
    slug: "bookkeeping",
    name: "Bookkeeping & Accounting",
    tagline: "Books & compliance",
    short:
      "Day-to-day books, ledgers and financial statements, with ongoing statutory compliance.",
    promise:
      "Clean, up-to-date books every month — so you always know where your business stands.",
    icon: "BookOpenCheck",
    priceFrom: "₹2,499/mo", // PLACEHOLDER pricing
    included: [
      "Monthly bookkeeping and ledger maintenance",
      "Bank, cash and vendor reconciliation",
      "Profit & loss, balance sheet and cash-flow statements",
      "Accounts payable and receivable tracking",
      "Payroll and TDS coordination",
      "Year-end financials ready for audit and ITR",
    ],
    whoFor: [
      "Small businesses without an in-house accountant",
      "Startups that need investor-ready numbers",
      "Clinics, agencies and D2C brands",
      "Founders who want to focus on growth, not spreadsheets",
    ],
    process: [
      {
        title: "Connect accounts",
        description: "Share access to your bank feeds and invoices.",
      },
      {
        title: "We maintain",
        description: "Your books are kept current and reconciled monthly.",
      },
      {
        title: "Get reports",
        description: "Receive a clear financial pack every month.",
      },
    ],
    faqs: [
      {
        question: "Which accounting software do you use?",
        answer:
          "We work with Tally, Zoho Books and QuickBooks — or set one up for you. You keep full ownership of your data.",
      },
      {
        question: "Will I get monthly reports?",
        answer:
          "Yes. You'll receive a monthly pack with P&L, balance sheet and key metrics, plus a call to walk through them if needed.",
      },
      {
        question: "Can you clean up backlog books?",
        answer:
          "We regularly take on catch-up bookkeeping for prior months or years and bring everything current.",
      },
      {
        question: "Is my financial data secure?",
        answer:
          "Yes. We use secure, access-controlled systems and sign confidentiality terms with every client.",
      },
    ],
  },
  {
    slug: "food-license",
    name: "Food License (FSSAI)",
    tagline: "FSSAI registration",
    short:
      "FSSAI registration for restaurants, cloud kitchens, manufacturers and traders — end to end.",
    promise:
      "Get the right FSSAI license — Basic, State or Central — without the paperwork headache.",
    icon: "UtensilsCrossed",
    priceFrom: "₹1,499", // PLACEHOLDER pricing
    included: [
      "Eligibility check — Basic, State or Central license",
      "Application drafting and document preparation",
      "Form A / Form B filing with the FSSAI portal",
      "Follow-up with the department until approval",
      "License renewal and modification support",
      "Guidance on labelling and hygiene compliance",
    ],
    whoFor: [
      "Restaurants, cafes and cloud kitchens",
      "Food manufacturers and packagers",
      "Wholesalers, distributors and traders",
      "Home-based and online food businesses",
    ],
    process: [
      {
        title: "Tell us about you",
        description: "Share your food business type and scale.",
      },
      {
        title: "We file",
        description: "We prepare and submit the correct FSSAI application.",
      },
      {
        title: "Get licensed",
        description: "Receive your FSSAI license, ready to display.",
      },
    ],
    faqs: [
      {
        question: "Which FSSAI license do I need?",
        answer:
          "It depends on turnover and scale — Basic (up to ₹12 lakh), State (₹12 lakh–₹20 crore) or Central (above ₹20 crore or multi-state). We'll confirm yours.",
      },
      {
        question: "How long is an FSSAI license valid?",
        answer:
          "You can choose 1 to 5 years. We help you pick the right tenure and remind you before renewal.",
      },
      {
        question: "Do cloud kitchens and home businesses need FSSAI?",
        answer:
          "Yes — any business that handles food needs at least a Basic registration. We handle it fully online.",
      },
      {
        question: "Can you help with renewals?",
        answer:
          "Yes, we manage renewals and any modifications to your existing license.",
      },
    ],
  },
  {
    slug: "msme",
    name: "MSME Registration",
    tagline: "Udyam registration",
    short:
      "Udyam / MSME registration to unlock schemes, subsidies, easier loans and tender benefits.",
    promise:
      "Register as an MSME in days and unlock government schemes, cheaper credit and tender access.",
    icon: "Building2",
    priceFrom: "₹499", // PLACEHOLDER pricing
    included: [
      "Udyam (MSME) registration certificate",
      "Correct classification — micro, small or medium",
      "NIC code selection and activity mapping",
      "Aadhaar and PAN-based online filing",
      "Guidance on schemes and subsidies you qualify for",
      "Update and re-classification support",
    ],
    whoFor: [
      "Small manufacturers and service businesses",
      "Traders and self-employed professionals",
      "Startups applying for government tenders",
      "Businesses seeking collateral-free MSME loans",
    ],
    process: [
      {
        title: "Share details",
        description: "Send your Aadhaar, PAN and business information.",
      },
      {
        title: "We register",
        description: "We file your Udyam application accurately.",
      },
      {
        title: "Get certified",
        description: "Receive your MSME certificate, usually within days.",
      },
    ],
    faqs: [
      {
        question: "What are the benefits of MSME registration?",
        answer:
          "Access to collateral-free loans, interest subsidies, priority-sector lending, protection against delayed payments and preference in government tenders.",
      },
      {
        question: "Is there a government fee for Udyam registration?",
        answer:
          "Udyam registration itself is free of government charges — you only pay our professional fee for accurate, hassle-free filing.",
      },
      {
        question: "Do I need GST for MSME registration?",
        answer:
          "Not always. Requirements depend on your activity; we'll confirm what applies before filing.",
      },
      {
        question: "How long does it take?",
        answer: "Usually the same day to 2 working days once documents are ready.",
      },
    ],
  },
  {
    slug: "shop-act",
    name: "Shop Act Registration",
    tagline: "Shop & Establishment",
    short:
      "Shop & Establishment Act registration to operate legally — with renewals and compliance.",
    promise:
      "Get your Shop Act license to run your business legally and open a current account with ease.",
    icon: "Store",
    priceFrom: "₹999", // PLACEHOLDER pricing
    included: [
      "Shop & Establishment Act registration / license",
      "State-specific application and document prep",
      "Employer and establishment detail filing",
      "License download and display guidance",
      "Renewal and amendment support",
      "Advice on labour-law compliance basics",
    ],
    whoFor: [
      "Shops, offices and commercial establishments",
      "New businesses opening a current bank account",
      "Employers hiring their first staff",
      "Freelancers formalising their operations",
    ],
    process: [
      {
        title: "Share details",
        description: "Send your business and owner information.",
      },
      {
        title: "We file",
        description: "We submit to the state labour department.",
      },
      {
        title: "Get registered",
        description: "Receive your Shop Act registration certificate.",
      },
    ],
    faqs: [
      {
        question: "Who needs Shop Act registration?",
        answer:
          "Most shops, offices and commercial establishments must register under their state's Shop & Establishment Act, usually within 30 days of starting.",
      },
      {
        question: "Why do banks ask for it?",
        answer:
          "It's a common proof of business used to open a current account and to apply for other licenses.",
      },
      {
        question: "Is the process different by state?",
        answer:
          "Yes, rules and fees vary by state. We handle the state-specific process for you.",
      },
      {
        question: "Does it need renewal?",
        answer:
          "Depending on the state, licenses are valid for 1–10 years. We track and manage renewals.",
      },
    ],
  },
  {
    slug: "tds",
    name: "TDS Services",
    tagline: "TAN & TDS returns",
    short:
      "TAN registration, TDS return filing and challan payments — deduct and deposit correctly, on time.",
    promise:
      "From TAN to quarterly returns, we make sure TDS is deducted, deposited and filed right.",
    icon: "Percent",
    priceFrom: "₹999", // PLACEHOLDER pricing
    included: [
      "TAN registration and application",
      "Quarterly TDS return filing (24Q, 26Q, 27Q)",
      "Challan preparation and payment support",
      "Form 16 / 16A generation for deductees",
      "TDS reconciliation and correction returns",
      "Notice handling and default resolution",
    ],
    whoFor: [
      "Employers deducting TDS on salaries",
      "Businesses paying rent, contractors or professionals",
      "Companies and firms with statutory TDS duties",
      "Anyone who received a TDS default notice",
    ],
    process: [
      {
        title: "Share deductions",
        description: "Send us your challans and deduction details.",
      },
      {
        title: "We file",
        description: "We prepare and file your quarterly TDS returns.",
      },
      {
        title: "Issue certificates",
        description: "We generate Form 16 / 16A for your deductees.",
      },
    ],
    faqs: [
      {
        question: "What is TAN and who needs it?",
        answer:
          "TAN is a Tax Deduction Account Number required by anyone liable to deduct TDS. We register it for you quickly.",
      },
      {
        question: "When are TDS returns due?",
        answer:
          "TDS returns are filed quarterly. We track due dates and file on time to avoid late fees and interest.",
      },
      {
        question: "Can you fix a TDS default or mismatch?",
        answer:
          "Yes. We file correction returns and respond to defaults so your deductees get proper credit.",
      },
      {
        question: "Do you generate Form 16 for employees?",
        answer: "Yes, we generate and share Form 16 / 16A after filing.",
      },
    ],
  },
  {
    slug: "business-consulting",
    name: "Business Consulting",
    tagline: "Startup & advisory",
    short:
      "Company registration guidance, tax structuring, compliance roadmap and financial strategy.",
    promise:
      "Start and scale on a solid financial footing — the right structure, taxes and compliance from day one.",
    icon: "LineChart",
    priceFrom: "Custom", // PLACEHOLDER pricing
    included: [
      "Business structure guidance — Pvt Ltd, LLP or firm",
      "Company / firm registration assistance",
      "Tax structuring and planning",
      "Compliance calendar and roadmap",
      "Financial projections and unit-economics review",
      "Ongoing CA advisory on call",
    ],
    whoFor: [
      "First-time founders choosing a structure",
      "Growing businesses formalising operations",
      "Startups preparing for funding",
      "Owners who want a proactive CA partner",
    ],
    process: [
      {
        title: "Book a call",
        description: "Start with a free strategy consultation.",
      },
      {
        title: "We map it out",
        description: "We plan your structure, taxes and compliance.",
      },
      {
        title: "Execute together",
        description: "We implement and support you as you grow.",
      },
    ],
    faqs: [
      {
        question: "Should I register a Pvt Ltd, LLP or proprietorship?",
        answer:
          "It depends on liability, funding plans and compliance appetite. We'll recommend the best fit and handle the registration.",
      },
      {
        question: "Do you help after incorporation?",
        answer:
          "Yes. We set up your compliance calendar, accounting and tax filings so nothing slips through the cracks.",
      },
      {
        question: "Can you help me get investment-ready?",
        answer:
          "We prepare clean financials, projections and cap-table basics, and advise on the structure investors expect.",
      },
      {
        question: "Is the first consultation really free?",
        answer:
          "Yes. Your first strategy call is free with no obligation — we'll tell you exactly what you need.",
      },
    ],
  },
];

/** Look up a single service by slug (used by /services/[slug]). */
export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

/** All slugs — used by generateStaticParams and the sitemap. */
export function getServiceSlugs(): string[] {
  return services.map((service) => service.slug);
}
