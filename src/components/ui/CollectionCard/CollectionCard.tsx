"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Collection } from "@/data/portfolio";
import styles from "./CollectionCard.module.css";

interface CollectionCardProps {
  collection: Collection;
}

type Corner = "tl" | "tr" | "bl" | "br";

const DEFAULT_RADIUS = 16; // 1rem (--radius-md)

export default function CollectionCard({ collection }: CollectionCardProps) {
  const [radius, setRadius] = useState<number>(DEFAULT_RADIUS);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [activeCorner, setActiveCorner] = useState<Corner | null>(null);
  const [hoveredCorner, setHoveredCorner] = useState<Corner | null>(null);
  const [maxRadius, setMaxRadius] = useState<number>(100);

  const cardRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef<{
    x: number;
    y: number;
    initialRadius: number;
    corner: Corner;
    hasMoved: boolean;
  } | null>(null);
  const justDraggedRef = useRef<boolean>(false);

  // Measure card dimensions to clamp maxRadius dynamically
  useEffect(() => {
    const updateDimensions = () => {
      if (cardRef.current) {
        const { width, height } = cardRef.current.getBoundingClientRect();
        if (width > 0 && height > 0) {
          setMaxRadius(Math.floor(Math.min(width, height) / 2));
        }
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Handle dragging corner radius
  useEffect(() => {
    if (!isDragging) return;

    const originalCursor = document.body.style.cursor;
    const originalUserSelect = document.body.style.userSelect;
    const cursor =
      activeCorner === "tl" || activeCorner === "br"
        ? "nwse-resize"
        : "nesw-resize";
    document.body.style.cursor = cursor;
    document.body.style.userSelect = "none";

    const handlePointerMove = (e: PointerEvent) => {
      if (!dragStartRef.current) return;
      const { x: startX, y: startY, initialRadius, corner } =
        dragStartRef.current;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;

      if (Math.abs(dx) > 2 || Math.abs(dy) > 2) {
        dragStartRef.current.hasMoved = true;
      }

      // Project mouse movement onto the 45-degree diagonal towards card center
      let delta = 0;
      if (corner === "tl") {
        delta = (dx + dy) * 0.7071;
      } else if (corner === "tr") {
        delta = (-dx + dy) * 0.7071;
      } else if (corner === "bl") {
        delta = (dx - dy) * 0.7071;
      } else if (corner === "br") {
        delta = (-dx - dy) * 0.7071;
      }

      const nextRadius = Math.round(
        Math.max(0, Math.min(maxRadius, initialRadius + delta))
      );
      setRadius(nextRadius);
    };

    const handlePointerUp = () => {
      if (dragStartRef.current?.hasMoved) {
        justDraggedRef.current = true;
        setTimeout(() => {
          justDraggedRef.current = false;
        }, 150);
      }
      dragStartRef.current = null;
      setIsDragging(false);
      setActiveCorner(null);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerUp);

    return () => {
      document.body.style.cursor = originalCursor;
      document.body.style.userSelect = originalUserSelect;
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
    };
  }, [isDragging, activeCorner, maxRadius]);

  const handlePointerDown = (
    e: React.PointerEvent<HTMLDivElement>,
    corner: Corner
  ) => {
    e.preventDefault();
    e.stopPropagation();

    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      initialRadius: radius,
      corner,
      hasMoved: false,
    };
    setIsDragging(true);
    setActiveCorner(corner);
  };

  const handleDoubleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setRadius(DEFAULT_RADIUS);
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    if (justDraggedRef.current || isDragging) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  // Position of corner circle handles:
  // Mirrors design tools (Figma) where the handle sits at (radius, radius),
  // with a small minimum inset so it does not collide with the outer bounding box handle at radius=0.
  const handleOffset =
    radius <= 16
      ? 12 + (radius * 4) / 16
      : Math.min(maxRadius, radius);

  const isVisible = isHovered || isDragging;

  return (
    <div
      className="relative h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Clickable Card */}
      <Link
        href={`/${collection.slug}`}
        onClick={handleLinkClick}
        className="block h-full cursor-pointer focus:outline-none"
      >
        <div
          ref={cardRef}
          className={`${styles.container} h-full p-8 md:p-10 flex flex-col relative select-none overflow-hidden transition-colors duration-200`}
          style={{
            borderRadius: `${radius}px`,
            borderColor: isDragging
              ? "var(--color-brand-primary-500)"
              : "transparent",
            transition: isDragging
              ? "none"
              : "border-radius 0.15s ease-out, border-color 0.2s ease-out",
          }}
        >
          <h4 className="mb-2 text-white transition-colors duration-200">
            {collection.title}
          </h4>
          <p className="text-body opacity-80 text-white leading-relaxed">
            {collection.description}
          </p>
        </div>
      </Link>

      {/* Bounding Box Frame & Corner Circle Handles Overlay */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-150 z-20 ${isVisible ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      >
        {/* Outer Bounding Box Rectangle */}
        <div className={`absolute inset-0 ${styles.boundingBox}`}>
          {/* 4 Corner Square Handles */}
          <span
            className={`absolute -top-[5px] -left-[5px] ${styles.squareHandle}`}
          />
          <span
            className={`absolute -top-[5px] -right-[5px] ${styles.squareHandle}`}
          />
          <span
            className={`absolute -bottom-[5px] -left-[5px] ${styles.squareHandle}`}
          />
          <span
            className={`absolute -bottom-[5px] -right-[5px] ${styles.squareHandle}`}
          />

          {/* 4 Midpoint Square Handles */}
          <span
            className={`absolute -top-[5px] left-1/2 -translate-x-1/2 ${styles.squareHandle}`}
          />
          <span
            className={`absolute -bottom-[5px] left-1/2 -translate-x-1/2 ${styles.squareHandle}`}
          />
          <span
            className={`absolute top-1/2 -left-[5px] -translate-y-1/2 ${styles.squareHandle}`}
          />
          <span
            className={`absolute top-1/2 -right-[5px] -translate-y-1/2 ${styles.squareHandle}`}
          />
        </div>

        {/* 4 Interactive Corner Circle Handles */}
        {/* Top-Left */}
        <div
          className={`${styles.cornerCircleHitbox} cursor-nwse-resize`}
          style={{
            left: `${handleOffset}px`,
            top: `${handleOffset}px`,
            transform: "translate(-50%, -50%)",
          }}
          onPointerDown={(e) => handlePointerDown(e, "tl")}
          onMouseEnter={() => setHoveredCorner("tl")}
          onMouseLeave={() => setHoveredCorner(null)}
          onDoubleClick={handleDoubleClick}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          title="Drag to change corner radius (Double-click to reset)"
        >
          <CornerCircleSvg
            active={activeCorner === "tl"}
            hovered={hoveredCorner === "tl"}
          />
        </div>

        {/* Top-Right */}
        <div
          className={`${styles.cornerCircleHitbox} cursor-nesw-resize`}
          style={{
            right: `${handleOffset}px`,
            top: `${handleOffset}px`,
            transform: "translate(50%, -50%)",
          }}
          onPointerDown={(e) => handlePointerDown(e, "tr")}
          onMouseEnter={() => setHoveredCorner("tr")}
          onMouseLeave={() => setHoveredCorner(null)}
          onDoubleClick={handleDoubleClick}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          title="Drag to change corner radius (Double-click to reset)"
        >
          <CornerCircleSvg
            active={activeCorner === "tr"}
            hovered={hoveredCorner === "tr"}
          />
        </div>

        {/* Bottom-Left */}
        <div
          className={`${styles.cornerCircleHitbox} cursor-nesw-resize`}
          style={{
            left: `${handleOffset}px`,
            bottom: `${handleOffset}px`,
            transform: "translate(-50%, 50%)",
          }}
          onPointerDown={(e) => handlePointerDown(e, "bl")}
          onMouseEnter={() => setHoveredCorner("bl")}
          onMouseLeave={() => setHoveredCorner(null)}
          onDoubleClick={handleDoubleClick}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          title="Drag to change corner radius (Double-click to reset)"
        >
          <CornerCircleSvg
            active={activeCorner === "bl"}
            hovered={hoveredCorner === "bl"}
          />
        </div>

        {/* Bottom-Right */}
        <div
          className={`${styles.cornerCircleHitbox} cursor-nwse-resize`}
          style={{
            right: `${handleOffset}px`,
            bottom: `${handleOffset}px`,
            transform: "translate(50%, 50%)",
          }}
          onPointerDown={(e) => handlePointerDown(e, "br")}
          onMouseEnter={() => setHoveredCorner("br")}
          onMouseLeave={() => setHoveredCorner(null)}
          onDoubleClick={handleDoubleClick}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          title="Drag to change corner radius (Double-click to reset)"
        >
          <CornerCircleSvg
            active={activeCorner === "br"}
            hovered={hoveredCorner === "br"}
          />
        </div>
      </div>
    </div>
  );
}

/**
 * Corner circle handle graphic:
 * Recreates the design-tool concentric circle handle (outer ring + inner filled dot)
 * in our brand color.
 */
function CornerCircleSvg({
  active,
  hovered,
}: {
  active: boolean;
  hovered: boolean;
}) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-all duration-150 select-none`}
    >
      {/* Outer circle with dark fill to mask background content */}
      <circle
        cx="9"
        cy="9"
        r="7.5"
        fill="var(--color-brand-secondary-900, #151E3D)"
        stroke="var(--color-brand-primary-500, #8BFCF4)"
        strokeWidth="1.75"
      />
      {/* Inner filled dot in brand color */}
      <circle
        cx="9"
        cy="9"
        r="2.5"
        fill="var(--color-brand-primary-500, #8BFCF4)"
      />
    </svg>
  );
}
