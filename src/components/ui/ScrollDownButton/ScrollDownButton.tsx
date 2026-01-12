"use client";

import { ChevronDown } from "lucide-react";

interface ScrollDownButtonProps {
    targetId: string;
}

export default function ScrollDownButton({ targetId }: ScrollDownButtonProps) {
    const handleScroll = () => {
        const element = document.getElementById(targetId);
        if (element) {
            // Get header height from CSS variable or fallback number.
            // Since we know it's 80px, closely matching it ensures it tucks under nicely.
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <button
            onClick={handleScroll}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center animate-bounce text-white/80 hover:text-white transition-colors"
            style={{ animationDuration: "2s" }}
            aria-label="Scroll down"
        >
            <ChevronDown className="w-8 h-8" />
        </button>
    );
}
