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

  // Colors & Navbar customization (Optional)
  backgroundColor: "#0d1117",
  navbarTextColor: "#ffffff", // override header nav text color if needed

  // Hero Section (Optional)
  heroImage: "/case-studies/branding/project-slug/hero.svg",
  heroBackgroundColor: "#161b22",
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

  // Process Steps / Research / Personas (Optional, commonly used in UX/UI and Branding)
  processSteps: [
    {
      title: "The Problem",
      text: "Description of the problem space and challenges addressed.",
      bullets: [
        {
          label: "Research Finding: ",
          labelWeight: "bold",
          labelColor: "#FF7176",
          text: "Key statistic or takeaway from user research.",
        },
      ],
      textAfter: "Summary or closing note about this process step.",
    },
  ],

  // Zig-Zag Feature Showcase Rows (Optional)
  contentSections: [
    {
      image: "/case-studies/branding/project-slug/brandmark.svg",
      title: "The Brandmark",
      text: "Explanation of the design decisions behind the visual identity.",
      reverse: false, // set true to swap image and text position
    },
  ],

  // Gallery of Images & Media (Optional)
  gallery: [
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
