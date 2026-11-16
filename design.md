# Portfolio Design Guidelines & System

> Comprehensive design system, visual specifications, motion principles, and component guidelines for Yuval Ishay's portfolio.

---

## 1. Design Philosophy & Metaphor

The portfolio's design language is built upon the **Vector Canvas & Design Tool Metaphor** (drawing inspiration from industry-standard tools like Figma). Rather than treating the portfolio as a passive document, elements behave like active canvas layers:

- **Interactive Precision**: Visual elements carry selection bounding boxes, transformation handles, and corner-radius manipulators.
- **Dark-First Immersion**: Deep space navy tones (`#10162C` / `#151E3D`) form an infinite canvas, punctuated by an electric cyan accent (`#8BFCF4`).
- **Canvas Dot Grid**: Subtle radial dot grids establish architectural structure and spatial depth.
- **Dynamic Adaptability**: Case studies can project their own chromatic identity through semantic CSS theme overrides while preserving consistent typographic and spatial rhythms.
- **Motion with Purpose**: Coordinated entrance choreography, spring physics, and robust accessibility (BFCache detection & `prefers-reduced-motion` compliance).

---

## 2. Color System & Tokens

All core colors and semantic tokens are defined as CSS custom properties in `src/app/globals.css`.

### 2.1 Brand Core Palette

| Token | Value | Role & Usage |
| :--- | :--- | :--- |
| `--color-brand-primary-500` | `#8BFCF4` | **Electric Cyan Accent** — Primary CTA button fill, bounding box borders, transformation handles, links, active states, text selection. |
| `--color-brand-primary-600` | `#7CE7E2` | Primary hover state and active focus rings. |
| `--color-brand-secondary-950`| `#10162C` | **Deep Obsidian Navy** — Root body background, default page background, dot-grid canvas base. |
| `--color-brand-secondary-950-subtle` | `rgba(16, 22, 44, 0.9)` | Frosted glass backgrounds, backdrop blurs, dropdown overlays. |
| `--color-brand-secondary-900`| `#151E3D` | **Deep Slate Navy** — Card backgrounds, containers, header dropdowns, contrast text on primary buttons. |
| `--color-brand-secondary-800`| `#182750` | Elevated surfaces, image placeholder backgrounds, secondary card states. |
| `--color-brand-secondary-700`| `#2B3662` | Card hover backdrop overlays (`bg-opacity-70`), secondary button hover state. |
| `--color-brand-secondary-600`| `#36437A` | Intermediate borders, tertiary surface elevations. |
| `--color-brand-secondary-500`| `#435499` | Default tag badge background, neutral highlight fills. |

### 2.2 Typography Colors

| Token | Value | Contrast & Usage |
| :--- | :--- | :--- |
| `--color-typography-header` | `#F8F8F8` | Primary headings (`H1`, `H2`, `H3`), logo mark, brand navigation links. High contrast on dark canvas. |
| `--color-typography-subheader` | `#E9E9E9` | Subtitles, subhero intro text (`.subhero`), medium emphasis labels. |
| `--color-typography-body` | `#D6D6D6` | Standard body copy (`.text-body`, `.text-body-large`), list bullets, metadata, descriptions. |
| `--muted` | `#888888` | Empty states, secondary timestamps, inactive icons. |
| `--muted-light` | `#F4F4F4` | Light-mode accent surfaces. |

### 2.3 Canvas Dot Grid Pattern

Used on the homepage hero masthead and designated canvas sections (`DotPattern.module.css`):

```css
.dotPattern {
  background-color: var(--color-brand-secondary-950); /* #10162C */
  background-image: radial-gradient(circle, rgba(139, 252, 244, 0.18) 1px, transparent 1.75px);
  background-size: 20px 20px;
  background-position: 0 0;
}
```

### 2.4 User Selection

Custom browser text selection matches the electric cyan accent:

```css
::selection {
  background-color: var(--color-brand-primary-500); /* #8BFCF4 */
  color: var(--color-brand-secondary-900);            /* #151E3D */
}
```

### 2.5 Semantic Theming (Per-Project Customization)

Individual case studies dynamically override global tokens via the `theme` object (`getCaseStudyThemeStyles` in `src/utils/themeUtils.ts`):

```css
:root {
  --theme-primary: var(--color-brand-primary-500);
  --theme-secondary: var(--color-brand-secondary-900);
  --theme-surface: var(--color-brand-secondary-500);
  --theme-surface-muted: var(--color-brand-secondary-800);
  --theme-border: transparent;
  --theme-page-background: var(--color-brand-secondary-900);
  --theme-hero-background: transparent;
  --theme-navbar-text: var(--color-typography-header);
}
```

- **Dynamic Navigation & Status Bar**: `DynamicThemeColor` monitors intersecting `data-bg-color` sections to update the browser's `<meta name="theme-color">` on mobile Safari/Chrome.
- **Header Synchronization**: When transparent, the navigation inherits `--theme-navbar-text`; on scroll or open dropdown, it transitions smoothly to `--theme-page-background` or default navy.

---

## 3. Typography Hierarchy & Scales

### 3.1 Typeface Specification

- **Primary Font Family**: `proxima-nova, sans-serif` (loaded through Adobe Typekit `https://use.typekit.net/rny1uhx.css`).
- **Font Smoothing**: `-webkit-font-smoothing: antialiased`, `-moz-osx-font-smoothing: grayscale`.
- **Text Alignment**: Left-aligned by default; centered on hero intros and specific case study headers.

### 3.2 Typographic Scale Across Breakpoints

| Element / Utility | Desktop (>1200px) | Laptop (≤1200px) | Tablet (≤768px) | Mobile (≤480px) | Weight & Transform |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **`h1`** | `3rem` (48px) / `4rem` | `2.5rem` / `3.25rem` | `2rem` / `2.75rem` | `1.35rem` / `1.875rem` | Bold (700), UPPERCASE |
| **`.subhero`** | `1.5rem` (24px) / `1.5rem` | `1.375rem` / `1.5rem` | `1.25rem` / `1.5rem` | `0.875rem` / `1.35rem` | Regular (400) |
| **`h2`** | `2rem` (32px) / `2.5rem` | `1.75rem` / `2.25rem` | `1.5rem` / `2rem` | `1.05rem` / `1.875rem` | Bold (700), UPPERCASE |
| **`h3`** | `1.5rem` (24px) / `2rem` | `1.375rem` / `1.875rem` | `1.25rem` / `1.75rem` | `1.125rem` / `1.5rem` | Bold (700) |
| **`h4`** | `1.125rem` (18px) / `1.5rem` | `1.0625rem` / `1.4375rem`| `1rem` / `1.375rem` | `1rem` / `1.375rem` | Bold (700) |
| **`h5`** | `1rem` (16px) / `1.25rem` | `0.9375rem` / `1.25rem` | `0.875rem` / `1.25rem` | `0.875rem` / `1.25rem` | Semibold (600) |
| **`.text-body`** | `1rem` (16px) / `1.4rem` | `0.9375rem` (15px) | `0.875rem` (14px) | `0.875rem` (14px) | Regular (400) |
| **`.text-body-large`** | `1.125rem` (18px) | `1.125rem` | `1rem` | `0.875rem` (14px) | Regular (400) |
| **`.text-caption`** | `0.75rem` (12px) | `0.75rem` | `0.75rem` | `0.75rem` | Regular (400) |
| **`.nav-link`** | `0.875rem` (14px) | `0.875rem` | `0.875rem` | `0.875rem` | Semibold (600), UPPERCASE |
| **`.footer-item`**| `0.875rem` (14px) | `0.875rem` | `0.875rem` | `0.875rem` | Semibold (600) |

### 3.3 Heading Construction & Accessibility Standards

Every heading featuring animated masks or custom word splitting must follow the **Accessible Pairing Pattern**:

```tsx
{/* 1. Screen-reader accessible label for screen readers and SEO crawlers */}
<h1 className="sr-only">Hey there, I'm Yuval!</h1>

{/* 2. Visual motion element hidden from accessibility tree */}
<motion.h1 aria-hidden="true" className="...">
  <AnimatedText text="Hey there, " />
  <AnimatedText text="I'm " />
  <AnimatedText text="Yuval!" className="emphasized-text" />
</motion.h1>
```

- **`.emphasized-text`**: Colors specific highlighted words with `--color-brand-primary-500`.
- **`whitespace-nowrap` & baseline alignment**: Compound name phrases ("Yuval Ishay") are grouped inside nowrap blocks to eliminate orphan word wraps across lines.

---

## 4. Bounding Box Design & Animations

The bounding box is the signature visual metaphor of the portfolio, celebrating the craft of UI/UX and visual design tools.

```
       (-5px,-5px)                                          (calc(W% - 5px), -5px)
          [■]──────────────────────[■]──────────────────────[■]
           │                        │ (Midpoint)             │
           │   (Corner Ring)        │                        │
           │      (◎)               │                        │
           │                                                 │
          [■]                   TEXT / CONTENT              [■] (Center-Right Handle)
           │                                                 │
           │                                                 │
           │      (◎)                                        │
           │                                                 │
          [■]──────────────────────[■]──────────────────────[■]
       (-5px, calc(H + 5px))                               (calc(W% - 5px), calc(H + 5px))
```

### 4.1 Bounding Box Visual Anatomy

| Component | Dimensions & Styling | Behavior |
| :--- | :--- | :--- |
| **Box Border** | `border: 2px solid var(--color-brand-primary-500)` (`#8BFCF4`) | Outlines the active layer boundary. |
| **Glow & Shadow** | `box-shadow: 0 10px 25px -5px rgba(0,0,0,0.4), 0 0 15px rgba(139,252,244,0.15)` | Provides elevation and soft neon luminance. |
| **Square Handles** | `10px × 10px` (`11px` on desktop), background `#FFFFFF`, `border: 2px solid #8BFCF4`, `box-sizing: border-box` | Positioned at corners and edge centers with an invisible `8px` expanded hit area (`::after`). |
| **Corner Radius Circles** | `18px × 18px` SVG concentric ring (`strokeWidth: 1.75px`, inner dot `r: 2.5px`, navy backdrop) | Mirrors Figma corner-radius nodes; allows dragging along the 45° diagonal to adjust radius. |
| **Radius Tooltip Pill** | Pill badge with `bg-[var(--color-brand-secondary-900)]` and cyan text | Displays `R: {radius}px` in real time during drag. |

### 4.2 Bounding Box Implementations

#### A. Interactive Dynamic Text Reveal (`RevealTextHeader.tsx`)
- **Location**: Homepage Masthead Hero (`"I'm Yuval Ishay, and I'm [Phrase]"`).
- **Behavior**:
  - Automatically cycles through rotating titles ("a Multidisciplinary designer", "a product designer", "a tech nerd", etc.).
  - **Draggable Scrubbing**: Users can grab the right handles (`cursor-ew-resize`) to collapse or expand the box horizontally. Dragging to collapse (`≤ 2%` width) triggers the next phrase.
  - Handles track the current width dynamically: `style={{ left: calc(${visibleWidthPercent}% - 5px) }}`.
  - Cycle timings: `DISPLAY_DURATION = 3000ms`, `ANIMATION_DURATION = 0.85s`, `INACTIVITY_DELAY = 1500ms`.

#### B. Scroll-Triggered Reveal Animation (`BoundingBoxAnimation.tsx`)
- **Location**: Section headings (`"Case Studies"`, `"Wanna see more?"`).
- **Phased Keyframe Sequence (`boxSequence` 2.21s)**:
  1. **0% - 13.57%**: Box fades in and scales (`scale(0.95) -> scale(1)`) while width is `0%`.
  2. **16.29% - 54.75%**: Box smoothly expands from `0%` to `100%` width using `cubic-bezier(0.16, 1, 0.3, 1)`, unveiling stationary text via `overflow: hidden`.
  3. **54.75% - 72.85%**: Box holds at `100%` width with handles visible.
  4. **72.85% - 100%**: Bounding box frame fades out, leaving pristine text in place.
- **Ghost Text Technique**: Invisible rendered text (`visibility: hidden`, `aria-hidden: true`) reserves exact layout height and width preventing content layout shifts (CLS).

#### C. Interactive Corner Radius Card (`CollectionCard.tsx`)
- **Location**: Category and collection cards.
- **Behavior**:
  - On hover: 2px cyan bounding box with 4 corner square handles and 4 midpoint handles appears.
  - Inside the card: 4 concentric circular handles appear at `(radius, radius)`.
  - **Interactive Drag**: Dragging diagonally alters `border-radius` dynamically between `0px` and `min(width, height) / 2`.
  - Double-click resets to default `--radius-md` (`16px`).

#### D. Draggable & Resizable Photo Stack (`AboutImageStack.tsx`)
- **Location**: About page interactive canvas.
- **Behavior**:
  - Image cards feature full 8-point bounding boxes (`tl`, `tc`, `tr`, `mr`, `br`, `bc`, `bl`, `ml`).
  - Active card brings itself to the highest z-index (`maxZIndexRef`).
  - Cards can be dragged around the canvas (`cursor-grab` / `cursor-grabbing`) or resized via handles with direction-aware cursors (`nwse-resize`, `nesw-resize`, `ns-resize`, `ew-resize`).
  - Double-clicking a card snaps its scale, position, and rotation back to default.

#### E. Resizable 404 Error State (`NotFound404.tsx`)
- **Location**: Custom 404 page.
- **Behavior**: Interactive bounding box around the `404` title allows the user to resize and stretch the numbers on canvas.

---

## 5. Animation System & Motion Guidelines

The portfolio pairs **Framer Motion 12** for component choreography with **optimized CSS transitions and keyframes** for low-level performance.

### 5.1 Easing Curves & Physics Tokens

| Motion Token / Curve | Definition | Purpose |
| :--- | :--- | :--- |
| **Spring Soft** | `{ type: "spring", damping: 12, stiffness: 100 }` | Word-by-word entrances, text reveals, playful bounce. |
| **Spring Crisp** | `{ type: "spring", damping: 20, stiffness: 200 }` | Grid item reveals, list item entrances. |
| **Canvas Smooth Ease** | `cubic-bezier(0.16, 1, 0.3, 1)` | Mask expansions, bounding box reveals. |
| **Page Transition Ease**| `[0.22, 1, 0.36, 1]` | Soft route transitions (`AnimatedPageTransition`). |
| **Fast Interaction** | `0.2s ease` (`--transition-fast`) | Button background/hover, color changes, active opacity. |
| **Scroll Easing** | `easeInOutCubic` (`4t³` / `1 - (-2t+2)³/2`) | Smooth 1500ms scroll-to-top and anchor navigation. |

### 5.2 Choreography & Stagger Standards

To establish clear visual hierarchy, elements enter in sequential waves:

```
[0.05s] Header / Static Words (stagger 0.04s)
   └── [0.35s] Bounding Box Handle Entrance
         └── [0.50s] Subhero Words (stagger 0.02s)
               └── [0.80s] Action Buttons (stagger 0.20s)
```

1. **Character Reveals (`AnimatedText` / `FavoriteCaseStudy`)**:
   - `staggerChildren: 0.04s`
   - Individual letters fade and slide from `y: 12px` to `0px`.
2. **Word Reveals (`HeroAnimatedContent` / `RevealTextHeader`)**:
   - `staggerChildren: 0.02s - 0.04s`
   - Delays: `0.05s` (Title), `0.5s` (Subhero).
3. **Card Grids (`Home` / `CollectionView`)**:
   - `staggerChildren: 0.15s`, `delayChildren: 0.5s`.
   - Cards slide up `y: 30px -> 0px` with opacity fade.
4. **Action Buttons**:
   - `staggerChildren: 0.2s`, `delayChildren: 0.8s` (Home) or `1.2s` (About).

### 5.3 Specialized Animations

#### Research Progress Rings (`PieGraph.tsx`)
- SVG circular track with animated progress stroke:
  ```tsx
  initial={{ strokeDashoffset: circumference }}
  whileInView={{ strokeDashoffset }}
  viewport={{ once: true, margin: "-20px" }}
  transition={{ duration: 1.2, ease: "easeOut" }}
  ```

#### Stop-Motion Media Player (`StopMotion.tsx`)
- Cycles through frames automatically on a configured interval (default `0.8s` per frame) to convey physical prototyping and craft.

#### Scroll-to-Top Floating Button (`ScrollToTop.tsx`)
- Hidden by default (`opacity: 0, translateY: 20px`).
- When `scrollY > 300px`: transitions to `opacity: 1, translateY: 0`.
- Hover triggers `translateY(-2px)` with intensified cyan glow.

### 5.4 Navigation Awareness & BFCache Safeguard (`AnimationProvider.tsx`)

A common flaw in modern animated portfolios is animations replaying jarringly when clicking the browser's "Back" button. This portfolio solves this with `AnimationProvider`:
- Listens to `pageshow` (`event.persisted`) and `popstate`.
- Sets `isBFCache = true` when restored from the Back-Forward Cache.
- Wraps application in `<MotionConfig reducedMotion={isBFCache ? "always" : "user"}>`.
- Re-entry bypasses entrance delay and presents fully revealed states instantaneously.

### 5.5 Accessibility (`prefers-reduced-motion`)

For users with motion sensitivity:
- Bounding box sequence animations are disabled; text renders at full width immediately.
- Decorative bounding frames and handles are hidden (`display: none`).
- Card transformations and smooth transitions default to instantaneous layout states.

---

## 6. Component Design Guidelines

### 6.1 Buttons (`Button.tsx`)

Supports both semantic `<button>` and Next.js `<Link>` with unified styles:

- **Primary Variant (`.btn-primary`)**:
  - Background: `var(--theme-primary, var(--color-brand-primary-500))`
  - Color: `var(--theme-secondary, var(--color-brand-secondary-900))`
  - Hover: `opacity: 0.9`
  - WhileTap: `{ scale: 0.98 }`
- **Secondary Variant (`.btn-secondary`)**:
  - Background: `transparent`
  - Color: `var(--theme-primary, var(--color-brand-primary-500))`
  - Border: `inset 0 0 0 1px var(--theme-primary, var(--color-brand-primary-500))`
  - Hover: `background-color: var(--theme-surface, var(--color-brand-secondary-700))`
- **Dark Mode Context Variants**:
  - `.btn-primary-dark` & `.btn-secondary-dark` for placement over light case study backgrounds.
- **Dimensions**:
  - Min-width: `7.5rem` (120px)
  - Border-radius: `0.675rem` (~11px)
  - Padding: `0.75rem 1.5rem` (Desktop), `0.75rem 1rem` (Tablet), `0.625rem 0.875rem` (Mobile).

### 6.2 Badge Tags (`Tag.tsx`)

- **Shape**: Fully rounded pill (`border-radius: 9999px`).
- **Padding**: `px-3 py-1` (Desktop), `px-2.5 py-0.5` (Mobile).
- **Background**: `var(--theme-surface, var(--color-brand-secondary-500))`.
- **Typography**: `0.875rem` (14px) / `1.25rem` (`0.75rem` on mobile).
- **Behavior**: Non-interactive tag badge (`pointer-events: none`).

### 6.3 Case Study Cards (`CaseStudyCard.tsx`)

- **Aspect Ratio**: `4:3` container with skeleton loading state (`Skeleton.tsx`).
- **Media Support**: Automatically renders images (`.webp`), looping muted videos (`.mp4`), or frame sequences (`StopMotion`).
- **Hover Reveal Overlay**:
  - Background: `rgba(43, 54, 98, 0.7)` (`--color-brand-secondary-700` at 70%) with `backdrop-blur(4px)`.
  - Content elements (Title, Date, Excerpt, Tags) slide up (`translate-y-4 -> translate-y-0`) with staggered CSS transitions (`50ms`, `75ms`, `100ms`).

### 6.4 Favorite Project Hero Rows (`FavoriteCaseStudy.tsx`)

- **Layout**: Full-bleed section occupying `min-h-[calc(100vh - var(--header-height))]`.
- **Media Column**: 1:1 square media presentation supporting custom CSS `mixBlendMode` overrides for clean asset integration.
- **Typography**: Large display title (`4xl` to `6xl`) with staggered letter-by-letter reveal and direct links to both the specific case study and category collection.

### 6.5 Layout Templates

The portfolio renders one of three layouts based on `collectionSlug`:

1. **`UiUxLayout` (`product-design`)**: Focused on user problem statements, personas, research graph metrics, interactive Figma prototype embed, and feature zig-zags.
2. **`BrandingLayout` (`branding`)**: Focused on brandmark geometry, brand guidelines, color palettes, and packaging mockups.
3. **`VisualLayout` (`editorial-and-print`, `photography`, `video-installations`, `packaging-design`)**: High-impact editorial layout with full-bleed spreads, Vimeo embeds, and lightbox gallery integration.

---

## 7. Spacing, Layout & Breakpoints

### 7.1 Spacing Tokens

- `--gap-md`: `1rem` (16px)
- `--gap-lg`: `2rem` (32px)
- `--gap-xl`: `3rem` (48px)
- `--padding-y-3xl`: `6rem` (96px)
- `--container-width`: `1400px`
- `--nav-height`: `80px`
- `--header-height`: `calc(var(--nav-height) + env(safe-area-inset-top, 0px))`

### 7.2 Responsive Breakpoints

| Breakpoint | Width | Adjustments |
| :--- | :--- | :--- |
| **`xs` / Mobile** | `< 480px` | Single-column grids, compact H1/H2 scales, reduced navbar side paddings (`1rem`). |
| **`sm` / Mobile landscape**| `480px - 768px` | Scaled button sizes, stacked hero buttons. |
| **`md` / Tablet** | `768px - 1024px` | 2-column collection grids, full desktop navigation hides into mobile menu drawer. |
| **`lg` / Laptop** | `1024px - 1200px` | Desktop navigation active, interactive About canvas enabled with scaled photo cards. |
| **`xl` / Desktop** | `> 1200px` | 3-column collection grids, max container clamp at `1400px`, full typography scale. |

### 7.3 Safe Area Inset Support

To deliver a native experience on iOS devices with notches and dynamic islands:
- `pt-[env(safe-area-inset-top,0px)]` on the sticky navigation bar.
- `pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))]` on the sticky footer.
- `viewportFit: "cover"` defined in Next.js viewport metadata.

---

## 8. Summary Checklist for New Features

When building a new page, component, or case study, ensure it aligns with these standards:

- [ ] **Canvas Contrast**: Uses `--color-brand-secondary-950` or `--theme-page-background` as the canvas ground.
- [ ] **Accent Color**: Uses `--color-brand-primary-500` (`#8BFCF4`) for interactive triggers and focus rings.
- [ ] **Typography**: Uses `proxima-nova, sans-serif`; headings are uppercase bold; accessible `sr-only` pairs are used for animated titles.
- [ ] **Bounding Boxes**: Employs the 2px cyan border with 10px white/cyan square handles and concentric corner circles when representing design elements.
- [ ] **Motion Standards**: Uses spring physics (`stiffness: 100`, `damping: 12`) or soft custom bezier easing; accounts for `reducedMotion` and BFCache via `AnimationContext`.
- [ ] **Responsiveness**: Tested across mobile (≤480px), tablet (≤768px), and wide desktop (>1200px).
- [ ] **Theme Meta**: Sections with custom background colors declare `data-bg-color="..."` to synchronize mobile browser status bars.
