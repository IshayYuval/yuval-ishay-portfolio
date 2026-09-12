import React from "react";
import Image from "next/image";
import { ZigZagSection } from "@/data/portfolio";
import { renderTextWithBreaks } from "@/utils/text";

import LightboxImage from "../ui/LightboxImage/LightboxImage";

interface ZigZagRowProps extends ZigZagSection {
    enableLightbox?: boolean;
    lightboxSlides?: { src: string }[];
    lightboxIndex?: number;
}

export default function ZigZagRow({
    image,
    title,
    text,
    description,
    reverse,
    enableLightbox = false,
    lightboxSlides,
    lightboxIndex = 0,
}: ZigZagRowProps) {
    const displayText = description || text;

    return (
        <div className={`flex flex-col md:flex-row items-center gap-4 md:gap-8 my-12 ${reverse ? 'md:flex-row-reverse' : ''}`}>
            {/* Image Side */}

            <div className="w-full md:w-2/3 relative md:aspect-[4/3] overflow-hidden rounded-lg">
                {/* Mobile Image: Hug content height */}
                {enableLightbox ? (
                    <LightboxImage
                        src={image}
                        alt={title || "Case study image"}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto md:hidden"
                        enableZoom={true}
                        lightboxSlides={lightboxSlides}
                        lightboxIndex={lightboxIndex}
                    />
                ) : (
                    <Image
                        src={image}
                        alt={title || "Case study image"}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto md:hidden"
                    />
                )}

                {/* Desktop Image: Fixed aspect ratio, contained */}
                {enableLightbox ? (
                    <LightboxImage
                        src={image}
                        alt={title || "Case study image"}
                        fill
                        className="object-contain hidden md:block"
                        enableZoom={true}
                        lightboxSlides={lightboxSlides}
                        lightboxIndex={lightboxIndex}
                    />
                ) : (
                    <Image
                        src={image}
                        alt={title || "Case study image"}
                        fill
                        className="object-contain hidden md:block"
                    />
                )}
            </div>

            {/* Text Side */}
            <div className="w-full md:w-1/3 flex flex-col justify-center">
                {title && <h3 className="mb-4">{renderTextWithBreaks(title)}</h3>}
                {displayText && (
                    <p className="text-body">
                        {renderTextWithBreaks(displayText)}
                    </p>
                )}
            </div>
        </div>
    );
}
