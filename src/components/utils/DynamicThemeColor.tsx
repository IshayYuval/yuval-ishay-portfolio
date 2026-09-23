"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function normalizeColor(color: string): string {
  if (color.startsWith("var(")) {
    // If it's a CSS variable, resolve common project colors or read computed style
    if (color.includes("brand-secondary-950")) return "#10162C";
    if (color.includes("brand-secondary-900")) return "#151E3D";
    if (color.includes("brand-secondary-800")) return "#182750";
    if (typeof window !== "undefined") {
      const varName = color.slice(4, -1).trim();
      const resolved = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
      if (resolved) return resolved;
    }
  }
  return color;
}

export default function DynamicThemeColor() {
  const pathname = usePathname();

  useEffect(() => {
    let themeMeta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    if (!themeMeta) {
      themeMeta = document.createElement("meta");
      themeMeta.name = "theme-color";
      document.head.appendChild(themeMeta);
    }

    const defaultBg = "#10162C";
    let ticking = false;

    const updateColor = () => {
      ticking = false;
      const sections = document.querySelectorAll<HTMLElement>("[data-bg-color]");
      if (!sections.length) return;

      // Sample near the bottom edge of the viewport where Safari's toolbar is located
      const sampleY = window.innerHeight - 30;
      let activeColor = defaultBg;

      for (let i = 0; i < sections.length; i++) {
        const el = sections[i];
        if (el.classList.contains("invisible") || el.style.display === "none") {
          continue;
        }
        const rect = el.getBoundingClientRect();
        // If the section is currently occupying or near sampleY
        if (rect.top <= sampleY && rect.bottom >= 40) {
          activeColor = normalizeColor(el.dataset.bgColor || defaultBg);
        }
      }

      if (themeMeta && themeMeta.content !== activeColor) {
        themeMeta.content = activeColor;
      }
      if (document.body.style.backgroundColor !== activeColor) {
        document.body.style.backgroundColor = activeColor;
      }
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateColor);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    // Initial check
    updateColor();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      document.body.style.backgroundColor = "";
      if (themeMeta) {
        themeMeta.content = defaultBg;
      }
    };
  }, [pathname]);

  return null;
}
