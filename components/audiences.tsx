import { siteContent } from "@/lib/site-content";
import { Section } from "@/components/section";

export function Audiences() {
  return (
    <section id="audiences" className="py-20 md:py-28 scroll-mt-24">
      <Section as="div">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand mb-3">
            Audiences
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-snug text-foreground">
            {siteContent.audiences.heading}
          </h2>
          <div className="editorial-divider mx-auto mt-5 mb-4" />
          <p className="text-muted-foreground leading-relaxed md:text-lg">
            {siteContent.audiences.subtext}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {siteContent.audiences.items.map((item, i) => (
            <div
              key={item.title}
              className="audience-card audience-offset float-up"
              style={{ animationDelay: `${200 + i * 150}ms` }}
            >
              <span
                className="block font-display text-5xl opacity-[0.06] mb-2"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-xl text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </section>
  );
}
