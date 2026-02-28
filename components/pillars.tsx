import { siteContent } from "@/lib/site-content";
import { subBrands } from "@/lib/sub-brands";
import { Section } from "@/components/section";
import { BrandCard } from "@/components/brand-card";

export function Pillars() {
  return (
    <section id="brands" className="section-block py-20 md:py-28 scroll-mt-24">
      <Section as="div">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand mb-3">
            Pillars
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-snug text-foreground">
            {siteContent.brands.heading}
          </h2>
          <div className="editorial-divider mt-5 mb-4" />
          <p className="text-muted-foreground leading-relaxed md:text-lg">
            {siteContent.brands.subtext}
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {subBrands.map((brand, i) => (
            <div
              key={brand.id}
              className="float-up"
              style={{ animationDelay: `${150 + i * 120}ms` }}
            >
              <BrandCard brand={brand} index={i} />
            </div>
          ))}
        </div>
      </Section>
    </section>
  );
}
