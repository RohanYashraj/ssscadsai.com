import { Section } from "@/components/section";

export function Vision() {
  return (
    <section
      id="vision"
      className="relative py-24 md:py-40 scroll-mt-24 overflow-hidden"
    >
      {/* Background decorations for depth */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />
      <div
        className="absolute inset-0 bg-linear-to-b from-secondary/30 via-transparent to-secondary/30 pointer-events-none"
        aria-hidden="true"
      />

      <Section as="div" className="relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header with Large Background Text */}
          <div className="flex items-baseline gap-4 mb-16 md:mb-24">
            <span className="font-display text-7xl md:text-9xl text-primary/5 select-none leading-none absolute -top-8 -left-4 md:-top-12 md:-left-8">
              Vision
            </span>
            <div className="h-px flex-1 bg-border/60 ml-24 md:ml-40" />
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary/60 whitespace-nowrap">
              The Manifesto
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 md:gap-24 items-start">
            {/* Primary Statement - High impact display column */}
            <div className="lg:col-span-7 relative">
              {/* Vertical accent bar */}
              <div className="absolute -left-6 md:-left-10 top-2 bottom-2 w-1.5 bg-linear-to-b from-terracotta to-terracotta/20 rounded-full" />

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display leading-[1.2] text-foreground balance">
                To enable the actuarial profession to take a{" "}
                <span className="text-terracotta">transformative leap</span> by
                optimally integrating cutting-edge AI innovations with the depth
                and rigour of professional actuarial judgment.
              </h2>
            </div>

            {/* Supporting Content - Information density column */}
            <div className="lg:col-span-5 space-y-12 md:pt-4">
              <div className="space-y-4 group">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand/80 group-hover:text-brand transition-colors">
                    The Ecosystem
                  </span>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed font-light">
                  We envision an ecosystem where every stakeholder—students,
                  employees, employers, educators, professional bodies, and
                  research communities—continuously upskills in emerging areas
                  of Artificial Intelligence and data science.
                </p>
              </div>

              <div className="space-y-4 group">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand/80 group-hover:text-brand transition-colors">
                    The Integrated Hub
                  </span>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed font-light">
                  Our platform aspires to serve as a single, integrated hub that
                  brings together learning, collaboration, research, industry
                  engagement, and professional development, empowering the
                  actuarial world to lead with intelligence, ethics, and
                  innovation in the AI era.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom decorative line */}
          <div className="mt-24 h-px w-24 bg-linear-to-r from-primary/40 to-transparent" />
        </div>
      </Section>
    </section>
  );
}
