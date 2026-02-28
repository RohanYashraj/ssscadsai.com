export const siteContent = {
  /** Short brand name used in header and footer. */
  siteName: "SSSCADSAI",
  /** Full name for taglines and SEO. */
  fullName:
    "Sri Sathya Sai Center of Excellence in Actuarial Data Science & AI",
  meta: {
    title: "SSSCADSAI | Sri Sathya Sai Center of Excellence in Actuarial Data Science & AI",
    description:
      "Sri Sathya Sai Center of Excellence in Actuarial Data Science & AI. One hub for Maestros AI, Tech Actuarial, Workshops & AI Certification, and Sutra Blog—blending tradition with innovation.",
    /** Set to your production URL for OG images and canonical links (e.g. "https://ssscadsai.com"). */
    baseUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "",
  },
  hero: {
    kicker: "Sri Sathya Sai Center of Excellence",
    titlePrefix: "Actuarial Data Science ",
    titleHighlight: "& AI",
    titleSuffix: ".",
    body:
      "One entry point to four pillars: agentic AI solutions, tech-enabled actuarial services, professional AI workshops, and Sutra Blog—clear, complete explanations of complex topics.",
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
    heading: "Four pillars of the Center",
    subtext:
      "Each pillar is intentionally scoped—from agentic AI and non-traditional solutions to traditional actuarial work, education, and thought leadership.",
  },
  audiences: {
    heading: "Who the Center serves",
    subtext:
      "Whether you are exploring AI, running a traditional actuarial function, or building capability, we route you to the right depth of support.",
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
    links: [
      { label: "Back to top", href: "#hero" },
    ] as const,
  },
  nav: {
    links: [
      { label: "Who it's for", href: "#audiences" },
    ] as const,
  },
};

