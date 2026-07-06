import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { TestimonialCard } from "@/components/shared/testimonial-card";
import { Reveal } from "@/components/shared/reveal";
import { testimonials } from "@/lib/content";

/** Client testimonials — minimal quote cards. */
export function Testimonials() {
  return (
    <Section className="bg-white">
      <SectionHeading
        align="center"
        overline="Testimonials"
        title="Businesses that stopped worrying about compliance"
        subtitle="Founders, freelancers and firms across India rely on TrusTax to keep their filings accurate and on time."
        className="mx-auto max-w-2xl"
      />

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Reveal key={testimonial.name} delay={index * 0.06} className="h-full">
            <TestimonialCard testimonial={testimonial} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
