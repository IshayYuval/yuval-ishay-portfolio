export type Collection = {
  slug: string;
  title: string;
  description: string;
  parentNav?: "my-work" | null;
  shortTitle?: string;
};

export type ZigZagSection = {
  image: string;
  title?: string;
  text: string;
  reverse?: boolean;
};

export type GalleryItem = {
  src: string;
  alt: string;
  colSpan: "full" | "half";
  vimeoSrc?: string;
  width?: number;
  height?: number;
};

export type ProcessStepBullet = string | {
  label?: string;
  labelColor?: string;
  labelWeight?: string;
  text: string;
};

export type ResearchGraphItem = {
  percentage?: number;
  value?: number;
  label?: string;
  labelColor?: string;
  labelWeight?: string | number;
  text: string;
  color?: string;
  trackColor?: string;
  size?: number;
  strokeWidth?: number;
};

export type ResearchGraphData = {
  title?: string;
  description?: string;
  text?: string;
  graphs?: (ResearchGraphItem | string)[];
  items?: (ResearchGraphItem | string)[];
  bullets?: (ResearchGraphItem | string)[];
  textAfter?: string;
};

export type ProcessStep = {
  title: string;
  text: string;
  bulletsTitle?: string;
  bullets?: ProcessStepBullet[];
  graphs?: (ResearchGraphItem | string)[];
  researchGraph?: ResearchGraphData;
  bulletSections?: {
    title?: string;
    bullets: ProcessStepBullet[];
  }[];
  textAfter?: string;
};

export type GallerySection = {
  title?: string;
  description?: string;
  items: GalleryItem[];
};

export type GalleryData = GalleryItem[] | GallerySection;

export type CaseStudyTheme = {
  primaryColor?: string;
  secondaryColor?: string;
  surfaceColor?: string;
  surfaceMutedColor?: string;
  mutedSurfaceColor?: string;
  borderColor?: string;
  pageBackground?: string;
  heroBackground?: string;
  navbarTextColor?: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
  collectionSlug: string;
  cover?: string;
  date?: string;
  startDate?: string;
  endDate?: string;
  introText?: string;
  heroImage?: string; // specific for Branding / Visual top section
  heroBackgroundColor?: string; // legacy fallback: optional background color for hero section
  heroLottie?: string; // specific for Lottie hero animation
  navbarTextColor?: string; // legacy fallback: optional override for navbar text color (e.g. "black" or hex)
  theme?: CaseStudyTheme; // custom semantic theme configuration
  projectUrl?: string; // optional external link
  projectUrlVariant?: "primary" | "secondary";
  projectUrlText?: string;
  secondaryProjectUrl?: string;
  secondaryProjectUrlVariant?: "primary" | "secondary";
  secondaryProjectUrlText?: string;
  processSteps?: ProcessStep[]; // for UX/UI and custom case studies
  researchGraph?: ResearchGraphData | ResearchGraphData[];
  researchGraphs?: ResearchGraphData[];
  contentSections?: ZigZagSection[];
  gallery?: GalleryData;
  galleries?: GallerySection[];
  galleryTitle?: string;
  galleryDescription?: string;
  backgroundColor?: string; // legacy fallback: page background
  stopMotionData?: {
    images: string[];
    duration: number;
    alt: string;
  };
  prototype?: {
    title: string;
    src: string;
    width?: number | string;
    height?: number | string;
    aspectRatio?: string;
  };
};

export type FavoriteConfig = {
  slug: string;
  backgroundColor: string;
  headingColor: string;
  textColor: string;
  coverSrc?: string;
  buttonTheme?: "light" | "dark";
  blendMode?:
    | "normal"
    | "multiply"
    | "screen"
    | "overlay"
    | "darken"
    | "lighten"
    | "color-dodge"
    | "color-burn"
    | "hard-light"
    | "soft-light"
    | "difference"
    | "exclusion"
    | "hue"
    | "saturation"
    | "color"
    | "luminosity";
};
