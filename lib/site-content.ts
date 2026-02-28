export const siteContent = {
  siteName: "Actuarial & AI Hub",
  meta: {
    title: "Actuarial & AI Hub",
    description:
      "Single-page hub connecting Maestros AI, Tech Actuarial, Workshops & AI Certification, and Sutra Blog for modern actuarial and AI solutions.",
    /** Set to your production URL for OG images and canonical links (e.g. "https://ssscadsai.com"). */
    baseUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "",
  },
  hero: {
    kicker: "Insurance · Actuarial · AI",
    titlePrefix: "One hub for ",
    titleHighlight: "modern actuarial",
    titleSuffix: " & AI.",
    body:
      "A single entry point into four focused offerings: agentic AI solutions, tech-enabled actuarial services, professional AI workshops, and a Sutra-style blog to demystify complex topics.",
    primaryCta: {
      label: "Explore the four pillars",
      href: "#brands",
    },
    secondaryCta: {
      label: "See who it's for",
      href: "#audiences",
    },
  },
  brands: {
    heading: "Four focused pillars, one strategy",
    subtext:
      "Each sub-brand is intentionally scoped so you can adopt exactly what you need—from experimental agentic systems to traditional reporting, education, and thought leadership.",
  },
  audiences: {
    heading: "Designed for real actuarial stakeholders",
    subtext:
      "Whether you are experimenting with AI, running a traditional function, or building teams, this hub is meant to route you to the right depth of help.",
    items: [
      {
        title: "Insurance leaders",
        description:
          "Looking for future-looking AI initiatives that still respect regulatory and risk constraints.",
      },
      {
        title: "Actuarial teams",
        description:
          "Need support on core work—pricing, reserving, capital—plus access to better tooling and automation.",
      },
      {
        title: "Professionals & learners",
        description:
          "Want to deeply understand AI in actuarial practice and keep up with emerging methods.",
      },
    ] as const,
  },
  capabilities: {
    heading: "How the pillars work together",
    items: [
      "Innovation: agentic AI and non-traditional solutions",
      "Rigor: traditional actuarial + data science",
      "Education: workshops and AI certification",
      "Thought leadership: clear, complete explanations",
    ] as const,
  },
  footer: {
    tagline: "Central entry point for Maestros AI, Tech Actuarial, Workshops & AI Certification, and Sutra Blog.",
    links: [
      { label: "View pillars", href: "#brands" },
      { label: "Back to top", href: "#hero" },
    ] as const,
  },
  nav: {
    links: [
      { label: "Overview", href: "#hero" },
      { label: "Pillars", href: "#brands" },
      { label: "Who it's for", href: "#audiences" },
      { label: "Contact", href: "#contact" },
    ] as const,
  },
};

