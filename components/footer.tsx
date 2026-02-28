import { siteContent } from "@/lib/site-content";
import { Section } from "@/components/section";

export function Footer() {
  return (
    <footer className="footer-bg relative py-10 text-muted-foreground">
      <Section as="div" className="text-center space-y-1">
        <p className="font-display text-lg text-foreground">
          {siteContent.siteName}
        </p>
        <p className="text-xs text-muted-foreground/60">
          &copy; {new Date().getFullYear()} {siteContent.fullName}. All rights
          reserved.
        </p>
      </Section>
    </footer>
  );
}
