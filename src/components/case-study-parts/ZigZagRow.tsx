import React from "react";
import Image from "next/image";
import { ZigZagSection } from "@/data/portfolio";
import { renderTextWithBreaks } from "@/utils/text";

export default function ZigZagRow({ image, title, text, reverse }: ZigZagSection) {
    return (
        <div className={`flex flex-col md:flex-row items-center gap-4 md:gap-8 my-12 ${reverse ? 'md:flex-row-reverse' : ''}`}>
            {/* Image Side */}

            <div className="w-full md:w-2/3 relative md:aspect-[4/3] overflow-hidden rounded-lg">
                {/* Mobile Image: Hug content height */}
                <Image
                    src={image}
                    alt={title || "Case study image"}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto md:hidden"
                />
                {/* Desktop Image: Fixed aspect ratio, contained */}
                <Image
                    src={image}
                    alt={title || "Case study image"}
                    fill
                    className="object-contain hidden md:block"
                />
            </div>

            {/* Text Side */}
            <div className="w-full md:w-1/3 flex flex-col justify-center">
                {title && <h3 className="mb-4">{renderTextWithBreaks(title)}</h3>}
                <p>
                    {renderTextWithBreaks(text)}
                </p>
            </div>
        </div>
    );
}
