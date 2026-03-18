import { useState, useRef, useEffect } from "react";
import { motion, useAnimationFrame, useMotionValue, wrap } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { CaseStudy } from "@/data/portfolio";

function CarouselCard({ study }: { study: CaseStudy }) {
    return (
        <Link href={`/${study.slug}`} className="group relative block w-full aspect-[4/3] rounded-[var(--radius-xl)] overflow-hidden">
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

function CarouselColumn({ items, direction = -1 }: { items: CaseStudy[], direction?: 1 | -1 }) {
    const [contentHeight, setContentHeight] = useState(0);
    const contentRef = useRef<HTMLDivElement>(null);
    const y = useMotionValue(0);
    const isDragging = useRef(false);

    // Duplicate items to allow seamless infinite scrolling
    const duplicatedItems = [...items, ...items, ...items];

    useEffect(() => {
        const calculateHeight = () => {
            if (contentRef.current) {
                // The logical loop is exactly 1/3 of the total scroll height since we triplicated the items
                setContentHeight(contentRef.current.scrollHeight / 3);
            }
        };

        calculateHeight();
        window.addEventListener("resize", calculateHeight);
        return () => window.removeEventListener("resize", calculateHeight);
    }, [items]);

    useAnimationFrame((time, delta) => {
        if (isDragging.current || contentHeight === 0) return;

        const speed = 40; // px per second
        const moveBy = direction * speed * (delta / 1000);
        let newY = y.get() + moveBy;

        // Wrap smoothly
        newY = wrap(-contentHeight, 0, newY);
        y.set(newY);
    });

    // Handle drag wrapping
    useEffect(() => {
        return y.on("change", (v) => {
            if (isDragging.current && contentHeight > 0) {
                const wrapped = wrap(-contentHeight, 0, v);
                if (wrapped !== v) {
                    y.set(wrapped);
                }
            }
        });
    }, [y, contentHeight]);

    // When direction changes, we might want to start from a safe place, but usually wrapping handles it.

    return (
        <div className="flex-1 h-full min-h-0 overflow-hidden relative touch-none">
            <motion.div
                ref={contentRef}
                className="flex flex-col gap-4 absolute w-full"
                style={{ y }}
                drag="y"
                dragConstraints={{ top: -contentHeight * 2, bottom: contentHeight }}
                // Loose constraints just to let framer motion handle inertia, 
                // the `wrap` takes care of the visual looping.
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
    );
}

export default function VerticalCarousel({ caseStudies }: { caseStudies: CaseStudy[] }) {
    // Split case studies into two columns
    const half = Math.ceil(caseStudies.length / 2);
    const column1 = caseStudies.slice(0, half);
    const column2 = caseStudies.slice(half);

    // Apply smooth gradient to edges via mask-image
    const maskStyle = {
        maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
    };

    return (
        <div className="w-full h-full flex flex-row gap-4 absolute inset-0" style={maskStyle}>
            {/* Mobile: 1 column */}
            <div className="flex md:hidden flex-col gap-4 w-full h-full">
                <CarouselColumn items={caseStudies} direction={-1} />
            </div>

            {/* Desktop: 2 columns */}
            <div className="hidden md:flex flex-row gap-4 w-full h-full">
                <CarouselColumn items={column1} direction={-1} />
                <CarouselColumn items={column2} direction={1} />
            </div>
        </div>
    );
}
