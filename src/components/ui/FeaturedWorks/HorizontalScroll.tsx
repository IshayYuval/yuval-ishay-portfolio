"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useAnimationFrame, useMotionValue, wrap } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { CaseStudy } from "@/data/portfolio";

function CarouselCard({ study }: { study: CaseStudy }) {
    return (
        <Link href={`/${study.slug}`} className="group relative block w-[85vw] sm:w-[50vw] md:w-[40vw] lg:w-[35vw] shrink-0 aspect-[4/3] rounded-[var(--radius-md)] overflow-hidden">
            <div className="absolute inset-0 bg-[var(--color-brand-secondary-800)]">
                {study.cover?.endsWith('.mp4') ? (
                    <video
                        src={study.cover}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                ) : study.cover ? (
                    <Image
                        src={study.cover}
                        alt={study.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                ) : null}
            </div>
            <div className="absolute inset-0 bg-[var(--color-brand-secondary-700)]/0 group-hover:bg-[var(--color-brand-secondary-700)]/60 backdrop-blur-[0px] group-hover:backdrop-blur-[4px] transition-all duration-300 flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100">
                <h3 className="text-white text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {study.title}
                </h3>
            </div>
        </Link>
    );
}

export default function HorizontalScroll({ caseStudies }: { caseStudies: CaseStudy[] }) {
    const [contentWidth, setContentWidth] = useState(0);
    const contentRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const isDragging = useRef(false);

    // Duplicate items to ensure smooth infinite scrolling.
    const duplicatedItems = [...caseStudies, ...caseStudies, ...caseStudies, ...caseStudies];

    useEffect(() => {
        const calculateWidth = () => {
            if (contentRef.current) {
                // The logical loop is exactly 1/4 of total scroll width since we quadruplicated. 
                // We add padding-right equal to gap on the container to make the math perfect.
                setContentWidth(contentRef.current.scrollWidth / 4);
            }
        };

        calculateWidth();
        window.addEventListener("resize", calculateWidth);
        const timeoutId = setTimeout(calculateWidth, 100); // re-calculate after render
        return () => {
            window.removeEventListener("resize", calculateWidth);
            clearTimeout(timeoutId);
        };
    }, [caseStudies]);

    useAnimationFrame((time, delta) => {
        if (isDragging.current || contentWidth === 0) return;

        const speed = 40; // px per second
        const moveBy = -1 * speed * (delta / 1000); // -1 makes it scroll left
        let newX = x.get() + moveBy;

        // Wrap smoothly
        newX = wrap(-contentWidth, 0, newX);
        x.set(newX);
    });

    // Handle drag wrapping
    useEffect(() => {
        const unsubscribe = x.on("change", (v) => {
            if (isDragging.current && contentWidth > 0) {
                const wrapped = wrap(-contentWidth, 0, v);
                if (wrapped !== v) {
                    x.set(wrapped);
                }
            }
        });
        return () => unsubscribe();
    }, [x, contentWidth]);

    // Apply smooth gradient to edges via mask-image
    const maskStyle = {
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
    };

    return (
        <div className="w-full h-full relative flex flex-col justify-start overflow-hidden pt-4 md:pt-8" style={maskStyle}>
            <div className="w-full relative flex items-start h-full touch-none">
                <motion.div
                    ref={contentRef}
                    className="flex flex-row items-start gap-6 md:gap-8 pr-6 md:pr-8 absolute left-0"
                    style={{ x }}
                    drag="x"
                    dragConstraints={{ left: -contentWidth * 2, right: contentWidth }}
                    dragElastic={0}
                    onDragStart={() => isDragging.current = true}
                    onDragEnd={() => isDragging.current = false}
                    whileTap={{ cursor: "grabbing" }}
                >
                    {duplicatedItems.map((study, idx) => (
                        <CarouselCard key={`${study.slug}-${idx}`} study={study} />
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
