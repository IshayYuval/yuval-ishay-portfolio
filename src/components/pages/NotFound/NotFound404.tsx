"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import styles from "./NotFound.module.css";

interface NotFound404Props {
  className?: string;
}

type HandleDirection =
  | "tl"
  | "tc"
  | "tr"
  | "ml"
  | "mr"
  | "bl"
  | "bc"
  | "br";

export default function NotFound404({ className = "" }: NotFound404Props) {
  const boxRef = useRef<HTMLDivElement>(null);
  const [boxSize, setBoxSize] = useState<{ width: number; height: number } | null>(null);
  const [measuredSize, setMeasuredSize] = useState<{ width: number; height: number } | null>(null);
  const [isDraggingHandle, setIsDraggingHandle] = useState(false);

  // Measure rendered size of the bounding box on mount & resize
  React.useEffect(() => {
    const updateMeasured = () => {
      if (boxRef.current) {
        setMeasuredSize({
          width: Math.round(boxRef.current.offsetWidth),
          height: Math.round(boxRef.current.offsetHeight),
        });
      }
    };
    updateMeasured();
    window.addEventListener("resize", updateMeasured);
    return () => window.removeEventListener("resize", updateMeasured);
  }, []);

  // Active drag state refs
  const activeHandleRef = useRef<HandleDirection | null>(null);
  const startPointerPosRef = useRef({ x: 0, y: 0 });
  const startSizeRef = useRef({ width: 120, height: 180 });

  const handlePointerDown = (dir: HandleDirection, e: React.PointerEvent) => {
    e.stopPropagation();
    e.preventDefault();

    setIsDraggingHandle(true);
    activeHandleRef.current = dir;
    startPointerPosRef.current = { x: e.clientX, y: e.clientY };

    // Initialize start size from current boxSize or rendered element dimensions
    const currentW = boxSize?.width ?? (boxRef.current?.offsetWidth || 120);
    const currentH = boxSize?.height ?? (boxRef.current?.offsetHeight || 180);
    startSizeRef.current = { width: currentW, height: currentH };

    try {
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    } catch { }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingHandle || !activeHandleRef.current) return;

    const dx = e.clientX - startPointerPosRef.current.x;
    const dy = e.clientY - startPointerPosRef.current.y;
    const dir = activeHandleRef.current;

    let targetW = startSizeRef.current.width;
    let targetH = startSizeRef.current.height;

    // Width adjustments based on handle direction
    if (dir === "tr" || dir === "mr" || dir === "br") {
      targetW = startSizeRef.current.width + dx * 2;
    } else if (dir === "tl" || dir === "ml" || dir === "bl") {
      targetW = startSizeRef.current.width - dx * 2;
    }

    // Height adjustments based on handle direction
    if (dir === "bl" || dir === "bc" || dir === "br") {
      targetH = startSizeRef.current.height + dy * 2;
    } else if (dir === "tl" || dir === "tc" || dir === "tr") {
      targetH = startSizeRef.current.height - dy * 2;
    }

    // Clamping to sensible min and max limits
    targetW = Math.max(36, Math.min(450, Math.round(targetW)));
    targetH = Math.max(48, Math.min(550, Math.round(targetH)));

    setBoxSize({ width: targetW, height: targetH });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDraggingHandle) return;
    setIsDraggingHandle(false);
    activeHandleRef.current = null;

    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch { }

    // Keeps the size the user applied! Does not revert!
  };

  const handleDoubleClick = () => {
    // Optional reset shortcut on double-click
    setBoxSize(null);
  };

  return (
    <div
      className={`inline-flex items-center justify-center gap-3 sm:gap-6 md:gap-8 select-none ${className}`}
      aria-label="404 Page Not Found"
    >
      {/* Leading '4' */}
      <motion.span
        initial={{ opacity: 0, x: -40, filter: "blur(8px)" }}
        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="font-bold text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] tracking-tighter text-[var(--color-typography-header)] leading-none cursor-default"
      >
        4
      </motion.span>

      {/* The '0' - Bounding Box Component */}
      <div className="relative flex items-center justify-center">
        <motion.div
          ref={boxRef}
          initial={{ opacity: 0, scale: 0.8, rotate: -4 }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          onDoubleClick={handleDoubleClick}
          style={{
            width: boxSize ? `${boxSize.width}px` : undefined,
            height: boxSize ? `${boxSize.height}px` : undefined,
          }}
          className={`w-[54px] h-[78px] sm:w-[72px] sm:h-[105px] md:w-[98px] md:h-[142px] lg:w-[124px] lg:h-[180px] rounded-lg sm:rounded-xl cursor-grab active:cursor-grabbing ${styles.boundingBox}`}
        >
          {/* Floating Figma-style Layer / Dimension Badge (Always shows width and height) */}
          <div className={styles.badge}>
            w: {boxSize?.width ?? measuredSize?.width ?? 124}&nbsp; h: {boxSize?.height ?? measuredSize?.height ?? 180}
          </div>

          {/* Inner geometry forming the aperture of the digit '0' */}
          <div className="relative w-[40%] h-[58%] rounded-md sm:rounded-lg border-2 border-dashed border-[var(--color-brand-primary-500)]/40 bg-[var(--color-brand-secondary-950)]/90 flex items-center justify-center transition-all duration-200 group-hover:border-[var(--color-brand-primary-500)]/80">
            {/* Center crosshair / null point */}
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-primary-500)]" />
          </div>

          {/* Corner & Midpoint Handles */}
          {/* Top-Left */}
          <span
            onPointerDown={(e) => handlePointerDown("tl", e)}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            className={`-top-[5px] -left-[5px] cursor-nwse-resize ${styles.handle}`}
            title="Resize"
          />
          {/* Top-Center */}
          <span
            onPointerDown={(e) => handlePointerDown("tc", e)}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            className={`-top-[5px] left-1/2 -translate-x-1/2 cursor-ns-resize ${styles.handle}`}
            title="Resize"
          />
          {/* Top-Right */}
          <span
            onPointerDown={(e) => handlePointerDown("tr", e)}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            className={`-top-[5px] -right-[5px] cursor-nesw-resize ${styles.handle}`}
            title="Resize"
          />

          {/* Middle-Left */}
          <span
            onPointerDown={(e) => handlePointerDown("ml", e)}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            className={`top-1/2 -translate-y-1/2 -left-[5px] cursor-ew-resize ${styles.handle}`}
            title="Resize"
          />
          {/* Middle-Right */}
          <span
            onPointerDown={(e) => handlePointerDown("mr", e)}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            className={`top-1/2 -translate-y-1/2 -right-[5px] cursor-ew-resize ${styles.handle}`}
            title="Resize"
          />

          {/* Bottom-Left */}
          <span
            onPointerDown={(e) => handlePointerDown("bl", e)}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            className={`-bottom-[5px] -left-[5px] cursor-nesw-resize ${styles.handle}`}
            title="Resize"
          />
          {/* Bottom-Center */}
          <span
            onPointerDown={(e) => handlePointerDown("bc", e)}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            className={`-bottom-[5px] left-1/2 -translate-x-1/2 cursor-ns-resize ${styles.handle}`}
            title="Resize"
          />
          {/* Bottom-Right */}
          <span
            onPointerDown={(e) => handlePointerDown("br", e)}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            className={`-bottom-[5px] -right-[5px] cursor-nwse-resize ${styles.handle}`}
            title="Resize"
          />
        </motion.div>
      </div>

      {/* Trailing '4' */}
      <motion.span
        initial={{ opacity: 0, x: 40, filter: "blur(8px)" }}
        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="font-bold text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] tracking-tighter text-[var(--color-typography-header)] leading-none cursor-default"
      >
        4
      </motion.span>
    </div>
  );
}
