export type Collection = {
  slug: string;
  title: string;
  description: string;
  parentNav?: "visual-communication" | null;
};

export type CaseStudy = {
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
  collectionSlug: string;
  cover?: string;
};

export const collections: Collection[] = [
  {
    slug: "branding",
    title: "Branding",
    description: "Discover my branding projects and case studies that reflect my approach and extensive work across various industries.",
    parentNav: null,
  },
  {
    slug: "product-design",
    title: "Product Design",
    description: "Explore my past projects and detailed case studies showcasing my product design work and broad expertise across diverse industry sectors.",
    parentNav: null,
  },
  {
    slug: "typography",
    title: "Typography",
    description: "Type design and typographic systems.",
    parentNav: "visual-communication",
  },
  {
    slug: "conceptual-design",
    title: "Conceptual Design",
    description: "Experimental and theoretical design projects.",
    parentNav: "visual-communication",
  },
  {
    slug: "photography",
    title: "Photography",
    description: "Visual storytelling through the lens.",
    parentNav: "visual-communication",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "lumina-bank",
    title: "Lumina Bank",
    excerpt: "Reimagining the digital banking experience for the next generation.",
    tags: ["Fintech", "App Design", "UX/UI"],
    collectionSlug: "product-design",
  },
  {
    slug: "apex-architecture",
    title: "Apex Architecture",
    excerpt: "A monolithic brand identity for a global architecture firm.",
    tags: ["Branding", "Identity", "Print"],
    collectionSlug: "branding",
  },
  {
    slug: "mono-type",
    title: "Mono Type Specimen",
    excerpt: "A promotional poster series for a new monospace typeface.",
    tags: ["Typography", "Poster", "Print"],
    collectionSlug: "typography",
  },
  {
    slug: "culture-magazine",
    title: "Culture Magazine",
    excerpt: "Art direction and layout for a quarterly arts publication.",
    tags: ["Editorial", "Layout", "Art Direction"],
    collectionSlug: "conceptual-design",
  },
  {
    slug: "tech-conference-2025",
    title: "TechConf 2025",
    excerpt: "Visual identity system for the world's largest tech conference.",
    tags: ["Identity Systems", "Event Branding"],
    collectionSlug: "branding",
  },
  {
    slug: "jazz-festival",
    title: "Jazz Festival",
    excerpt: "Experimental poster series capturing the rhythm of jazz.",
    tags: ["Posters", "Graphic Design"],
    collectionSlug: "conceptual-design",
  },
  {
    slug: "eco-market",
    title: "Eco Market",
    excerpt: "Sustainable packaging and brand identity for organic goods.",
    tags: ["Branding", "Packaging"],
    collectionSlug: "branding",
  },
  {
    slug: "health-tracker",
    title: "Health Tracker",
    excerpt: "A minimal mobile app for tracking daily wellness metrics.",
    tags: ["Product Design", "Mobile", "Health"],
    collectionSlug: "product-design",
  },
  {
    slug: "urban-shadows",
    title: "Urban Shadows",
    excerpt: "A photographic exploration of light and shadow in the city.",
    tags: ["Photography", "Fine Art"],
    collectionSlug: "photography",
  },
];
