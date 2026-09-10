"use client";

import React from "react";
import { motion } from "framer-motion";
import { renderTextWithBreaks } from "@/utils/text";
import styles from "./PieGraph.module.css";

export interface PieGraphProps {
    percentage?: number;
    value?: number;
    label?: string;
    labelColor?: string;
    labelWeight?: string | number;
    text?: string;
    color?: string;
    trackColor?: string;
    size?: number;
    strokeWidth?: number;
    className?: string;
}

export default function PieGraph({
    percentage,
    value,
    label,
    labelColor,
    labelWeight,
    text,
    color,
    trackColor,
    size = 96,
    strokeWidth = 8,
    className = "",
}: PieGraphProps) {
    // Determine the numeric percentage value
    let numPercentage = typeof percentage === "number" ? percentage : (typeof value === "number" ? value : undefined);

    if (numPercentage === undefined && label) {
        const parsed = parseFloat(label.replace(/[^0-9.]/g, ""));
        if (!isNaN(parsed)) {
            numPercentage = parsed;
        }
    }

    const safePercentage = Math.min(100, Math.max(0, numPercentage ?? 0));
    const displayLabel = label !== undefined ? label : `${Math.round(safePercentage)}%`;

    // SVG geometry calculations
    const radius = (100 - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (safePercentage / 100) * circumference;

    return (
        <div className={`${styles.card} ${className}`}>
            <div
                className={styles.graphWrapper}
                style={{ width: size, height: size }}
            >
                <svg
                    className={styles.svg}
                    width={size}
                    height={size}
                    viewBox="0 0 100 100"
                >
                    {/* Background track circle */}
                    <circle
                        className={styles.trackCircle}
                        cx="50"
                        cy="50"
                        r={radius}
                        fill="transparent"
                        strokeWidth={strokeWidth}
                        style={trackColor ? { stroke: trackColor } : undefined}
                    />

                    {/* Animated progress circle */}
                    <motion.circle
                        className={styles.progressCircle}
                        cx="50"
                        cy="50"
                        r={radius}
                        fill="transparent"
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                        strokeLinecap="round"
                        style={color ? { stroke: color } : undefined}
                        initial={{ strokeDashoffset: circumference }}
                        whileInView={{ strokeDashoffset }}
                        viewport={{ once: true, margin: "-20px" }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    />
                </svg>

                {/* Center label */}
                <div
                    className={styles.centerLabel}
                    style={{
                        color: labelColor,
                        fontWeight: labelWeight,
                    }}
                >
                    {displayLabel}
                </div>
            </div>

            {/* Description text */}
            {text && (
                <p className={styles.text}>
                    {renderTextWithBreaks(text)}
                </p>
            )}
        </div>
    );
}
