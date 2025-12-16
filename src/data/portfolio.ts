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

export type Review = {
  id: string;
  clientName: string;
  companyName: string;
  image: string;
  reviewMessage: string;
};

export const reviews: Review[] = [
  {
    id: "1",
    clientName: "Sarah Jenkins",
    companyName: "Onyx",
    image: "/reviews/onyx.svg",
    reviewMessage: "Yuval is a true professional who knows his craft and executes it perfectly. He chose the exact colors and shapes that fit, providing a thorough and detailed explanation behind every element of the logo. The result is an impressive, professional, and precise logo, and the experience throughout the process was both pleasant and highly professional. Highly recommended!",
  },
  {
    id: "2",
    clientName: "David Chen",
    companyName: "Nouvelle",
    image: "/reviews/nouvelle.svg",
    reviewMessage: "Simply Amazing!",
  },
  {
    id: "3",
    clientName: "Emily Rodriguez",
    companyName: "Unique Freight",
    image: "/reviews/unique-freight.svg",
    reviewMessage: "Yuval did an amazing job with meticulous attention to detail! In the end, we received an incredible product that met all the requirements of our company! I highly recommend Yuval's services to anyone looking for a personal touch and top-level professionalism!",
  },
  {
    id: "4",
    clientName: "Avi",
    companyName: "Yuroneti",
    image: "/reviews/yuroneti.svg",
    reviewMessage: "Yuval gave me the feeling I made the right choice. He's very professional and creative, which is very important in design. He has a high sense of service. Many THX Yuval!",
  },
  {
    id: "5",
    clientName: "Yehiel",
    companyName: "3D Mylev",
    image: "/reviews/3dmylev.svg",
    reviewMessage: "The guy knows how to work. And knows what he's doing He seems to have years of experience and the Work was above the expected",
  },
  {
    id: "6",
    clientName: "Tom Wilson",
    companyName: "Lushay Docs",
    image: "/reviews/lushay-docs.svg",
    reviewMessage: "Delivered an amazing design and a great experience working together, above and beyond expectations, and would love to work together again in the future!",
  },
];
