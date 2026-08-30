"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image, { ImageProps } from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

interface LightboxImageProps extends Omit<ImageProps, "onClick"> {
    lightboxSlides?: { src: string }[]; // Optional: if you want to show a gallery, otherwise it shows just this image
    lightboxIndex?: number; // Optional: the index of the image in the slides array
    onClick?: (event: React.MouseEvent<HTMLImageElement>) => void;
    enableZoom?: boolean;
}

export default function LightboxImage({
    lightboxSlides,
    lightboxIndex = 0,
    className,
    onClick,
    enableZoom = false,
    ...props
}: LightboxImageProps) {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(lightboxIndex);

    // If slides are provided, use them. Otherwise, use the current image as the single slide.
    const slides = useMemo(() => {
        if (lightboxSlides && lightboxSlides.length > 0) {
            return lightboxSlides;
        }
        const src = typeof props.src === "string" ? props.src : (props.src as any)?.src;
        return src ? [{ src }] : [];
    }, [lightboxSlides, props.src]);

    // Reset index to the prop value whenever the lightbox opens
    useEffect(() => {
        if (open) {
            setIndex(lightboxIndex);
        }
    }, [open, lightboxIndex]);

    const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
        if (onClick) onClick(e);
        setIndex(lightboxIndex);
        setOpen(true);
    };

    return (
        <>
            <Image
                {...props}
                className={`cursor-zoom-in ${className || ""}`}
                onClick={handleClick}
                unoptimized
            />

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={slides}
                index={index}
                plugins={enableZoom ? [Zoom] : []}
                on={{
                    view: ({ index: newIndex }) => setIndex(newIndex),
                }}
            />
        </>
    );
}
