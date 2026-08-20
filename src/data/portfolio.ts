/**
 * Central Data Barrel Export
 *
 * Provides backward-compatible entrypoints for all components and pages
 * importing from `@/data/portfolio`.
 *
 * Modules are organized cleanly in:
 * - `src/data/types.ts`                 - TypeScript interfaces and type models
 * - `src/data/collections.ts`           - Collection categories metadata
 * - `src/data/favorites.ts`             - Landing page featured favorites config
 * - `src/data/case-studies/`            - Category-specific case study files
 * - `src/data/README.md`                - Maintenance guide & feature documentation
 */

export * from "./types";
export * from "./collections";
export * from "./favorites";
export * from "./case-studies";
