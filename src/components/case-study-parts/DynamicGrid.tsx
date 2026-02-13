import React from "react";
import Image from "next/image";
import LightboxImage from "../ui/LightboxImage/LightboxImage";
import { GalleryItem } from "@/data/portfolio";

interface DynamicGridProps {
    items: GalleryItem[];
}

export default function DynamicGrid({ items }: DynamicGridProps) {
    if (!items || items.length === 0) return null;

    // Create slides for Lightbox, filtering out items without a src (e.g. Vimeo videos without a placeholder)
    const slides = items
        .filter(item => item.src && item.src.length > 0)
        .map(item => ({ src: item.src }));

    // Group items into rows
    // logic: "full" takes a whole row. Consecutive "half" take a row (up to 2? or unlimited? Usually just 2 for this prompt).
    // The prompt implies "if I have one image larger than the other on the same row". So assuming pairs of 2.
    const rows: GalleryItem[][] = [];
    let currentRow: GalleryItem[] = [];

    items.forEach((item) => {
        if (item.colSpan === 'full') {
            if (currentRow.length > 0) {
                rows.push(currentRow);
                currentRow = [];
            }
            rows.push([item]);
        } else {
            // "half"
            currentRow.push(item);
            if (currentRow.length === 2) {
                rows.push(currentRow);
                currentRow = [];
            }
        }
    });
    if (currentRow.length > 0) {
        rows.push(currentRow); // leftover item
    }

    let slideIndex = 0;

    return (
        <div className="flex flex-col gap-2 w-full my-12">
            {rows.map((row, rowIndex) => {
                const isSingle = row.length === 1;

                if (isSingle) {
                    const item = row[0];
                    // Only increment slide index if item is part of slides
                    const currentSlideIndex = (item.src && item.src.length > 0) ? slideIndex++ : -1;

                    return (
                        <div key={rowIndex} className="w-full relative overflow-hidden rounded-lg">
                            {item.vimeoSrc ? (
                                <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                                    <iframe
                                        src={item.vimeoSrc}
                                        frameBorder="0"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                        title={item.alt}
                                    ></iframe>
                                </div>
                            ) : (
                                <LightboxImage
                                    src={item.src}
                                    alt={item.alt}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: '100%', height: 'auto' }}
                                    className="hover:scale-105 transition-transform duration-500 ease-out"
                                    lightboxSlides={slides}
                                    lightboxIndex={currentSlideIndex}
                                    enableZoom={true}
                                />
                            )}
                        </div>
                    )
                }

                // Row with 2 items (or multiple "half")
                // We calculate flex-grow based on aspect ratio = width / height.
                // If we don't have w/h, assume equal.
                // To keep equal HEIGHT, the width we explicitly give (flex-basis or grow) should be proportional to aspect ratio.
                return (
                    <div key={rowIndex} className="flex flex-row gap-2 w-full">
                        {row.map((item, i) => {
                            // Only increment slide index if item is part of slides
                            const currentSlideIndex = (item.src && item.src.length > 0) ? slideIndex++ : -1;
                            const ar = (item.width && item.height) ? item.width / item.height : 1.5; // default 3:2

                            return (
                                <div
                                    key={i}
                                    className="relative overflow-hidden rounded-lg"
                                    style={{ flex: `${ar} 1 0%` }}
                                >
                                    {item.vimeoSrc ? (
                                        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                                            {/* Vimeo in a flexible row might be tricky with pb-check. 
                                                 Usually vimeo is 16:9. 
                                                 If it's in a flexible row with an image, we want equal height.
                                                 We should rely on the aspect-ratio of the container?
                                                 Actually, for equal height row, we just need the flex ratio to be correct.
                                                 The content inside just needs to fill.
                                             */}
                                            <iframe
                                                src={item.vimeoSrc}
                                                frameBorder="0"
                                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                                                referrerPolicy="strict-origin-when-cross-origin"
                                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                                title={item.alt}
                                            ></iframe>
                                        </div>
                                    ) : (
                                        <LightboxImage
                                            src={item.src}
                                            alt={item.alt}
                                            width={0}
                                            height={0}
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            className="hover:scale-105 transition-transform duration-500 ease-out"
                                            lightboxSlides={slides}
                                            lightboxIndex={currentSlideIndex}
                                            enableZoom={true}
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}
