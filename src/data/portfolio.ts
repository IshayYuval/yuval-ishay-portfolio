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
    slug: "cheetah",
    title: "Cheetah",
    excerpt: "During my first year in my Visual Communication B.A, we've got an assignment to select an animal and build a comprehensive visual identity around it",
    tags: ["HIT Visual Communication BA", "Graphic Fundamentals"],
    collectionSlug: "branding",
    cover: "/case-studies/branding/cheetah/page-cover.svg",
  },
  {
    slug: "name-the-font",
    title: "Name the Font",
    excerpt: "Name the font (Hebrew: זהה את הגופן) is a game bringing the fonts you see around you to the main stage. How many of them can you recognize?",
    tags: ["Passion Project", "Gaming"],
    collectionSlug: "branding",
    cover: "/case-studies/branding/name-the-font/page-cover.svg",
  },
  {
    slug: "unique-freight",
    title: "Unique Freight",
    excerpt: "Unique Freight is a freight forwarding company offering end-to-end logistics solutions with personalized service, client-focused support, and free consulting for regular clients.",
    tags: ["Client Project", "Delivery"],
    collectionSlug: "branding",
    cover: "/case-studies/branding/unique-freight/page-cover.svg",
  },
  {
    slug: "onyx",
    title: "Onyx",
    excerpt: "Onyx is a product team in a web services company, which responsible for creating the long term strategy of their company's product. ",
    tags: ["Client Project", "Software", "Digital"],
    collectionSlug: "branding",
    cover: "/case-studies/branding/onyx/page-cover.svg",
  },
  {
    slug: "nouvelle",
    title: "Nouvelle",
    excerpt: "Nouvelle is an emerging patisserie specializing in high-quality baking services including desserts, bread, cakes, and pralines. ",
    tags: ["Client Project", "Bakery", "Print & Digital"],
    collectionSlug: "branding",
    cover: "/case-studies/branding/nouvelle/page-cover.svg",
  },
  {
    slug: "united-future-fa",
    title: "United Future FA",
    excerpt: "United Future Football Academy is a premier institution dedicated to developing young football talent and nurture a deep love for the game.",
    tags: ["Passion Project", "Football Club"],
    collectionSlug: "branding",
    cover: "/case-studies/branding/uffa/page-cover.svg",
  },
  {
    slug: "cloudeye",
    title: "Cloudeye",
    excerpt: "Web platform for managing web services status (Cloudeye is not available in the worldwide web)",
    tags: ["Client Project", "SaaS"],
    collectionSlug: "branding",
    cover: "/case-studies/branding/cloudeye/page-cover.svg",
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
