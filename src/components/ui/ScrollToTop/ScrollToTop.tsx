"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import styles from "./ScrollToTop.module.css";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        const startPosition = window.scrollY;
        const targetPosition = 0;
        const distance = targetPosition - startPosition;
        const duration = 1500; // 1.5 seconds scroll duration
        let start: number | null = null;

        function animation(currentTime: number) {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const progress = Math.min(timeElapsed / duration, 1);

            // easeInOutCubic easing function
            const ease = progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;

            window.scrollTo(0, startPosition + distance * ease);

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        }

        requestAnimationFrame(animation);
    };

    return (
        <button
            className={`${styles.scrollToTop} ${isVisible ? styles.visible : ""}`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            <ChevronUp size={24} strokeWidth={2.5} />
        </button>
    );
}
