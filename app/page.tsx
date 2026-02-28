import { siteContent } from "@/lib/site-content";
import { subBrands } from "@/lib/sub-brands";
import { Section } from "@/components/section";
import { BrandCard } from "@/components/brand-card";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen text-foreground page-bg page-bg-grid relative">
      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-md supports-backdrop-filter:bg-background/80">
        <Section
          as="div"
          className="flex items-center justify-between py-4"
        >
          <div className="font-display text-sm font-semibold tracking-[0.22em] uppercase text-primary">
            {siteContent.siteName}
          </div>
          <nav
            className="hidden gap-8 text-sm text-muted-foreground md:flex"
            aria-label="Main navigation"
          >
            {siteContent.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </Section>
      </header>

      <main className="flex flex-col gap-24">
        <section
          id="hero"
          aria-label="Hero"
          className="hero-bg relative overflow-hidden pt-16 pb-28 md:pt-24 md:pb-36"
        >
          <div className="mx-auto max-w-6xl px-6">
            <div className="relative max-w-3xl pl-5 md:pl-6 border-l-2 border-brand/50">
              <p
                className="font-display text-xs font-semibold uppercase tracking-[0.32em] text-brand animate-in fade-in slide-in-from-bottom-3 duration-600 delay-75"
                style={{ animationFillMode: "backwards" }}
              >
                {siteContent.hero.kicker}
              </p>
              <h1
                className="font-display mt-4 text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[1.08] animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150"
                style={{ animationFillMode: "backwards" }}
              >
                {siteContent.hero.titlePrefix}
                <span className="hero-highlight underline decoration-primary/40 decoration-2 underline-offset-6">
                  {siteContent.hero.titleHighlight}
                </span>
                {siteContent.hero.titleSuffix}
              </h1>
              <p
                className="mt-6 max-w-xl text-balance text-base leading-8 text-muted-foreground md:text-lg md:leading-8 animate-in fade-in slide-in-from-bottom-2 duration-600 delay-300"
                style={{ animationFillMode: "backwards" }}
              >
                {siteContent.hero.body}
              </p>
              <div
                className="mt-8 flex flex-wrap items-center gap-3 animate-in fade-in slide-in-from-bottom-3 duration-500 delay-400"
                style={{ animationFillMode: "backwards" }}
              >
                <a
                  href={siteContent.hero.primaryCta.href}
                  className={buttonVariants({
                    size: "lg",
                    className:
                      "rounded-full px-7 font-semibold shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]",
                  })}
                >
                  {siteContent.hero.primaryCta.label}
                </a>
                <a
                  href={siteContent.hero.secondaryCta.href}
                  className={buttonVariants({
                    variant: "outline",
                    size: "lg",
                    className:
                      "rounded-full px-7 font-medium transition-all duration-300 hover:border-primary/50 hover:text-foreground",
                  })}
                >
                  {siteContent.hero.secondaryCta.label}
                </a>
              </div>
            </div>
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-background to-transparent pointer-events-none"
            aria-hidden
          />
        </section>

        <Section
          id="vision"
          className="section-block space-y-6 py-16 md:py-20 scroll-mt-24"
        >
          <div className="relative max-w-3xl pl-5 md:pl-6 border-l-2 border-brand/50">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-brand">
              Our Vision
            </p>
            <h2 className="font-display mt-2 text-2xl font-bold tracking-tight text-primary sm:text-3xl md:text-4xl">
              Vision statement
            </h2>
          </div>
          <div className="max-w-3xl space-y-6 pl-5 md:pl-6 text-muted-foreground leading-relaxed md:text-lg">
            <p>
              To enable the actuarial profession to take a transformative leap by optimally integrating cutting-edge AI innovations with the depth and rigour of professional actuarial judgment.
            </p>
            <p>
              We envision an ecosystem where every stakeholder—students, employees, employers, educators, professional bodies, and research communities—continuously upskills in emerging areas of Artificial Intelligence and data science.
            </p>
            <p>
              Our platform aspires to serve as a single, integrated hub that brings together learning, collaboration, research, industry engagement, and professional development, empowering the actuarial world to lead with intelligence, ethics, and innovation in the AI era.
            </p>
          </div>
        </Section>

        <Section
          id="brands"
          className="section-block space-y-10 py-16 md:py-20 scroll-mt-24"
        >
          <div className="relative max-w-2xl pl-5 md:pl-6 border-l-2 border-brand/50">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-brand">
              Pillars
            </p>
            <h2 className="font-display mt-2 text-2xl font-bold tracking-tight text-primary sm:text-3xl md:text-4xl">
              {siteContent.brands.heading}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              {siteContent.brands.subtext}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {subBrands.map((brand, i) => (
              <div
                key={brand.id}
                className="animate-in fade-in slide-in-from-bottom-4 duration-600"
                style={{
                  animationDelay: `${100 + i * 120}ms`,
                  animationFillMode: "backwards",
                }}
              >
                <BrandCard brand={brand} />
              </div>
            ))}
          </div>
        </Section>
      </main>

      <footer
        id="contact"
        className="footer-bg relative mt-20 border-t border-border/80 bg-background/95 py-12 md:py-14 text-muted-foreground scroll-mt-24"
      >
        <Section as="div" className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md space-y-2">
            <p className="font-display text-sm font-semibold tracking-[0.18em] uppercase text-foreground">
              {siteContent.siteName}
            </p>
            <p className="text-xs leading-relaxed text-muted-foreground/95">
              {siteContent.fullName}
            </p>
            <p className="pt-1 text-xs leading-relaxed text-muted-foreground">
              {siteContent.footer.tagline}
            </p>
          </div>
          <nav
            className="flex flex-wrap gap-6 text-sm"
            aria-label="Footer navigation"
          >
            {siteContent.footer.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </Section>
      </footer>
    </div>
  );
}
