"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import styles from "./BoundingBoxAnimation.module.css";

export interface BoundingBoxAnimationProps {
  /** The text string to animate and reveal */
  text?: string;
  children?: React.ReactNode;
  /** Delay before entrance animation starts (in seconds). Default: 0.2 */
  delay?: number;
  /** Duration of the width expansion reveal animation (in seconds). Default: 0.85 */
  duration?: number;
  /** Whether the bounding box fades into the background after text is revealed. Default: true */
  fadeBox?: boolean;
  /** Hold duration after text is revealed before fading out the box (in seconds). Default: 0.4 */
  fadeBoxDelay?: number;
  /** Duration of the box fade-out animation (in seconds). Default: 0.6 */
  fadeBoxDuration?: number;
  /** Additional class name for the root container */
  className?: string;
  /** Additional class name for the revealed text */
  textClassName?: string;
  /** Additional class name for the bounding box wrapper */
  boxClassName?: string;
  /** The HTML tag or React component to render as. Default: "span" */
  as?: React.ElementType;
  /** Whether to trigger the animation only when scrolled into view. Default: false */
  triggerOnView?: boolean;
  /** Viewport amount required to trigger when triggerOnView is true (0 to 1). Default: 0.5 */
  viewportAmount?: "some" | "all" | number;
}

export default function BoundingBoxAnimation({
  text,
  children,
  delay = 0.2,
  fadeBox = true,
  className = "",
  textClassName = "",
  boxClassName = "",
  as: Component = "span",
  triggerOnView = false,
  viewportAmount = 0.2,
}: BoundingBoxAnimationProps) {
  const displayText = text ?? (typeof children === "string" ? children : "");
  const [animationKey, setAnimationKey] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, {
    once: true,
    amount: viewportAmount,
  });

  const shouldAnimate = triggerOnView ? isInView : true;

  // Listen to popstate and pageshow to ensure the animation replays on browser back/forward navigation
  useEffect(() => {
    const handlePageShow = (event: PageTransitionEvent) => {
      // Only replay if restored from bfcache
      if (event.persisted) {
        setAnimationKey((prev) => prev + 1);
      }
    };

    const handlePopState = () => {
      setAnimationKey((prev) => prev + 1);
    };

    window.addEventListener("pageshow", handlePageShow);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const boxDelay = `${delay}s`;
  const revealDelay = `${delay + 0.36}s`;

  return (
    <Component
      ref={containerRef}
      className={`relative inline-flex items-baseline select-none ${className}`}
      style={
        {
          "--box-delay": boxDelay,
          "--reveal-delay": revealDelay,
        } as React.CSSProperties
      }
    >
      {/* 1. Ghost text reserving exact layout dimensions */}
      <span
        aria-hidden="true"
        className={`invisible select-none pointer-events-none tracking-tight whitespace-nowrap ${styles.ghostText}`}
      >
        {displayText}
      </span>

      {/* 2. Text reveal container (animates width from 0% to 100%) */}
      {shouldAnimate && (
        <span key={`reveal-${animationKey}`} className={styles.revealContainer}>
          <span
            className={`relative tracking-tight whitespace-nowrap inline-block left-0 top-0 ${styles.text} ${textClassName}`}
          >
            {displayText}
          </span>
        </span>
      )}

      {/* 3. Bounding Box Frame (Border, Background fill, and Handles) */}
      {shouldAnimate && (
        <span
          key={`box-${animationKey}`}
          className={`absolute left-0 top-0 bottom-0 pointer-events-none inline-flex items-baseline z-10 ${
            fadeBox ? styles.boundingBox : styles.boundingBoxNoFade
          } ${boxClassName}`}
        >
          {/* Top-Left Handle */}
          <span className={`absolute -top-[5px] -left-[5px] ${styles.handle}`} />

          {/* Bottom-Left Handle */}
          <span className={`absolute -bottom-[5px] -left-[5px] ${styles.handle}`} />

          {/* Top-Right Handle */}
          <span className={`absolute -top-[5px] -right-[5px] ${styles.handle}`} />

          {/* Bottom-Right Handle */}
          <span className={`absolute -bottom-[5px] -right-[5px] ${styles.handle}`} />

          {/* Center-Right Handle */}
          <span className={`absolute top-1/2 -translate-y-1/2 -right-[5px] ${styles.handle}`} />
        </span>
      )}
    </Component>
  );
}
