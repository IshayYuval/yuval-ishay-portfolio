"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import styles from "./AboutImageStack.module.css";

interface ImageConfig {
  id: string;
  src: string;
  alt: string;
  aspectRatio: number;
  defaultWidth: number;
  defaultHeight: number;
  defaultPos: { x: number; y: number };
  defaultRotate: number;
  entranceOffset: { x: number; y: number; rotate: number };
  scrollThreshold: number;
  resetThreshold: number;
}

const IMAGES: ImageConfig[] = [
  {
    id: "museum",
    src: "/about/museum-2.webp",
    alt: "Beit Ariela exhibition catalogue",
    aspectRatio: 4284 / 3213, // 4:3 landscape
    defaultWidth: 495,
    defaultHeight: Math.round(495 / (4284 / 3213)), // ~371
    defaultPos: { x: -15, y: -20 },
    defaultRotate: -3,
    entranceOffset: { x: -80, y: -160, rotate: -6 },
    scrollThreshold: 0,
    resetThreshold: -1,
  },
  {
    id: "lama",
    src: "/about/lama.webp",
    alt: "Yuval with a llama",
    aspectRatio: 1417 / 1890,
    defaultWidth: 395,
    defaultHeight: Math.round(395 / (1417 / 1890)), // ~527
    defaultPos: { x: 30, y: -10 },
    defaultRotate: 3,
    entranceOffset: { x: 80, y: -160, rotate: 6 },
    scrollThreshold: 0.14,
    resetThreshold: 0.05,
  },
  {
    id: "iceland",
    src: "/about/Iceland.webp",
    alt: "Yuval in Iceland",
    aspectRatio: 1463 / 828,
    defaultWidth: 505,
    defaultHeight: Math.round(505 / (1463 / 828)), // ~286
    defaultPos: { x: -25, y: -55 },
    defaultRotate: -4,
    entranceOffset: { x: -90, y: -150, rotate: -7 },
    scrollThreshold: 0.30,
    resetThreshold: 0.18,
  },
  {
    id: "slovakia",
    src: "/about/slovakia.webp",
    alt: "Yuval in Slovakia",
    aspectRatio: 1417 / 1890,
    defaultWidth: 385,
    defaultHeight: Math.round(385 / (1417 / 1890)), // ~513
    defaultPos: { x: 35, y: 35 },
    defaultRotate: 4,
    entranceOffset: { x: 70, y: -170, rotate: 8 },
    scrollThreshold: 0.48,
    resetThreshold: 0.36,
  },
  {
    id: "lenny",
    src: "/about/Lenny.webp",
    alt: "Lenny",
    aspectRatio: 1417 / 1890,
    defaultWidth: 375,
    defaultHeight: Math.round(375 / (1417 / 1890)), // ~500
    defaultPos: { x: -30, y: 40 },
    defaultRotate: -3,
    entranceOffset: { x: -80, y: -160, rotate: -6 },
    scrollThreshold: 0.66,
    resetThreshold: 0.54,
  },
  {
    id: "user-testing",
    src: "/about/user%20testing.webp",
    alt: "User testing session",
    aspectRatio: 1417 / 1890,
    defaultWidth: 405,
    defaultHeight: Math.round(405 / (1417 / 1890)), // ~540
    defaultPos: { x: 10, y: 15 },
    defaultRotate: 1,
    entranceOffset: { x: 0, y: -190, rotate: 4 },
    scrollThreshold: 0.84,
    resetThreshold: 0.72,
  },
];

type HandleDirection = "tl" | "tc" | "tr" | "mr" | "br" | "bc" | "bl" | "ml";

interface CardState {
  pos: { x: number; y: number };
  size: { width: number; height: number };
  rotate: number;
  zIndex: number;
  hasAppeared: boolean;
  isEntering: boolean;
  hasInteracted: boolean;
}

export default function AboutImageStack() {
  const { scrollYProgress } = useScroll();
  const [scaleFactor, setScaleFactor] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  const maxZIndexRef = useRef(20);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ width: 700, height: 900 });

  // Measure canvas container size and update on resize
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const mobile = width < 1024;
      setIsMobile(mobile);

      if (width < 640) {
        setScaleFactor(0.52);
      } else if (width < 1024) {
        setScaleFactor(0.72);
      } else if (width < 1440) {
        setScaleFactor(0.96);
      } else {
        setScaleFactor(1.02);
      }

      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          setContainerSize({ width: rect.width, height: rect.height });
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Initialize individual card states
  const [cardsState, setCardsState] = useState<Record<string, CardState>>(() => {
    const initial: Record<string, CardState> = {};
    IMAGES.forEach((img, idx) => {
      initial[img.id] = {
        pos: { ...img.defaultPos },
        size: { width: img.defaultWidth, height: img.defaultHeight },
        rotate: img.defaultRotate,
        zIndex: 10 + idx,
        hasAppeared: false,
        isEntering: false,
        hasInteracted: false,
      };
    });
    return initial;
  });

  // Trigger Image 0 on initial mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setCardsState((prev) => {
        const firstId = IMAGES[0].id;
        const first = prev[firstId];
        if (!first || first.hasAppeared) return prev;
        maxZIndexRef.current += 1;
        return {
          ...prev,
          [firstId]: {
            ...first,
            zIndex: maxZIndexRef.current,
            hasAppeared: true,
            isEntering: true,
          },
        };
      });
    }, 450);
    return () => clearTimeout(timer);
  }, []);

  // Handle scroll threshold triggers
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    setCardsState((prev) => {
      let changed = false;
      const next = { ...prev };

      IMAGES.forEach((img) => {
        const state = next[img.id];
        if (!state) return;

        // Entrance trigger: user scrolls down to or past threshold
        if (progress >= img.scrollThreshold && !state.hasAppeared) {
          maxZIndexRef.current += 1;
          next[img.id] = {
            ...state,
            zIndex: maxZIndexRef.current,
            hasAppeared: true,
            isEntering: true,
          };
          changed = true;
        }
        // Reset trigger: user scrolls back up past reset threshold (only if card was not manually interacted with)
        else if (
          img.resetThreshold >= 0 &&
          progress < img.resetThreshold &&
          state.hasAppeared &&
          !state.hasInteracted
        ) {
          next[img.id] = {
            ...state,
            hasAppeared: false,
            isEntering: false,
            pos: { ...img.defaultPos },
            size: { width: img.defaultWidth, height: img.defaultHeight },
            rotate: img.defaultRotate,
          };
          changed = true;
        }
      });

      return changed ? next : prev;
    });
  });

  // Bring card to front of stack
  const bringToFront = useCallback((id: string) => {
    maxZIndexRef.current += 1;
    const newZ = maxZIndexRef.current;
    setCardsState((prev) => {
      const current = prev[id];
      if (!current || current.zIndex === newZ) return prev;
      return {
        ...prev,
        [id]: {
          ...current,
          zIndex: newZ,
        },
      };
    });
  }, []);

  // Double-click to reset card to default
  const handleDoubleClick = useCallback((id: string) => {
    const config = IMAGES.find((img) => img.id === id);
    if (!config) return;
    setCardsState((prev) => {
      const current = prev[id];
      if (!current) return prev;
      return {
        ...prev,
        [id]: {
          ...current,
          pos: { ...config.defaultPos },
          size: { width: config.defaultWidth, height: config.defaultHeight },
          rotate: config.defaultRotate,
          hasInteracted: false,
        },
      };
    });
  }, []);

  return (
    <div ref={containerRef} className={styles.stackContainer}>
      {IMAGES.map((imgConfig) => {
        const card = cardsState[imgConfig.id];
        if (!card) return null;

        return (
          <ImageCard
            key={imgConfig.id}
            config={imgConfig}
            cardState={card}
            scaleFactor={scaleFactor}
            containerSize={containerSize}
            containerRef={containerRef}
            isMobile={isMobile}
            isHovered={!isMobile && hoveredCardId === imgConfig.id}
            onHoverChange={(isHovered) => {
              if (isMobile) return;
              setHoveredCardId(isHovered ? imgConfig.id : null);
            }}
            onInteractingChange={(isInteracting) => {
              if (isMobile) return;
              if (isInteracting) bringToFront(imgConfig.id);
            }}
            onCardStateChange={(updater) => {
              setCardsState((prev) => {
                const current = prev[imgConfig.id];
                if (!current) return prev;
                return {
                  ...prev,
                  [imgConfig.id]: updater(current),
                };
              });
            }}
            onDoubleClick={() => {
              if (isMobile) return;
              handleDoubleClick(imgConfig.id);
            }}
            onEntranceComplete={() => {
              setCardsState((prev) => {
                const current = prev[imgConfig.id];
                if (!current) return prev;
                return {
                  ...prev,
                  [imgConfig.id]: {
                    ...current,
                    isEntering: false,
                  },
                };
              });
            }}
          />
        );
      })}
    </div>
  );
}

interface ImageCardProps {
  config: ImageConfig;
  cardState: CardState;
  scaleFactor: number;
  containerSize: { width: number; height: number };
  containerRef: React.RefObject<HTMLDivElement | null>;
  isMobile: boolean;
  isHovered: boolean;
  onHoverChange: (isHovered: boolean) => void;
  onInteractingChange: (isInteracting: boolean) => void;
  onCardStateChange: (updater: (prev: CardState) => CardState) => void;
  onDoubleClick: () => void;
  onEntranceComplete: () => void;
}

function ImageCard({
  config,
  cardState,
  scaleFactor,
  containerSize,
  containerRef,
  isMobile,
  isHovered,
  onHoverChange,
  onInteractingChange,
  onCardStateChange,
  onDoubleClick,
  onEntranceComplete,
}: ImageCardProps) {
  const [isDraggingCard, setIsDraggingCard] = useState(false);
  const [isResizingHandle, setIsResizingHandle] = useState(false);
  const [isRebounding, setIsRebounding] = useState(false);

  const isDraggingRef = useRef(false);
  const isResizingRef = useRef(false);
  const dragStartRef = useRef<{ pointerX: number; pointerY: number; cardX: number; cardY: number } | null>(null);
  const resizeStartRef = useRef<{
    handle: HandleDirection;
    pointerX: number;
    pointerY: number;
    width: number;
    height: number;
  } | null>(null);

  const lastPointerRef = useRef<{ x: number; y: number; time: number }>({ x: 0, y: 0, time: 0 });
  const velocityRef = useRef<{ vx: number; vy: number }>({ vx: 0, vy: 0 });

  const isVisible = cardState.hasAppeared;
  const isBoundingBoxActive =
    cardState.isEntering || isHovered || isDraggingCard || isResizingHandle;

  // Calculates the physical borders of the canvas for the current card size
  const getBounds = useCallback(
    (cardW: number, cardH: number) => {
      const padX = 20;
      const padTop = 75; // clears sticky navbar
      const padBottom = 95; // clears footer/bottom when scrolled into viewport

      const halfW = containerSize.width / (2 * scaleFactor);
      const halfH = containerSize.height / (2 * scaleFactor);
      const halfCardW = cardW / 2;
      const halfCardH = cardH / 2;

      let minX = -halfW + halfCardW + padX;
      let maxX = halfW - halfCardW - padX;

      let minY = -halfH + padTop / scaleFactor + halfCardH;
      let maxY = halfH - halfCardH - padBottom;

      if (minX > maxX) {
        minX = 0;
        maxX = 0;
      }
      if (minY > maxY) {
        minY = 0;
        maxY = 0;
      }

      return { minX, maxX, minY, maxY };
    },
    [containerSize.width, containerSize.height, scaleFactor]
  );

  // --- Pointer Drag Handlers (Moving Card) ---
  const endCardDrag = useCallback(() => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDraggingCard(false);
    onInteractingChange(false);
    dragStartRef.current = null;

    const { minX, maxX, minY, maxY } = getBounds(cardState.size.width, cardState.size.height);

    // Momentum / throw distance projection
    const momentum = 0.14;
    const projectedX = cardState.pos.x + (velocityRef.current.vx * momentum) / scaleFactor;
    const projectedY = cardState.pos.y + (velocityRef.current.vy * momentum) / scaleFactor;

    let hitWall = false;
    let targetX = projectedX;
    let targetY = projectedY;

    // Check horizontal walls and calculate rebound off the wall edge
    if (projectedX > maxX) {
      const overshoot = projectedX - maxX;
      const reboundDist = Math.min(110, Math.max(35, overshoot * 0.45));
      targetX = maxX - reboundDist;
      hitWall = true;
    } else if (projectedX < minX) {
      const overshoot = minX - projectedX;
      const reboundDist = Math.min(110, Math.max(35, overshoot * 0.45));
      targetX = minX + reboundDist;
      hitWall = true;
    }

    // Check vertical walls and calculate rebound off the wall edge
    if (projectedY > maxY) {
      const overshoot = projectedY - maxY;
      const reboundDist = Math.min(95, Math.max(30, overshoot * 0.45));
      targetY = maxY - reboundDist;
      hitWall = true;
    } else if (projectedY < minY) {
      const overshoot = minY - projectedY;
      const reboundDist = Math.min(95, Math.max(30, overshoot * 0.45));
      targetY = minY + reboundDist;
      hitWall = true;
    }

    // If card was held past boundary when released
    if (cardState.pos.x > maxX) {
      targetX = maxX - 40;
      hitWall = true;
    } else if (cardState.pos.x < minX) {
      targetX = minX + 40;
      hitWall = true;
    }
    if (cardState.pos.y > maxY) {
      targetY = maxY - 35;
      hitWall = true;
    } else if (cardState.pos.y < minY) {
      targetY = minY + 35;
      hitWall = true;
    }

    const clampedX = Math.round(Math.max(minX, Math.min(maxX, targetX)));
    const clampedY = Math.round(Math.max(minY, Math.min(maxY, targetY)));

    setIsRebounding(hitWall);

    onCardStateChange((prev) => ({
      ...prev,
      pos: { x: clampedX, y: clampedY },
      hasInteracted: true,
    }));
  }, [
    cardState.pos.x,
    cardState.pos.y,
    cardState.size.width,
    cardState.size.height,
    getBounds,
    onCardStateChange,
    onInteractingChange,
    scaleFactor,
  ]);

  const endResize = useCallback(() => {
    if (!isResizingRef.current) return;
    isResizingRef.current = false;
    setIsResizingHandle(false);
    onInteractingChange(false);
    resizeStartRef.current = null;

    // Rebound back if the resized shape now extends outside canvas borders
    const { minX, maxX, minY, maxY } = getBounds(cardState.size.width, cardState.size.height);
    const safeX = Math.round(Math.max(minX, Math.min(maxX, cardState.pos.x)));
    const safeY = Math.round(Math.max(minY, Math.min(maxY, cardState.pos.y)));

    if (safeX !== cardState.pos.x || safeY !== cardState.pos.y) {
      setIsRebounding(true);
      onCardStateChange((prev) => ({
        ...prev,
        pos: { x: safeX, y: safeY },
        hasInteracted: true,
      }));
    }
  }, [
    cardState.pos.x,
    cardState.pos.y,
    cardState.size.width,
    cardState.size.height,
    getBounds,
    onCardStateChange,
    onInteractingChange,
  ]);

  // Window release listeners to guarantee drag / resize releases even outside browser or elements
  useEffect(() => {
    if (!isDraggingCard && !isResizingHandle) return;

    const handleWindowPointerUp = () => {
      if (isDraggingRef.current) {
        endCardDrag();
      }
      if (isResizingRef.current) {
        endResize();
      }
    };

    const handleWindowPointerMove = (e: PointerEvent) => {
      if (e.buttons === 0) {
        handleWindowPointerUp();
        return;
      }
      if (isDraggingRef.current && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        if (
          e.clientX >= rect.right - 2 ||
          e.clientX <= rect.left + 2 ||
          e.clientY <= rect.top + 2 ||
          e.clientY >= rect.bottom - 2
        ) {
          handleWindowPointerUp();
        }
      }
    };

    window.addEventListener("pointerup", handleWindowPointerUp);
    window.addEventListener("pointercancel", handleWindowPointerUp);
    window.addEventListener("pointermove", handleWindowPointerMove);
    window.addEventListener("blur", handleWindowPointerUp);
    return () => {
      window.removeEventListener("pointerup", handleWindowPointerUp);
      window.removeEventListener("pointercancel", handleWindowPointerUp);
      window.removeEventListener("pointermove", handleWindowPointerMove);
      window.removeEventListener("blur", handleWindowPointerUp);
    };
  }, [isDraggingCard, isResizingHandle, endCardDrag, endResize, containerRef]);

  const handleCardPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isMobile || e.button !== 0) return;
    e.preventDefault();
    e.stopPropagation();

    isDraggingRef.current = true;
    setIsDraggingCard(true);
    setIsRebounding(false);
    onInteractingChange(true);

    dragStartRef.current = {
      pointerX: e.clientX,
      pointerY: e.clientY,
      cardX: cardState.pos.x,
      cardY: cardState.pos.y,
    };

    lastPointerRef.current = { x: e.clientX, y: e.clientY, time: performance.now() };
    velocityRef.current = { vx: 0, vy: 0 };

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {}
  };

  const handleCardPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const dragStart = dragStartRef.current;
    if (!isDraggingRef.current || !dragStart) return;

    // 1. If mouse button was released, release immediately
    if (e.buttons === 0) {
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {}
      endCardDrag();
      return;
    }

    // 2. When cursor leaves the stack container (e.g. moving into the text container), release immediately
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      if (
        e.clientX >= rect.right - 2 ||
        e.clientX <= rect.left + 2 ||
        e.clientY <= rect.top + 2 ||
        e.clientY >= rect.bottom - 2
      ) {
        try {
          e.currentTarget.releasePointerCapture(e.pointerId);
        } catch {}
        endCardDrag();
        return;
      }
    }

    const now = performance.now();
    const dt = Math.max(8, now - lastPointerRef.current.time);
    const currentVx = ((e.clientX - lastPointerRef.current.x) / dt) * 1000;
    const currentVy = ((e.clientY - lastPointerRef.current.y) / dt) * 1000;

    velocityRef.current = {
      vx: velocityRef.current.vx * 0.35 + currentVx * 0.65,
      vy: velocityRef.current.vy * 0.35 + currentVy * 0.65,
    };
    lastPointerRef.current = { x: e.clientX, y: e.clientY, time: now };

    const dx = (e.clientX - dragStart.pointerX) / scaleFactor;
    const dy = (e.clientY - dragStart.pointerY) / scaleFactor;
    const rawX = dragStart.cardX + dx;
    const rawY = dragStart.cardY + dy;

    const { minX, maxX, minY, maxY } = getBounds(cardState.size.width, cardState.size.height);

    // Elastic resistance when pulled beyond canvas boundary
    let elasticX = rawX;
    if (rawX < minX) elasticX = minX + (rawX - minX) * 0.22;
    else if (rawX > maxX) elasticX = maxX + (rawX - maxX) * 0.22;

    let elasticY = rawY;
    if (rawY < minY) elasticY = minY + (rawY - minY) * 0.22;
    else if (rawY > maxY) elasticY = maxY + (rawY - maxY) * 0.22;

    const newX = Math.round(elasticX);
    const newY = Math.round(elasticY);

    onCardStateChange((prev) => ({
      ...prev,
      pos: {
        x: newX,
        y: newY,
      },
      hasInteracted: true,
    }));
  };

  const handleCardPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}
    endCardDrag();
  };

  // --- Pointer Resize Handlers (Bounding Box Handles) ---
  const handleHandlePointerDown = (
    handleDir: HandleDirection,
    e: React.PointerEvent<HTMLSpanElement>
  ) => {
    if (isMobile || e.button !== 0) return;
    e.preventDefault();
    e.stopPropagation();

    isResizingRef.current = true;
    setIsResizingHandle(true);
    setIsRebounding(false);
    onInteractingChange(true);

    resizeStartRef.current = {
      handle: handleDir,
      pointerX: e.clientX,
      pointerY: e.clientY,
      width: cardState.size.width,
      height: cardState.size.height,
    };

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {}
  };

  const handleHandlePointerMove = (e: React.PointerEvent<HTMLSpanElement>) => {
    const resizeStart = resizeStartRef.current;
    if (!isResizingRef.current || !resizeStart) return;

    if (e.buttons === 0) {
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {}
      endResize();
      return;
    }

    const { handle, pointerX, pointerY, width: startW } = resizeStart;
    const dx = (e.clientX - pointerX) / scaleFactor;
    const dy = (e.clientY - pointerY) / scaleFactor;
    const ratio = config.aspectRatio;

    let targetW = startW;

    // Corner handle proportional resize
    if (handle === "br") {
      const delta = (dx + dy * ratio) / 2;
      targetW = startW + delta * 2;
    } else if (handle === "tl") {
      const delta = (-dx - dy * ratio) / 2;
      targetW = startW + delta * 2;
    } else if (handle === "tr") {
      const delta = (dx - dy * ratio) / 2;
      targetW = startW + delta * 2;
    } else if (handle === "bl") {
      const delta = (-dx + dy * ratio) / 2;
      targetW = startW + delta * 2;
    }
    // Midpoint handle proportional resize
    else if (handle === "mr") {
      targetW = startW + dx * 2;
    } else if (handle === "ml") {
      targetW = startW - dx * 2;
    } else if (handle === "bc") {
      targetW = startW + (dy * ratio) * 2;
    } else if (handle === "tc") {
      targetW = startW - (dy * ratio) * 2;
    }

    // Maximum size: bounded by the image stack container size
    const maxContainerW = containerSize.width / scaleFactor;
    const maxContainerH = containerSize.height / scaleFactor;
    const maxAllowedW = Math.floor(Math.min(maxContainerW, maxContainerH * ratio));

    // Clamping min (160) and max size (size of the image stack container)
    const clampedW = Math.max(160, Math.min(maxAllowedW, Math.round(targetW)));
    const clampedH = Math.round(clampedW / ratio);

    onCardStateChange((prev) => ({
      ...prev,
      size: { width: clampedW, height: clampedH },
      hasInteracted: true,
    }));
  };

  const handleHandlePointerUp = (e: React.PointerEvent<HTMLSpanElement>) => {
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}
    endResize();
  };

  const cardWidth = Math.round(cardState.size.width * scaleFactor);
  const cardHeight = Math.round(cardState.size.height * scaleFactor);
  const posX = Math.round(cardState.pos.x * scaleFactor);
  const posY = Math.round(cardState.pos.y * scaleFactor);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={styles.cardWrapper}
          style={{
            zIndex: cardState.zIndex,
            width: cardWidth,
            height: cardHeight,
          }}
          initial={{
            x: Math.round((config.defaultPos.x + config.entranceOffset.x) * scaleFactor),
            y: Math.round((config.defaultPos.y + config.entranceOffset.y) * scaleFactor),
            rotate: config.defaultRotate + config.entranceOffset.rotate,
            scale: 1.08,
            opacity: 0,
          }}
          animate={{
            x: posX,
            y: posY,
            rotate: cardState.rotate,
            scale: 1,
            opacity: 1,
          }}
          exit={{
            opacity: 0,
            scale: 0.9,
            transition: { duration: 0.25 },
          }}
          transition={
            isDraggingCard || isResizingHandle
              ? { duration: 0 }
              : cardState.isEntering
              ? config.id === IMAGES[0].id
                ? {
                    duration: 1.6,
                    ease: [0.16, 1, 0.3, 1],
                  }
                : {
                    type: "spring",
                    stiffness: 140,
                    damping: 16,
                    mass: 0.9,
                  }
              : isRebounding
              ? {
                  duration: 0.85,
                  ease: [0.16, 1, 0.3, 1],
                }
              : {
                  duration: 0.65,
                  ease: [0.16, 1, 0.3, 1],
                }
          }
          onAnimationComplete={() => {
            setIsRebounding(false);
            onEntranceComplete();
          }}
          onMouseEnter={() => onHoverChange(true)}
          onMouseLeave={() => onHoverChange(false)}
        >
          {/* Card Body - Draggable on pointer down (desktop only) */}
          <div
            className={`${styles.cardInner} ${
              !isMobile && isHovered ? styles.cardInnerHovered : ""
            } ${!isMobile && isDraggingCard ? styles.cardInnerDragging : ""} ${
              !isMobile
                ? isDraggingCard
                  ? "cursor-grabbing"
                  : "cursor-grab"
                : ""
            }`}
            onPointerDown={handleCardPointerDown}
            onPointerMove={handleCardPointerMove}
            onPointerUp={handleCardPointerUp}
            onPointerCancel={handleCardPointerUp}
            onDoubleClick={onDoubleClick}
            title={
              !isMobile
                ? "Drag to move, drag handles to resize (Double-click to reset)"
                : undefined
            }
          >
            <Image
              src={config.src}
              alt={config.alt}
              fill
              unoptimized
              className={styles.imageElement}
              sizes="(max-width: 1024px) 70vw, 35vw"
              priority={
                config.id === "museum" ||
                config.id === "lama" ||
                config.id === "iceland"
              }
            />
          </div>

          {/* Bounding Box Frame & 8 Handles (Desktop only) */}
          {!isMobile && (
            <div
              className={`${styles.boundingBox} ${
                isBoundingBoxActive
                  ? "opacity-100 visible"
                  : "opacity-0 invisible pointer-events-none"
              }`}
            >
              {/* 4 Corner Handles */}
              <span
                className={`${styles.handle} ${styles.handleTl}`}
                onPointerDown={(e) => handleHandlePointerDown("tl", e)}
                onPointerMove={handleHandlePointerMove}
                onPointerUp={handleHandlePointerUp}
                onPointerCancel={handleHandlePointerUp}
                title="Resize"
              />
              <span
                className={`${styles.handle} ${styles.handleTr}`}
                onPointerDown={(e) => handleHandlePointerDown("tr", e)}
                onPointerMove={handleHandlePointerMove}
                onPointerUp={handleHandlePointerUp}
                onPointerCancel={handleHandlePointerUp}
                title="Resize"
              />
              <span
                className={`${styles.handle} ${styles.handleBl}`}
                onPointerDown={(e) => handleHandlePointerDown("bl", e)}
                onPointerMove={handleHandlePointerMove}
                onPointerUp={handleHandlePointerUp}
                onPointerCancel={handleHandlePointerUp}
                title="Resize"
              />
              <span
                className={`${styles.handle} ${styles.handleBr}`}
                onPointerDown={(e) => handleHandlePointerDown("br", e)}
                onPointerMove={handleHandlePointerMove}
                onPointerUp={handleHandlePointerUp}
                onPointerCancel={handleHandlePointerUp}
                title="Resize"
              />

              {/* 4 Midpoint Handles */}
              <span
                className={`${styles.handle} ${styles.handleTc}`}
                onPointerDown={(e) => handleHandlePointerDown("tc", e)}
                onPointerMove={handleHandlePointerMove}
                onPointerUp={handleHandlePointerUp}
                onPointerCancel={handleHandlePointerUp}
                title="Resize"
              />
              <span
                className={`${styles.handle} ${styles.handleBc}`}
                onPointerDown={(e) => handleHandlePointerDown("bc", e)}
                onPointerMove={handleHandlePointerMove}
                onPointerUp={handleHandlePointerUp}
                onPointerCancel={handleHandlePointerUp}
                title="Resize"
              />
              <span
                className={`${styles.handle} ${styles.handleMl}`}
                onPointerDown={(e) => handleHandlePointerDown("ml", e)}
                onPointerMove={handleHandlePointerMove}
                onPointerUp={handleHandlePointerUp}
                onPointerCancel={handleHandlePointerUp}
                title="Resize"
              />
              <span
                className={`${styles.handle} ${styles.handleMr}`}
                onPointerDown={(e) => handleHandlePointerDown("mr", e)}
                onPointerMove={handleHandlePointerMove}
                onPointerUp={handleHandlePointerUp}
                onPointerCancel={handleHandlePointerUp}
                title="Resize"
              />
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
