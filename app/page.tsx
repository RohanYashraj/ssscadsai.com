import { cn } from "@/lib/utils";
import { siteContent } from "@/lib/site-content";
import { subBrands, type SubBrandAccent } from "@/lib/sub-brands";

const accentTextClass: Record<SubBrandAccent, string> = {
  emerald: "text-emerald-500",
  sky: "text-sky-500",
  amber: "text-amber-500",
  fuchsia: "text-fuchsia-500",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground">
            Actuarial &amp; AI Hub
          </div>
          <nav className="hidden gap-6 text-sm text-muted-foreground md:flex">
            <a href="#hero" className="hover:text-foreground">
              Overview
            </a>
            <a href="#brands" className="hover:text-foreground">
              Pillars
            </a>
            <a href="#audiences" className="hover:text-foreground">
              Who it&apos;s for
            </a>
            <a href="#contact" className="hover:text-foreground">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-16 md:py-24">
        <section
          id="hero"
          className="grid items-center gap-12 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1.2fr)]"
        >
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-500">
              {siteContent.hero.kicker}
            </p>
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              {siteContent.hero.titlePrefix}
              <span className="underline decoration-emerald-500 decoration-2 underline-offset-4">
                {siteContent.hero.titleHighlight}
              </span>
              {siteContent.hero.titleSuffix}
            </h1>
            <p className="max-w-xl text-balance text-base leading-7 text-muted-foreground md:text-lg">
              {siteContent.hero.body}
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <a
                href={siteContent.hero.primaryCta.href}
                className="inline-flex items-center rounded-full bg-foreground px-6 py-2 text-background transition-colors hover:bg-foreground/90"
              >
                {siteContent.hero.primaryCta.label}
              </a>
              <a
                href={siteContent.hero.secondaryCta.href}
                className="inline-flex items-center rounded-full border border-border px-6 py-2 text-sm text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
              >
                {siteContent.hero.secondaryCta.label}
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -inset-8 -z-10 rounded-3xl bg-linear-to-br from-emerald-500/10 via-transparent to-sky-500/10 blur-2xl" />
            <div className="grid gap-4 rounded-3xl border bg-card/80 p-6 shadow-sm backdrop-blur-sm sm:grid-cols-2">
              {subBrands.map((brand) => (
                <div
                  key={brand.id}
                  className="space-y-1 rounded-2xl border bg-background/80 p-4"
                >
                  <p
                    className={cn(
                      "text-xs font-medium",
                      accentTextClass[brand.accent]
                    )}
                  >
                    {brand.name}
                  </p>
                  <p className="text-sm font-medium">{brand.tagline}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="brands" className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Four focused pillars, one strategy
            </h2>
            <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
              Each sub-brand is intentionally scoped so you can adopt exactly
              what you need—from experimental agentic systems to traditional
              reporting, education, and thought leadership.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {subBrands.map((brand) => (
              <article
                key={brand.id}
                className="flex flex-col justify-between rounded-3xl border bg-card/80 p-6 shadow-sm"
              >
                <div className="space-y-3">
                  <p
                    className={cn(
                      "text-xs font-semibold uppercase tracking-[0.25em]",
                      accentTextClass[brand.accent]
                    )}
                  >
                    {brand.name}
                  </p>
                  <h3 className="text-lg font-semibold">{brand.headline}</h3>
                  <p className="text-sm text-muted-foreground">
                    {brand.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="audiences" className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Designed for real actuarial stakeholders
            </h2>
            <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
              Whether you are experimenting with AI, running a traditional
              function, or building teams, this hub is meant to route you to the
              right depth of help.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border bg-card/70 p-5">
              <h3 className="text-sm font-semibold">Insurance leaders</h3>
              <p className="mt-2 text-xs text-muted-foreground">
                Looking for future-looking AI initiatives that still respect
                regulatory and risk constraints.
              </p>
            </div>
            <div className="rounded-2xl border bg-card/70 p-5">
              <h3 className="text-sm font-semibold">Actuarial teams</h3>
              <p className="mt-2 text-xs text-muted-foreground">
                Need support on core work—pricing, reserving, capital—plus
                access to better tooling and automation.
              </p>
            </div>
            <div className="rounded-2xl border bg-card/70 p-5">
              <h3 className="text-sm font-semibold">Professionals &amp; learners</h3>
              <p className="mt-2 text-xs text-muted-foreground">
                Want to deeply understand AI in actuarial practice and keep up
                with emerging methods.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer
        id="contact"
        className="mt-12 border-t bg-background/80 py-8 text-xs text-muted-foreground"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-medium">Actuarial &amp; AI Hub</p>
            <p className="mt-1">
              Central entry point for Maestros AI, Tech Actuarial, Workshops &
              AI Certification, and Sutra Blog.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#brands" className="hover:text-foreground">
              View pillars
            </a>
            <a href="#hero" className="hover:text-foreground">
              Back to top
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
