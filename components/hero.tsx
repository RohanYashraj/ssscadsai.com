import { siteContent } from "@/lib/site-content";
import { Section } from "@/components/section";

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="hero-bg relative overflow-hidden pt-8 pb-24 md:pt-16 md:pb-36"
    >
      {/* Decorative geometric shapes */}
      <div className="hidden md:block" aria-hidden="true">
        <div className="geo-shape geo-shape-1" />
        <div className="geo-shape geo-shape-2" />
        <div className="geo-shape geo-shape-3" />
        <div className="geo-shape geo-shape-4" />
      </div>

      <Section as="div">
        <div className="max-w-2xl relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand float-up">
            {siteContent.hero.kicker}
          </p>

          <h1 className="font-display mt-5 text-4xl leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[1.05] float-up delay-100">
            {siteContent.hero.titlePrefix}
            <span className="hero-highlight decoration-primary/30 decoration-2 underline-offset-6">
              {siteContent.hero.titleHighlight}
            </span>
            {siteContent.hero.titleSuffix}
          </h1>

          <div className="editorial-divider mt-7 float-up delay-200" />

          <p className="mt-6 max-w-lg text-base text-muted-foreground leading-7 md:text-lg md:leading-8 float-up delay-300">
            {siteContent.hero.body}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4 float-up delay-400">
            <a
              href={siteContent.hero.primaryCta.href}
              className="inline-flex items-center px-7 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              {siteContent.hero.primaryCta.label}
            </a>
            <a
              href={siteContent.hero.secondaryCta.href}
              className="inline-flex items-center px-7 py-3 rounded-full border border-border text-sm font-medium text-foreground transition-all duration-300 hover:border-primary/40 hover:bg-primary/5"
            >
              {siteContent.hero.secondaryCta.label}
            </a>
          </div>
        </div>
      </Section>

      <div
        className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-background to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}
