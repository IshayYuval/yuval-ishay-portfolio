"use client";

import React, { useContext, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { AnimationContext } from "@/components/utils/AnimationProvider";
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
}

export default function BoundingBoxAnimation({
  text,
  children,
  delay = 0.2,
  duration = 0.85,
  fadeBox = true,
  fadeBoxDelay = 0.4,
  fadeBoxDuration = 0.6,
  className = "",
  textClassName = "",
  boxClassName = "",
  as: Component = "span",
}: BoundingBoxAnimationProps) {
  const isBackNav = useContext(AnimationContext);
  const displayText = text ?? (typeof children === "string" ? children : "");

  const boxControls = useAnimationControls();
  const revealControls = useAnimationControls();

  useEffect(() => {
    if (isBackNav) {
      revealControls.set({ width: "100%" });
      boxControls.set({ opacity: 0, width: "100%" });
      return;
    }

    let isMounted = true;

    const runAnimation = async () => {
      // Initial state
      boxControls.set({ opacity: 0, scale: 0.95, width: "0%" });
      revealControls.set({ width: "0%" });

      if (delay > 0) {
        await new Promise((resolve) => setTimeout(resolve, delay * 1000));
      }
      if (!isMounted) return;

      // Phase 1: Bounding box appears closed on the x-axis
      await boxControls.start({
        opacity: 1,
        scale: 1,
        width: "0%",
        transition: { duration: 0.3, ease: "easeOut" },
      });
      if (!isMounted) return;

      // Brief pause before expanding
      await new Promise((resolve) => setTimeout(resolve, 60));
      if (!isMounted) return;

      // Phase 2: Scale/reveal to the right
      await Promise.all([
        boxControls.start({
          width: "100%",
          transition: { duration, ease: [0.16, 1, 0.3, 1] },
        }),
        revealControls.start({
          width: "100%",
          transition: { duration, ease: [0.16, 1, 0.3, 1] },
        }),
      ]);
      if (!isMounted) return;

      // Phase 3: Bounding box smoothly fades into the background
      if (fadeBox) {
        if (fadeBoxDelay > 0) {
          await new Promise((resolve) => setTimeout(resolve, fadeBoxDelay * 1000));
        }
        if (!isMounted) return;

        await boxControls.start({
          opacity: 0,
          transition: { duration: fadeBoxDuration, ease: "easeInOut" },
        });
      }
    };

    runAnimation();

    return () => {
      isMounted = false;
    };
  }, [
    boxControls,
    revealControls,
    isBackNav,
    delay,
    duration,
    fadeBox,
    fadeBoxDelay,
    fadeBoxDuration,
  ]);

  return (
    <Component className={`relative inline-flex items-baseline select-none ${className}`}>
      {/* 1. Ghost text reserving exact layout dimensions */}
      <span
        aria-hidden="true"
        className={`invisible select-none pointer-events-none tracking-tight whitespace-nowrap ${styles.ghostText}`}
      >
        {displayText}
      </span>

      {/* 2. Text reveal container (animates width from 0% to 100%) */}
      <motion.span
        initial={isBackNav ? { width: "100%" } : { width: "0%" }}
        animate={revealControls}
        className="absolute left-0 top-0 bottom-0 overflow-hidden inline-flex items-baseline z-20"
      >
        <span
          className={`relative tracking-tight whitespace-nowrap inline-block left-0 top-0 ${styles.text} ${textClassName}`}
        >
          {displayText}
        </span>
      </motion.span>

      {/* 3. Bounding Box Frame (Border, Background fill, and Handles) */}
      <motion.span
        initial={
          isBackNav
            ? { opacity: 0, scale: 1, width: "100%" }
            : { opacity: 0, scale: 0.95, width: "0%" }
        }
        animate={boxControls}
        style={{ transformOrigin: "left center" }}
        className={`absolute left-0 top-0 bottom-0 pointer-events-none inline-flex items-baseline z-10 ${styles.boundingBox} ${boxClassName}`}
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
      </motion.span>
    </Component>
  );
}
