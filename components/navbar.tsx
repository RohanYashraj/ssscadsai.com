import { siteContent } from "@/lib/site-content";
import { Section } from "@/components/section";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 py-4 md:py-5 bg-background/85 backdrop-blur-md">
      <Section as="div" className="flex items-center justify-between">
        <a href="#hero" className="group flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-display text-sm">
              S
            </span>
          </div>
          <span className="font-display text-lg tracking-wide text-foreground">
            {siteContent.siteName}
          </span>
        </a>

        <nav
          className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex"
          aria-label="Main navigation"
        >
          {siteContent.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 transition-colors duration-250 hover:text-foreground after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </Section>
      {/* Fine terracotta rule */}
      <div className="mt-4 mx-auto max-w-6xl px-6">
        <div className="h-px bg-linear-to-r from-transparent via-primary/25 to-transparent" />
      </div>
    </header>
  );
}
