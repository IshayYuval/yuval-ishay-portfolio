"use client";

import React, { useState, useEffect, useRef, useCallback, useContext } from "react";
import { motion, Variants } from "framer-motion";
import { AnimationContext } from "@/components/utils/AnimationProvider";

const PHRASES = [
  "a multidisiplinary designer",
  "a product designer",
  "a product builder",
  "a typography lover",
  "a football fan",
  "a martial artist",
  "a tech nerd",
  "a conceptual thinker",
  "an autodidact",
  "a creative coder",
  "a coffee lover",
];

const STATIC_WORDS = ["I'm", "Yuval", "Ishay,", "and", "I'm"];

const DISPLAY_DURATION = 3000; // Duration phrase stays fully visible (ms)
const ANIMATION_DURATION = 0.85; // Mask hide/reveal duration in seconds
const HIDDEN_PAUSE_DURATION = 10; // Duration animation pauses at collapsed/hidden state before revealing (ms)
const INACTIVITY_DELAY = 1500; // Delay after user interaction before resuming auto cycle (ms)

const headerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.05,
    },
  },
};

const headerWordVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

const boxEntranceVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      delay: 0.35,
      ease: "easeOut",
    },
  },
};

export default function RevealTextHeader() {
  const isBackNav = useContext(AnimationContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  // visibleWidthPercent: 100% on backNav, 0% on initial entrance (closed state)
  const [visibleWidthPercent, setVisibleWidthPercent] = useState(isBackNav ? 100 : 0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(!isBackNav);
  const hasEnteredRef = useRef(isBackNav);

  const anchorRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLSpanElement>(null);
  const userTimerRef = useRef<NodeJS.Timeout | null>(null);
  const autoCycleTimerRef = useRef<NodeJS.Timeout | null>(null);
  const pauseTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isDraggingRef = useRef(false);
  const hasCollapsedDuringDragRef = useRef(false);
  const startXRef = useRef(0);
  const startWidthRef = useRef(100);
  const currentIndexRef = useRef(currentIndex);

  currentIndexRef.current = currentIndex;

  const hasStartedEntranceRevealRef = useRef(isBackNav);

  const startEntranceReveal = useCallback(() => {
    if (hasStartedEntranceRevealRef.current) return;
    hasStartedEntranceRevealRef.current = true;

    const durationMs = ANIMATION_DURATION * 1000;
    let revealStartTime: number | null = null;

    const stepReveal = (revealTimestamp: number) => {
      if (!revealStartTime) revealStartTime = revealTimestamp;
      const revealProgress = Math.min((revealTimestamp - revealStartTime) / durationMs, 1);
      const easeOut = 1 - (1 - revealProgress) * (1 - revealProgress);
      const currentRevealWidth = 100 * easeOut;
      setVisibleWidthPercent(currentRevealWidth);

      if (revealProgress < 1) {
        requestAnimationFrame(stepReveal);
      } else {
        setVisibleWidthPercent(100);
        setIsTransitioning(false);
      }
    };

    requestAnimationFrame(stepReveal);
  }, []);

  // Fallback entrance timer safeguard if onAnimationComplete is delayed
  useEffect(() => {
    if (isBackNav) return;

    const entranceTimer = setTimeout(() => {
      if (!hasStartedEntranceRevealRef.current) {
        startEntranceReveal();
      }
    }, 750);

    return () => clearTimeout(entranceTimer);
  }, [isBackNav, startEntranceReveal]);

  // Pick next random index (avoiding immediate duplicate)
  const getNextRandomIndex = useCallback((currentIdx: number) => {
    let nextIdx = Math.floor(Math.random() * PHRASES.length);
    while (nextIdx === currentIdx && PHRASES.length > 1) {
      nextIdx = Math.floor(Math.random() * PHRASES.length);
    }
    return nextIdx;
  }, []);

  // Animate width mask right-to-left (hide) and left-to-right (reveal)
  const triggerTransitionToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    const durationMs = ANIMATION_DURATION * 1000;
    const startValue = visibleWidthPercent;
    let hideStartTime: number | null = null;

    // Phase 1: Hide current word from right to LEFT (100% -> 0% width)
    const stepHide = (timestamp: number) => {
      if (!hideStartTime) hideStartTime = timestamp;
      const progress = Math.min((timestamp - hideStartTime) / durationMs, 1);
      const easeIn = progress * progress;
      const currentWidth = startValue * (1 - easeIn);
      setVisibleWidthPercent(currentWidth);

      if (progress < 1) {
        requestAnimationFrame(stepHide);
      } else {
        setVisibleWidthPercent(0);
        // Swap phrase
        const nextIdx = getNextRandomIndex(currentIndexRef.current);
        setCurrentIndex(nextIdx);

        // Pause at collapsed state before revealing next phrase
        if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
        pauseTimerRef.current = setTimeout(() => {
          // Phase 2: Reveal next word from left to RIGHT (0% -> 100% width)
          let revealStartTime: number | null = null;
          const stepReveal = (revealTimestamp: number) => {
            if (!revealStartTime) revealStartTime = revealTimestamp;
            const revealProgress = Math.min((revealTimestamp - revealStartTime) / durationMs, 1);
            const easeOut = 1 - (1 - revealProgress) * (1 - revealProgress);
            const currentRevealWidth = 100 * easeOut;
            setVisibleWidthPercent(currentRevealWidth);

            if (revealProgress < 1) {
              requestAnimationFrame(stepReveal);
            } else {
              setVisibleWidthPercent(100);
              setIsTransitioning(false);
            }
          };
          requestAnimationFrame(stepReveal);
        }, HIDDEN_PAUSE_DURATION);
      }
    };

    requestAnimationFrame(stepHide);
  }, [getNextRandomIndex, isTransitioning, visibleWidthPercent]);

  // Auto cycle effect
  useEffect(() => {
    if (isUserInteracting || isTransitioning) return;

    autoCycleTimerRef.current = setTimeout(() => {
      triggerTransitionToNext();
    }, DISPLAY_DURATION);

    return () => {
      if (autoCycleTimerRef.current) clearTimeout(autoCycleTimerRef.current);
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    };
  }, [currentIndex, isUserInteracting, isTransitioning, triggerTransitionToNext]);

  // Handle user interaction release delay
  const scheduleResumeAfterDelay = useCallback(() => {
    if (userTimerRef.current) clearTimeout(userTimerRef.current);

    userTimerRef.current = setTimeout(() => {
      setIsUserInteracting(false);
      if (visibleWidthPercent < 50) {
        triggerTransitionToNext();
      } else {
        setVisibleWidthPercent(100);
      }
    }, INACTIVITY_DELAY);
  }, [triggerTransitionToNext, visibleWidthPercent]);

  // Pointer drag handlers for resizing bounding box width (horizontal drag)
  const handlePointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    if (autoCycleTimerRef.current) clearTimeout(autoCycleTimerRef.current);
    if (userTimerRef.current) clearTimeout(userTimerRef.current);
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);

    setIsUserInteracting(true);
    isDraggingRef.current = true;
    hasCollapsedDuringDragRef.current = false;
    startXRef.current = e.clientX;
    startWidthRef.current = visibleWidthPercent;

    try {
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    } catch { }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current || !anchorRef.current) return;
    const deltaX = e.clientX - startXRef.current;
    const fullWidth = anchorRef.current.offsetWidth || 300;
    // Dragging RIGHT (deltaX > 0) increases width (reveals text left-to-right)
    // Dragging LEFT (deltaX < 0) decreases width (hides text right-to-left)
    const widthDelta = (deltaX / fullWidth) * 100;
    const newWidth = Math.max(0, Math.min(100, startWidthRef.current + widthDelta));

    if (newWidth <= 2) {
      if (!hasCollapsedDuringDragRef.current) {
        hasCollapsedDuringDragRef.current = true;
        const nextIdx = getNextRandomIndex(currentIndexRef.current);
        setCurrentIndex(nextIdx);
      }
    } else if (newWidth > 15) {
      hasCollapsedDuringDragRef.current = false;
    }

    setVisibleWidthPercent(newWidth);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch { }
    scheduleResumeAfterDelay();
  };

  return (
    <h1 className="inline-flex flex-wrap items-baseline gap-y-2 font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-left uppercase select-none">
      {/* Static Part - Split word-by-word animation */}
      <motion.span
        className="inline-flex flex-wrap items-baseline"
        variants={isBackNav ? undefined : headerContainerVariants}
        initial={isBackNav ? false : "hidden"}
        animate="visible"
      >
        {STATIC_WORDS.map((word, index) => (
          <motion.span
            key={index}
            className="inline-block text-[var(--color-typography-header)] tracking-tight whitespace-nowrap mr-[0.25em]"
            variants={isBackNav ? undefined : headerWordVariants}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>

      {/* Revealing Interactive Bounding Box Wrapper (Horizontal Reveal Left to Right) */}
      <motion.span
        ref={anchorRef}
        className="relative inline-flex items-baseline"
        variants={isBackNav ? undefined : boxEntranceVariants}
        initial={isBackNav ? false : "hidden"}
        animate="visible"
        onAnimationComplete={() => {
          if (!isBackNav && !hasStartedEntranceRevealRef.current) {
            startEntranceReveal();
          }
        }}
      >
        <span
          ref={containerRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className="relative inline-flex items-baseline cursor-ew-resize touch-none z-10"
        >
          {/* 1. Mask Box (Border + Background + Strict Overflow Hidden for Text) */}
          <span
            className="relative inline-flex items-baseline overflow-hidden border-2 border-[var(--color-brand-primary-500)] backdrop-blur-sm py-0.5 shadow-lg bg-[var(--color-brand-secondary-950)]/90"
            style={{
              width: `${visibleWidthPercent}%`,
            }}
          >
            {/* Stationary Text Phrase (Anchored at left: 0, top: 0, NEVER moves during mask) */}
            <span className="relative text-[var(--color-brand-primary-500)] tracking-tight whitespace-nowrap inline-block left-0 top-0 px-1 sm:px-3.5">
              {PHRASES[currentIndex]}
            </span>
          </span>

          {/* 2. Unclipped Handles Overlay (Visible outside the border, no clip-content) */}
          {/* Top-Left Corner Handle */}
          <span className="absolute -top-[5px] -left-[5px] w-2.5 h-2.5 bg-white border-2 border-[var(--color-brand-primary-500)] pointer-events-none z-30" />

          {/* Bottom-Left Corner Handle */}
          <span className="absolute -bottom-[5px] -left-[5px] w-2.5 h-2.5 bg-white border-2 border-[var(--color-brand-primary-500)] pointer-events-none z-30" />

          {/* Top-Right Corner Handle (Tracks visible width!) */}
          <span
            className="absolute -top-[5px] w-2.5 h-2.5 bg-white border-2 border-[var(--color-brand-primary-500)] pointer-events-none z-30"
            style={{ left: `calc(${visibleWidthPercent}% - 5px)` }}
          />

          {/* Bottom-Right Corner Handle (Tracks visible width!) */}
          <span
            className="absolute -bottom-[5px] w-2.5 h-2.5 bg-white border-2 border-[var(--color-brand-primary-500)] pointer-events-none z-30"
            style={{ left: `calc(${visibleWidthPercent}% - 5px)` }}
          />

          {/* Center-Right Handle Square (Tracks visible width, identical to corner squares) */}
          <span
            className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white border-2 border-[var(--color-brand-primary-500)] pointer-events-none z-30"
            style={{ left: `calc(${visibleWidthPercent}% - 5px)` }}
          />
        </span>
      </motion.span>
    </h1>
  );
}
