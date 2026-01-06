"use client";

import React, { useState } from "react";
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

export default function LightboxImage({ lightboxSlides, lightboxIndex = 0, className, onClick, enableZoom = false, ...props }: LightboxImageProps) {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(lightboxIndex);

    // Reset index to the prop value whenever the lightbox opens
    React.useEffect(() => {
        if (open) {
            setIndex(lightboxIndex);
        }
    }, [open, lightboxIndex]);

    // If slides are provided, use them. Otherwise, use the current image as the single slide.
    const slides = lightboxSlides || [
        { src: typeof props.src === "string" ? props.src : (props.src as any).src },
    ];

    const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
        if (onClick) onClick(e);
        setOpen(true);
    };

    return (
        <>
            <Image
                {...props}
                className={`cursor-zoom-in ${className || ""}`}
                onClick={handleClick}
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
