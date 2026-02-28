export type SubBrandAccent = "emerald" | "sky" | "amber" | "fuchsia";

export interface SubBrand {
  id: string;
  slug: string;
  name: string;
  category: string;
  tagline: string;
  headline: string;
  description: string;
  url?: string;
  accent: SubBrandAccent;
}

export const subBrands: SubBrand[] = [
  {
    id: "maestros-ai",
    slug: "maestros-ai",
    name: "Maestros AI",
    category: "AI & Agents",
    tagline: "Agentic AI systems for insurance and actuarial innovation.",
    headline: "Agentic systems for insurance and actuarial innovation",
    description:
      "Prototype and deploy non-traditional, AI-native workflows for underwriting, pricing, forecasting, and internal operations.",
    url: "#",
    accent: "emerald",
  },
  {
    id: "tech-actuarial",
    slug: "tech-actuarial",
    name: "Tech Actuarial",
    category: "Actuarial + Data Science",
    tagline: "Traditional actuarial, upgraded with data science and tooling.",
    headline: "Traditional actuarial, upgraded with data science",
    description:
      "End-to-end actuarial support—reserving, pricing, capital, reporting—grounded in rigorous methods and supported by modern data pipelines.",
    url: "#",
    accent: "sky",
  },
  {
    id: "workshops-ai-certification",
    slug: "workshops-ai-certification",
    name: "Workshops & AI Certification",
    category: "Education & Upskilling",
    tagline: "Practical AI education for actuarial professionals and leaders.",
    headline: "Upskilling for actuarial teams and leaders",
    description:
      "Hands-on, tool-agnostic workshops and certification paths that connect AI concepts to day-to-day actuarial work.",
    url: "#",
    accent: "amber",
  },
  {
    id: "sutra-blog",
    slug: "sutra-blog",
    name: "Sutra Blog",
    category: "Thought Leadership",
    tagline:
      "Deep dives that keep the math intact but make ideas approachable.",
    headline: "Deep dives without the jargon",
    description:
      "Essays and walkthroughs that turn dense, technical topics into clear, structured narratives—without skipping the details.",
    url: "#",
    accent: "fuchsia",
  },
];
