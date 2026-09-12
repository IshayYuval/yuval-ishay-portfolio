import { CaseStudy } from "../types";

/**
 * Case Study Starter Template
 *
 * Copy and paste this template into the corresponding category file:
 * - Branding:             `src/data/case-studies/branding.ts`
 * - Product Design (UX):  `src/data/case-studies/product-design.ts`
 * - Editorial & Print:    `src/data/case-studies/editorial-and-print.ts`
 * - Video Installations:  `src/data/case-studies/video-installations.ts`
 * - Packaging Design:     `src/data/case-studies/packaging-design.ts`
 * - Photography:          `src/data/case-studies/photography.ts`
 *
 * See `src/data/README.md` for full field explanations and examples.
 */
export const exampleCaseStudy: CaseStudy = {
  // Required core fields
  slug: "project-slug",
  title: "Project Title",
  excerpt: "Short 1-2 sentence overview for cards, lists, and previews.",
  tags: ["Category Tag", "Tool Tag", "Year"],
  collectionSlug: "branding", // Must match collection: "branding" | "product-design" | "editorial-and-print" | "video-installations" | "packaging-design" | "photography"
  date: "2026-01-01",

  // Cover image for collection grids / cards
  cover: "/case-studies/branding/project-slug/cover.webp",

  // Semantic Theme & Styling (Optional)
  theme: {
    pageBackground: "#0d1117",
    heroBackground: "#161b22",
    navbarTextColor: "#ffffff", // override header nav text color if needed
    primaryColor: "#58a6ff", // accent / CTA button fill / progress circle
    // secondaryColor: "#0d1117", // contrast text on primary buttons
    // surfaceColor: "#161b22", // tag and card surfaces
    // mutedSurfaceColor: "#21262d", // graph track circles / surface-on-surface (alias: surfaceMutedColor)
    // borderColor: "#30363d", // card borders
  },

  // Hero Section (Optional)
  heroImage: "/case-studies/branding/project-slug/hero.svg",
  // heroLottie: "/lottie/project-slug/animation.json", // Optional: replaces heroImage with animated Lottie

  // Introduction text (Supports HTML like <br/> or <br/><br/>)
  introText:
    "Detailed introduction explaining the context, background, and motivation of the project.",

  // External Action Links (Optional)
  projectUrl: "https://example.com",
  projectUrlText: "Live Project",
  projectUrlVariant: "primary", // "primary" | "secondary"
  // secondaryProjectUrl: "https://github.com",
  // secondaryProjectUrlText: "View Code",
  // secondaryProjectUrlVariant: "secondary",

  // Process Steps / Personas (Optional, commonly used in UX/UI and Branding)
  processSteps: [
    {
      title: "The Problem",
      text: "Description of the problem space and challenges addressed.",
      bullets: [
        {
          label: "Key Takeaway: ",
          labelWeight: "bold",
          labelColor: "#FF7176",
          text: "Important observation or learning.",
        },
      ],
      textAfter: "Summary or closing note about this process step.",
    },
  ],

  // Research Graphs (Optional - pie graphs for survey / research statistics)
  // researchGraph: {
  //   title: "The Research",
  //   description: "Survey conducted to understand core user pain points.",
  //   graphs: [
  //     {
  //       percentage: 75,
  //       text: "of users reported encountering the problem regularly.",
  //     },
  //     {
  //       percentage: 90,
  //       text: "expressed strong interest in an automated solution.",
  //     },
  //   ],
  //   textAfter: "The quantitative data clearly highlights the market need.",
  // },

  // Zig-Zag Feature Showcase Rows (Optional - supports title (h3) and description (text-body))
  // Can be an object with { title, description, items } or an array with contentSectionsTitle / contentSectionsDescription
  contentSections: [
    {
      image: "/case-studies/branding/project-slug/brandmark.svg",
      title: "The Brandmark",
      description: "Explanation of the design decisions behind the visual identity.",
      reverse: false, // set true to swap image and text position
    },
  ],

  // Gallery of Images & Media (Optional - supports title and description for the whole gallery)
  gallery: {
    title: "The Brand In Action",
    description: "Overview of visual assets and real-world mockups.",
    items: [
      {
        src: "/case-studies/branding/project-slug/mockup-1.webp",
        alt: "Project Mockup",
        colSpan: "half", // "full" | "half"
        width: 2000,
        height: 1500,
      },
      {
        src: "/case-studies/branding/project-slug/mockup-2.webp",
        alt: "Full-width Mockup",
        colSpan: "full",
      },
    ],
  },

  // Figma Prototype Embed (Optional)
  // prototype: {
  //   title: "Interactive Prototype",
  //   src: "https://embed.figma.com/proto/...",
  //   width: 1440,
  //   height: 900,
  // },

  // Stop Motion Sequence (Optional)
  // stopMotionData: {
  //   images: [
  //     "/case-studies/.../frame-1.webp",
  //     "/case-studies/.../frame-2.webp",
  //   ],
  //   duration: 0.8,
  //   alt: "Stop Motion Preview",
  // },
};
