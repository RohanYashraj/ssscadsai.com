import { siteContent } from "@/lib/site-content";
import { subBrands } from "@/lib/sub-brands";
import { Section } from "@/components/section";
import { BrandCard } from "@/components/brand-card";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/60">
        <Section
          as="div"
          className="flex items-center justify-between py-4"
        >
          <div className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground">
            {siteContent.siteName}
          </div>
          <nav
            className="hidden gap-6 text-sm text-muted-foreground md:flex"
            aria-label="Main navigation"
          >
            {siteContent.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </Section>
      </header>

      <main className="flex flex-col gap-24 py-16 md:py-24">
        <Section
          id="hero"
          className="grid items-center gap-12 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1.2fr)] animate-in fade-in slide-in-from-bottom-4 duration-700"
        >
          <div className="space-y-6">
            <p
              className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-500 animate-in fade-in slide-in-from-left-2 duration-500 delay-100"
              style={{ animationFillMode: "backwards" }}
            >
              {siteContent.hero.kicker}
            </p>
            <h1
              className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl animate-in fade-in slide-in-from-bottom-4 duration-600 delay-150"
              style={{ animationFillMode: "backwards" }}
            >
              {siteContent.hero.titlePrefix}
              <span className="underline decoration-emerald-500 decoration-2 underline-offset-4">
                {siteContent.hero.titleHighlight}
              </span>
              {siteContent.hero.titleSuffix}
            </h1>
            <p
              className="max-w-xl text-balance text-base leading-7 text-muted-foreground md:text-lg animate-in fade-in duration-600 delay-200"
              style={{ animationFillMode: "backwards" }}
            >
              {siteContent.hero.body}
            </p>
            <div
              className="flex flex-wrap gap-3 text-sm animate-in fade-in slide-in-from-bottom-2 duration-500 delay-300"
              style={{ animationFillMode: "backwards" }}
            >
              <a
                href={siteContent.hero.primaryCta.href}
                className={buttonVariants({
                  size: "lg",
                  className: "rounded-full px-6",
                })}
              >
                {siteContent.hero.primaryCta.label}
              </a>
              <a
                href={siteContent.hero.secondaryCta.href}
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "rounded-full px-6",
                })}
              >
                {siteContent.hero.secondaryCta.label}
              </a>
            </div>
          </div>

          <div
            className="relative animate-in fade-in slide-in-from-right-4 duration-700 delay-200"
            style={{ animationFillMode: "backwards" }}
          >
            <div className="pointer-events-none absolute -inset-8 -z-10 rounded-3xl bg-linear-to-br from-emerald-500/10 via-transparent to-sky-500/10 blur-2xl" />
            <div className="grid gap-4 rounded-3xl border bg-card/80 p-6 shadow-sm backdrop-blur-sm sm:grid-cols-2">
              {subBrands.map((brand, i) => (
                <div
                  key={brand.id}
                  className="animate-in fade-in slide-in-from-bottom-2 duration-500"
                  style={{
                    animationDelay: `${300 + i * 80}ms`,
                    animationFillMode: "backwards",
                  }}
                >
                  <BrandCard brand={brand} compact />
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section
          id="brands"
          className="space-y-6 scroll-mt-24"
        >
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {siteContent.brands.heading}
            </h2>
            <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
              {siteContent.brands.subtext}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {subBrands.map((brand, i) => (
              <div
                key={brand.id}
                className="animate-in fade-in slide-in-from-bottom-3 duration-500"
                style={{
                  animationDelay: `${i * 60}ms`,
                  animationFillMode: "backwards",
                }}
              >
                <BrandCard brand={brand} />
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="audiences"
          className="space-y-6 scroll-mt-24"
        >
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {siteContent.audiences.heading}
            </h2>
            <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
              {siteContent.audiences.subtext}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {siteContent.audiences.items.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border bg-card/70 p-5 transition-colors hover:bg-card/90 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2"
              >
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="capabilities"
          className="space-y-6 scroll-mt-24"
        >
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {siteContent.capabilities.heading}
            </h2>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {siteContent.capabilities.items.map((item, i) => (
              <li
                key={i}
                className="rounded-2xl border bg-card/70 px-4 py-3 text-sm"
              >
                {item}
              </li>
            ))}
          </ul>
        </Section>
      </main>

      <footer
        id="contact"
        className="mt-12 border-t bg-background/80 py-8 text-xs text-muted-foreground scroll-mt-24"
      >
        <Section as="div" className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-medium text-foreground">
              {siteContent.siteName}
            </p>
            <p className="mt-1">{siteContent.footer.tagline}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            {siteContent.footer.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        </Section>
      </footer>
    </div>
  );
}
