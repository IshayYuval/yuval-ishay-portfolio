"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterWordReplaceProps {
    baseText: string;
    words: string[];
    speed?: number;
    deleteSpeed?: number;
    delay?: number;
    pauseDuration?: number;
    emptyPauseDuration?: number;
}

export default function TypewriterWordReplace({
    baseText,
    words,
    speed = 60,
    deleteSpeed = 40,
    delay = 0,
    pauseDuration = 2000,
    emptyPauseDuration = 500,
}: TypewriterWordReplaceProps) {
    const [displayedBase, setDisplayedBase] = useState("");
    const [displayedWord, setDisplayedWord] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [phase, setPhase] = useState<"initial-delay" | "typing-base" | "typing-word" | "pausing" | "deleting-word" | "pausing-empty">("initial-delay");

    useEffect(() => {
        let isMounted = true;
        let timeoutId: NodeJS.Timeout;

        const loop = () => {
            if (!isMounted) return;

            if (phase === "initial-delay") {
                timeoutId = setTimeout(() => {
                    if (isMounted) setPhase("typing-base");
                }, delay);
            } 
            else if (phase === "typing-base") {
                if (displayedBase.length < baseText.length) {
                    const char = baseText[displayedBase.length];
                    let currentSpeed = speed + Math.random() * speed;
                    if (char && ['.', ',', '!', '?'].includes(char)) currentSpeed += speed * 4;
                    if (char === ' ') currentSpeed += speed * 1.5;
                    
                    timeoutId = setTimeout(() => {
                        if (isMounted) setDisplayedBase(baseText.slice(0, displayedBase.length + 1));
                    }, currentSpeed);
                } else {
                    if (isMounted) setPhase("typing-word");
                }
            } 
            else if (phase === "typing-word") {
                const targetWord = words[wordIndex];
                if (displayedWord.length < targetWord.length) {
                    let currentSpeed = speed + Math.random() * speed;
                    timeoutId = setTimeout(() => {
                        if (isMounted) setDisplayedWord(targetWord.slice(0, displayedWord.length + 1));
                    }, currentSpeed);
                } else {
                    if (isMounted) setPhase("pausing");
                }
            } 
            else if (phase === "pausing") {
                timeoutId = setTimeout(() => {
                    if (isMounted) setPhase("deleting-word");
                }, pauseDuration);
            } 
            else if (phase === "deleting-word") {
                if (displayedWord.length > 0) {
                    timeoutId = setTimeout(() => {
                        if (isMounted) setDisplayedWord(displayedWord.slice(0, displayedWord.length - 1));
                    }, deleteSpeed);
                } else {
                    if (isMounted) {
                        setWordIndex((prev) => (prev + 1) % words.length);
                        setPhase("pausing-empty");
                    }
                }
            }
            else if (phase === "pausing-empty") {
                timeoutId = setTimeout(() => {
                    if (isMounted) setPhase("typing-word");
                }, emptyPauseDuration);
            }
        };

        loop();

        return () => {
            isMounted = false;
            clearTimeout(timeoutId);
        };
    }, [phase, displayedBase, displayedWord, wordIndex, baseText, words, delay, speed, deleteSpeed, pauseDuration, emptyPauseDuration]);

    return (
        <span className="inline-flex items-center whitespace-pre-wrap">
            <span>{displayedBase}{displayedWord || (phase === 'initial-delay' ? "\u00A0" : "")}</span>
            <motion.span
                initial={{ opacity: 1 }}
                animate={{ opacity: [1, 1, 0, 0] }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    times: [0, 0.5, 0.5, 1]
                }}
                className="inline-block w-[3px] h-[1em] ml-[4px] bg-[var(--color-brand-primary-500)]"
            />
        </span>
    );
}
