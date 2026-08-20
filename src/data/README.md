# Portfolio Case Studies & Data Maintenance Guide

This document is the complete guide for maintaining, updating, and adding new case studies and collection content to the portfolio.

---

## 📁 Architecture Overview

The data layer is organized in `src/data/`:

```
src/data/
├── README.md                    # 📖 This maintenance guide
├── types.ts                     # TypeScript types and interfaces
├── collections.ts               # Collection categories metadata
├── favorites.ts                 # Landing page featured favorites config
├── case-studies/
│   ├── index.ts                 # Aggregates and exports all case studies
│   ├── branding.ts              # Branding case studies
│   ├── product-design.ts        # UX/UI & Product Design case studies
│   ├── editorial-and-print.ts   # Editorial, Books & Print case studies
│   ├── video-installations.ts   # Video Art & Installations case studies
│   ├── packaging-design.ts      # Packaging Design case studies
│   ├── photography.ts           # Photography essays & series
│   └── template.example.ts      # Quick copy-paste starter template
└── portfolio.ts                 # Central barrel export (backward compatibility)
```

---

## 🚀 How to Add a New Case Study

Follow these 3 simple steps to add a new project:

### Step 1: Open the Category File
Open the corresponding file in `src/data/case-studies/`:
- **Branding**: `src/data/case-studies/branding.ts`
- **Product Design (UX/UI)**: `src/data/case-studies/product-design.ts`
- **Editorial & Print**: `src/data/case-studies/editorial-and-print.ts`
- **Video Installations**: `src/data/case-studies/video-installations.ts`
- **Packaging Design**: `src/data/case-studies/packaging-design.ts`
- **Photography**: `src/data/case-studies/photography.ts`

### Step 2: Add the Case Study Object
Copy the template from [template.example.ts](./case-studies/template.example.ts) and fill in your project details.

```typescript
{
  slug: "my-new-project",
  title: "My New Project",
  excerpt: "Short overview of the project shown on cards and lists.",
  tags: ["Client Project", "Category", "2026"],
  collectionSlug: "branding", // Must match collection slug
  cover: "/case-studies/branding/my-new-project/cover.webp",
  date: "2026-03-01",
  backgroundColor: "#1D2855",
  introText: "Detailed intro story about the project...",
  // ... add optional sections as needed
}
```

### Step 3: Add Media Assets
Place your images/videos in `/public/case-studies/<collection>/<project-slug>/`.

> [!TIP]
> Next.js serves files from `/public/` at the root path, so `/public/case-studies/branding/my-project/cover.webp` is referenced as `"/case-studies/branding/my-project/cover.webp"`.

---

## 🎨 Layout Selection & Template Rules

The site automatically selects the layout template based on the `collectionSlug`:

| `collectionSlug` | Template Rendered | Layout Features |
| :--- | :--- | :--- |
| `branding` | `BrandingLayout` | Hero banner, intro, process bullets, ZigZag sections, media gallery |
| `product-design` | `UiUxLayout` | Hero Lottie/image, deep research bullets, personas, feature ZigZags, prototype |
| `editorial-and-print` | `VisualLayout` | Large format hero, clean intro, full & half width image spreads, galleries |
| `video-installations` | `VisualLayout` | Vimeo video player embeds, research bullets, sticker mockups, prototype |
| `packaging-design` | `VisualLayout` | Stop-motion cover player, process steps, 3D/bottle galleries, prototype |
| `photography` | `VisualLayout` | Dark mode aesthetic, photographic essay full-spread gallery |

---

## 📋 Comprehensive Field Reference

### 1. Core Identifiers

| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `slug` | `string` | **Yes** | Unique URL path segment (e.g. `cheetah` &rarr; `/cheetah`). |
| `title` | `string` | **Yes** | Display title of the project. |
| `excerpt` | `string` | **Yes** | 1-2 sentence preview text for cards and teasers. |
| `tags` | `string[]` | **Yes** | Array of badge tags (e.g. `["HIT BA", "App Design"]`). |
| `collectionSlug` | `string` | **Yes** | Category identifier (`"branding"`, `"product-design"`, etc.). |
| `cover` | `string` | Optional | Thumbnail path used on collection grids and teaser cards (`.webp`, `.svg`, `.mp4`). |
| `date` | `string` | Optional | Date string in `YYYY-MM-DD` format (e.g. `"2026-02-01"`). |
| `startDate` / `endDate` | `string` | Optional | For date range display if project spanned multiple dates. |

---

### 2. Styling & Navigation Overrides

| Field | Type | Description |
| :--- | :--- | :--- |
| `backgroundColor` | `string` | Hex or CSS color for the page background (e.g. `"#1D2855"`, `"#000000"`). |
| `navbarTextColor` | `string` | Color override for navbar text when contrasting against hero colors (e.g. `"black"`, `"#ffffff"`). |

---

### 3. Hero Section

| Field | Type | Description |
| :--- | :--- | :--- |
| `heroImage` | `string` | Image/SVG or looped video path for the top hero banner. |
| `heroBackgroundColor`| `string` | Background color for the hero banner container. |
| `heroLottie` | `string` | Path to a Lottie JSON file (e.g. `"/lottie/spod/hero-case-study.json"`). Replaces `heroImage` with animation. |

---

### 4. External Action Buttons

Add up to two call-to-action buttons below the intro text:

```typescript
projectUrl: "https://example.com",
projectUrlText: "Visit Website",
projectUrlVariant: "primary", // "primary" | "secondary"

secondaryProjectUrl: "https://sharonkisil.myportfolio.com",
secondaryProjectUrlText: "Collaborator's Portfolio",
secondaryProjectUrlVariant: "secondary",
```

---

### 5. Intro & Text Formatting

The `introText` property supports HTML tags for custom line breaks:

```typescript
introText: "First paragraph intro.<br/><br/>Second paragraph with <b>bold</b> text."
```

---

### 6. Process Steps, Research & Personas (`processSteps`)

Supports rich research lists, colored labels, and persona sections:

```typescript
processSteps: [
  {
    title: "The Research",
    text: "We conducted extensive user research with over 100 participants:",
    bullets: [
      {
        label: "70%",
        labelColor: "#55FF99", // custom label color
        labelWeight: "bold",
        text: " of students arrive ahead of time to campus."
      },
      "Simple bullet string without colored label"
    ],
    textAfter: "The research confirmed the necessity for this solution."
  },
  {
    title: "User Personas",
    text: "Based on our interviews, we created two personas:",
    bulletSections: [
      {
        title: "Persona A: The Busy Designer",
        bullets: [
          { text: "Needs quick access on mobile" },
          { text: "Prefers minimal cognitive load" }
        ]
      }
    ]
  }
]
```

---

### 7. Zig-Zag Feature Rows (`contentSections`)

Alternating text and image showcase blocks:

```typescript
contentSections: [
  {
    image: "/case-studies/branding/cheetah/brandmark.svg",
    title: "The Brandmark",
    text: "Constructed using rectangular and sharp lines to emphasize speed.",
    reverse: false // set to true to position image on the right
  },
  {
    image: "/case-studies/branding/cheetah/typography.svg",
    title: "Typography",
    text: "Savanna is a dynamic sans serif typeface designed specifically for the brand.",
    reverse: true // image right, text left
  }
]
```

---

### 8. Galleries & Video Embeds (`gallery`)

Showcases images and Vimeo videos in half or full grid widths:

```typescript
gallery: [
  // Full-width Image
  {
    src: "/case-studies/product-design/spod/explore-page.jpg",
    alt: "Explore Page",
    colSpan: "full"
  },
  // Half-width Image with explicit dimensions (helps prevent layout shift)
  {
    src: "/case-studies/branding/cheetah/mockups/packages.jpg",
    alt: "Packaging Mockup",
    colSpan: "half",
    width: 2339,
    height: 3307
  },
  // Embedded Vimeo Video
  {
    src: "", // empty when using vimeoSrc
    vimeoSrc: "https://player.vimeo.com/video/1171841024?badge=0&autopause=0",
    alt: "Video Showcase",
    colSpan: "full"
  }
]
```

---

### 9. Figma Prototype Embed (`prototype`)

Embeds interactive Figma prototypes in an iframe:

```typescript
prototype: {
  title: "Interactive App Prototype",
  src: "https://embed.figma.com/proto/...",
  width: 375,   // or 1440 for desktop
  height: 812   // or 900 for desktop
}
```

---

### 10. Stop-Motion Preview Player (`stopMotionData`)

Cycles through frames automatically with a specified frame duration:

```typescript
stopMotionData: {
  images: [
    "/case-studies/conceptual-design/tarantino/cover/cover-1.webp",
    "/case-studies/conceptual-design/tarantino/cover/cover-2.webp"
  ],
  duration: 0.8, // seconds per frame
  alt: "Tarantino Homage Cover"
}
```

---

## 🌟 Adding a Project to Landing Page Favorites

To feature a case study in the landing page favorites carousel:

1. In the case study object, set `favorite: true`.
2. Open `src/data/favorites.ts` and add an entry:

```typescript
{
  slug: "my-new-project",
  backgroundColor: "#101440",       // Slide background color
  headingColor: "#ffffff",          // Title text color
  textColor: "#ffffff",             // Description text color
  coverSrc: "/favorites/my-cover.webp", // Thumbnail or MP4 loop
  appearanceOrder: 1,               // 1-based order in carousel
  buttonTheme: "dark",              // "light" | "dark" (Optional)
  blendMode: "normal"               // CSS blend mode (Optional)
}
```

---

## 🗂️ Adding or Editing Collections

To add a new category or modify collection descriptions:
1. Edit `src/data/collections.ts`.
2. Ensure the `slug` matches the `collectionSlug` in your case studies.
3. If creating a new category file, add it under `src/data/case-studies/` and include it in `src/data/case-studies/index.ts`.

---

## 💡 Best Practices & Performance Tips

- **Image Formats**: Use `.webp` for photographs and mockups, and `.svg` for vector logos, typography samples, and icons.
- **Image Compression**: Keep large images under 500KB for rapid page loads.
- **Type Safety**: TypeScript will alert you if any required field is missing or misspelled. You can test types anytime with `npx tsc --noEmit`.
