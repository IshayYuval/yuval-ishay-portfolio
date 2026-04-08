"use client";
import { motion } from "framer-motion";
import React from "react";

export interface AnimatedTextProps {
    text: string;
    className?: string;
    /** If true, the entire text segment won't line-break internally. */
    noWrap?: boolean;
}

export default function AnimatedText({ text, className = "", noWrap = false }: AnimatedTextProps) {
    // If noWrap is true, treat the entire string as a single word block.
    // Otherwise, split into words (preserving trailing spaces) so wrapping can occur between words.
    const words = noWrap ? [text] : text.match(/\S+\s*/g) || [];

    return (
        <span className={`${noWrap ? "inline-block whitespace-nowrap " : ""}${className}`}>
            {words.map((word, wordIndex) => (
                <span key={`word-${wordIndex}`} className="inline-block whitespace-nowrap">
                    {word.split("").map((char, charIndex) => (
                        <motion.span
                            key={`char-${wordIndex}-${charIndex}`}
                            variants={{
                                hidden: { opacity: 0, display: "none" },
                                visible: { opacity: 1, display: "inline-block" }
                            }}
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </span>
            ))}
        </span>
    );
}
