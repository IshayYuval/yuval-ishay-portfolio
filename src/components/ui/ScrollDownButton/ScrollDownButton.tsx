"use client";

import { ChevronDown } from "lucide-react";

interface ScrollDownButtonProps {
    targetId: string;
}

import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollDownButton({ targetId }: ScrollDownButtonProps) {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 600], [1, 0]);

    const handleScroll = () => {
        const element = document.getElementById(targetId);
        if (element) {
            // Get header height from CSS variable or fallback number.
            // Since we know it's 80px, closely matching it ensures it tucks under nicely.
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - offset;

            const targetPosition = offsetPosition;
            const startPosition = window.scrollY;
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
        }
    };

    return (
        <motion.button
            onClick={handleScroll}
            className="absolute bottom-8 left-1/2 flex items-center justify-center text-white/80 hover:text-white transition-colors overflow-hidden rounded-full py-2 px-1"
            aria-label="Scroll down"
            initial="initial"
            animate="animate"
            whileHover="hover"
            style={{ x: "-50%", opacity }}
            variants={{
                initial: { y: 0 },
                animate: {
                    y: 15,
                    transition: {
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }
                }
            }}
        >
            <motion.div
                className="flex items-center"
            >
                <motion.div
                    variants={{
                        initial: { rotate: 0 },
                        hover: { rotate: -360 }
                    }}
                    transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                >
                    <ChevronDown className="w-8 h-8" />
                </motion.div>
                <motion.div
                    variants={{
                        initial: { width: 0, opacity: 0 },
                        hover: { width: "auto", opacity: 1 }
                    }}
                    transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                    className="overflow-hidden flex items-center justify-start"
                >
                    <span className="whitespace-nowrap font-medium text-sm pl-2 uppercase">
                        Let me explore myself
                    </span>
                </motion.div>
            </motion.div>
        </motion.button>
    );
}
