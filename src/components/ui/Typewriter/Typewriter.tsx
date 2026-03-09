"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
    text: string;
    speed?: number;
    delay?: number;
    onComplete?: () => void;
    showCursor?: boolean;
}

export default function Typewriter({
    text = "",
    speed = 35,
    delay = 0,
    onComplete,
    showCursor = true,
}: TypewriterProps) {
    const [displayedText, setDisplayedText] = useState("");
    const [started, setStarted] = useState(false);
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        let isMounted = true;
        const d = setTimeout(() => {
            if (isMounted) setStarted(true);
        }, delay);
        return () => {
            isMounted = false;
            clearTimeout(d);
        };
    }, [delay]);

    useEffect(() => {
        if (!started || completed) return;

        let isMounted = true;
        let i = 0;
        let timeoutId: ReturnType<typeof setTimeout>;

        const typeNextChar = () => {
            if (!isMounted) return;

            // Speed up rendering for fast intervals to bypass browser 16ms setTimeout minimum limit
            const step = Math.max(1, Math.ceil(16 / Math.max(speed, 1)));

            i += step;
            setDisplayedText(text.slice(0, i));

            if (!text || i >= text.length) {
                setCompleted(true);
                if (onComplete && isMounted) {
                    onComplete();
                }
            } else {
                const char = text[i - 1];
                let currentSpeed = speed * step;

                // Add natural variance proportional to grouped speed
                currentSpeed += Math.random() * (currentSpeed * 0.5);

                // Pause a bit more on punctuation
                if (char && ['.', ',', '!', '?'].includes(char)) {
                    currentSpeed += speed * 4;
                }

                timeoutId = setTimeout(typeNextChar, currentSpeed);
            }
        };

        timeoutId = setTimeout(typeNextChar, speed);

        return () => {
            isMounted = false;
            clearTimeout(timeoutId);
        };
    }, [started, completed, text, speed, onComplete]);

    return (
        <>
            <span className="whitespace-pre-wrap">{displayedText || "\u00A0"}</span>
            {showCursor && !completed && (
                <motion.span
                    initial={{ opacity: 1 }}
                    animate={{ opacity: [1, 1, 0, 0] }}
                    transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        times: [0, 0.5, 0.5, 1]
                    }}
                    className="inline-block w-[2px] h-[1.1em] ml-[2px] bg-[var(--color-brand-primary-500)] align-baseline -translate-y-[0.05em]"
                />
            )}
        </>
    );
}
