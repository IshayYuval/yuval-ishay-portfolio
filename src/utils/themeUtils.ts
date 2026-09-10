import React from "react";
import { CaseStudy, CaseStudyTheme } from "@/data/types";

/**
 * Converts a CaseStudyTheme object into a CSS custom properties dictionary
 * for injection into the root of a case study layout container.
 */
export function getCaseStudyThemeStyles(theme?: CaseStudyTheme): React.CSSProperties {
  if (!theme) return {};

  const styles: Record<string, string> = {};

  if (theme.primaryColor) {
    styles["--theme-primary"] = theme.primaryColor;
  }
  if (theme.secondaryColor) {
    styles["--theme-secondary"] = theme.secondaryColor;
  }
  if (theme.surfaceColor) {
    styles["--theme-surface"] = theme.surfaceColor;
  }
  const surfaceMuted = theme.mutedSurfaceColor || theme.surfaceMutedColor;
  if (surfaceMuted) {
    styles["--theme-surface-muted"] = surfaceMuted;
  }
  if (theme.borderColor) {
    styles["--theme-border"] = theme.borderColor;
  }
  if (theme.pageBackground) {
    styles["--theme-page-background"] = theme.pageBackground;
  }
  if (theme.heroBackground) {
    styles["--theme-hero-background"] = theme.heroBackground;
  }
  if (theme.navbarTextColor) {
    styles["--theme-navbar-text"] = theme.navbarTextColor;
  }

  return styles as React.CSSProperties;
}

/**
 * Resolves the effective page background color, respecting theme first,
 * with backwards-compatible fallback to legacy backgroundColor.
 */
export function getResolvedPageBackground(study: CaseStudy): string | undefined {
  return study.theme?.pageBackground || study.backgroundColor;
}

/**
 * Resolves the effective hero container background color, respecting theme first,
 * with backwards-compatible fallback to legacy heroBackgroundColor.
 */
export function getResolvedHeroBackground(study: CaseStudy): string | undefined {
  return study.theme?.heroBackground || study.heroBackgroundColor;
}

/**
 * Resolves the effective navbar text color override, respecting theme first,
 * with backwards-compatible fallback to legacy navbarTextColor.
 */
export function getResolvedNavbarTextColor(study: CaseStudy): string | undefined {
  return study.theme?.navbarTextColor || study.navbarTextColor;
}
